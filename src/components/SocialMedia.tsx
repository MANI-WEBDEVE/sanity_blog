import {

  Github,

} from "@/components/icons";
import Link from "next/link";

export default function SocialMedia() {
  return (

    <nav className="flex gap-2 ">

      <Link href={"https://github.com/MANI-WEBDEVE"} target="_blank">
        <Github className={`w-6 h-6 fill-dark dark:fill-light`} />
      </Link>
    </nav>
  );
}
