// import CommentsCard from "@/components/CommentsCard";
import { components } from "../../../components/PortableTextComponents";
// import { client } from "@/sanity/lib/client";
import { urlFor } from "../../../sanity/lib/image";
// import {PortableText} from '@portabletext/react';
import Image from "next/image";
import { Suspense } from 'react';

import CommentsCard from '../../../components/CommentsCard';
import {client} from '../../../sanity/lib/client';
import { PortableText } from "next-sanity";

export const revalidate = 60;

export const generateStaticParams = async () => {
  const query = `*[_type=="blog"]{"slug":slug.current}`;
  const slugs = await client.fetch(query);
  const slugsRoute:string[] = slugs.map(({ slug }: {slug:string}) => `${slug}`);
  return slugsRoute.map((slug) => ({slug})  )
}

export default async function page({params:{slug}}: {params:{slug:string}}) {

  if (!slug) {
    return <div>Invalid slug</div>;
  }


  const query = `*[_type=='blog' && slug.current=='${slug}']{title,Summery,image, content,author->{name, bio, image}}[0]`

const data = await client.fetch(query)
if (!data) {
  return <div>Blog post not found</div>;
}
  return (
    <article className="mt-12 mb-24 px-2 2xl:px-12 flex flex-col gap-y-8">

      {/* Blog Title */}
      <h1 className="text-xl xs:text-3xl lg:text-5xl font-bold text-dark dark:text-light">
        {data.title}
      </h1>

      {/* Featured Image */}
      <Image
        src={urlFor(data.image).url() }
        width={500}
        height={500}
        alt="AI for everyone"
        className="rounded"
      />

      {/* Blog Summary Section */}
      <section>
      <h2 className="text-xl xs:text-2xl md:text-3xl font-bold uppercase text-accentDarkPrimary">
        Summary
      </h2>
      <p className="text-base md:text-xl leading-relaxed text-justify text-dark/80 dark:text-light/80">
       {data.Summery}
      </p>
      </section>

      {/* Author Section (Image & Bio) */}
      <section className="px-2 sm:px-8 md:px-12 flex gap-2 xs:gap-4 sm:gap-6 items-start xs:items-center justify-start">
      <Suspense fallback={<div>Loading...</div>}>
          <Image
            src={urlFor(data.author.image).url()}
            width={200}
            height={200}
            alt="author"
            className="object-cover rounded-full h-12 w-12 sm:h-24 sm:w-24"
          />
        </Suspense>
        <div className="flex flex-col gap-1">
          <h3 className="text-xl font-bold text-dark dark:text-light">{data.author.name}</h3>
          <p className="italic text-xs xs:text-sm sm:text-base text-dark/80 dark:text-light/80">
            {data.author.bio}
          </p>
        </div>
      </section>

      {/* Main Body of Blog */}
      <section className="prose dark:prose-dark max-w-none">
        <PortableText value={data.content} components={components} />
      </section>

     
      <CommentsCard/>
    </article>
  );
}
