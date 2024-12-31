"use client";

import Link from "next/link";
import { Github } from "lucide-react";

export default function ThemeToggle() {
 
  return (
    <>
    <Link href={"https://github.com/MANI-WEBDEVE"} target="_blank">
        <Github className={`w-6 h-6  `} />
      </Link>
    {/* <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="flex items-center justify-center"
    >
      <Sun
        className={`w-6 h-6 -rotate-90 scale-0 transition-all  dark:rotate-0 dark:scale-100 `}
      />

      <Moon
        className={`w-6 h-6 rotate-0 scale-100 transition-all  dark:rotate-90  dark:hidden `}
      />
    </button> */}
      </>
  );
}
