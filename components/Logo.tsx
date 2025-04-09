import React from "react";
import Link from "next/link";
import Image from "next/image";
import LogoIcon from "../assets/images/logo-icon.svg";

function Logo() {
  return (
    <div className="mr-5">
      <Link
        className="text-lg font-bold flex items-center gap-1 group"
        href="/"
      >
        <Image
          src={LogoIcon}
          alt="Logo Icon"
          className="object-cover w-4 h-4 block rotate-[25deg] group-hover:rotate-0 transition-all ease-in-out duration-200"
          width={16}
          height={16}
        />
        Korayhan Aslan
      </Link>
    </div>
  );
}

export default Logo;
