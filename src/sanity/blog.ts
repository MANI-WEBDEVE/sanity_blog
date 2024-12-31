export const blog = {
  name: "blog",
  type: "document",
  title: "Blog",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Post Title",
      description: "Title of the blog post",
      validation: (Rule: any) =>
        Rule.required()
          .min(10)
          .max(100)
          .warning("Title should be between 10 and 100 characters"),
    },

    {
      name: "slug",
      type: "slug",
      title: "Slug",
      description: "Slug of the blog post",
      options: {
        source: "title",
        maxLength: 50,
      },
    },

    {
      name: "Summery",
      type: "text",
      title: "Summery",
      description: "Summery of the blog post",
      validation: (Rule: any) =>
        Rule.required()
          .min(10)
          .max(100)
          .warning("Summery should be between 10 and 100 characters"),
    },

    {
      name: "image",
      type: "image",
      title: "Image",
      description: "Image of the blog post",
      validation: (Rule: any) => Rule.required().warning("Image is required"),
    },

    {
      name: "content",
      type: "array",
      title: "Content",
      description: "Content of the blog post",
      validation: (Rule: any) => Rule.required().warning("Content is required"),
      of: [
        { type: "block" },
        // {type: 'actor'},
        { type: "image" },
      ],
    },
    {
      name: "author",
      type: "reference",
      title: "Author",
      to: [
        {
          type: "author",
        },
      ],
    },
    //  {
    //   name:"Gender",
    //   type:"string",
    //   title:"Gender",
    //   options:{ // are your create dropdown options for the user to select from
    //       list:[
    //           {title:"Male", value:"male"},
    //           {title:"Female", value:"female"},
    //           {title:"Other", value:"other"}
    //       ],
    //       layout:"radio", // this will make the options to be displayed as radio buttons
    //       direction:"horizontal" // this will make the radio buttons to be displayed horizontally

    //   }
    //  }
  ],
};
