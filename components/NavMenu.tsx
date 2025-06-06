import Link from "next/link";
import React from "react";
import { IoLogoGithub } from "react-icons/io";

function NavMenu() {
  return (
    <div className="md:flex items-center gap-2 grow hidden">
      <Link
        className="p-2 opacity-85 hover:opacity-100 transition-all ease-in-out"
        href="/works"
      >
        Works
      </Link>
      <Link
        className="p-2 opacity-85 hover:opacity-100 transition-all ease-in-out"
        href="/stack"
      >
        Stack
      </Link>
      <Link
        className="p-2 opacity-85 hover:opacity-100 transition-all ease-in-out"
        href="/posts"
      >
        Posts
      </Link>
      <Link
        className="flex items-center gap-1 p-2 opacity-85 hover:opacity-100 transition-all ease-in-out"
        href="https://github.com/imGrappa/nextjs-portfolio"
        target="_blank"
      >
        <IoLogoGithub />
        Source
      </Link>
    </div>
  );
}

export default NavMenu;
