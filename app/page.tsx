"use client";
import { Terminal } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import * as React from "react";
import Image from "next/image";
import pp from "../assets/images/pp.jpeg";
import Link from "next/link";
import {
  IoLogoGithub,
  IoLogoYoutube,
  IoLogoInstagram,
  IoLogoLinkedin,
} from "react-icons/io";
import thumbYoutube from "../assets/images/js.png";
import thumbSinglePage from "../assets/images/single.png";

export default function Home() {
  return (
    <main>
      <Alert>
        <Terminal className="h-4 w-4" />
        <AlertTitle>Hello,</AlertTitle>
        <AlertDescription>
          I&apos;m an indie front-end developer based in Turkey!
        </AlertDescription>
      </Alert>
      <article>
        <div className="flex mt-6">
          <div className="grow">
            <h2 className="text-4xl font-bold">Korayhan ASLAN</h2>
            <p>Digital Craftsman ( Front-end Developer )</p>
          </div>
          <div className="w-[100px] h-[100px] overflow-hidden rounded-full object-cover border-[2px] border-white ml-6">
            <Image
              src={pp}
              width={900}
              height={1600}
              alt="Korayhan"
              className="w-full h-full object-cover block rounded-full"
            />
          </div>
        </div>
        <div>
          <h3 className="text-xl font-bold inline-block border-b-[2px] mb-2 mt-3">
            Work
          </h3>
          <p className="text-justify indent-[1em]">
            I've been a developer for over 5 years and previously worked as a
            front-end developer at “Talk Solutions” and before that at
            “RavenSoft”. Before that, I worked as a freelance front-end
            developer for a long time. I especially enjoy working on developing
            projects from scratch. I try to contribute to the community by
            posting web development videos on my{" "}
            <a
              target="_blank"
              className="font-medium text-[#81E6D9] hover:underline"
              href="https://www.youtube.com/@korayaslnn"
            >
              Youtube channel
            </a>
            .
          </p>
          <div className="text-center my-4">
            <Link
              href="/works"
              className="inline-flex items-center px-4 min-w-[2.5rem] h-10 rounded-sm bg-card dark:hover:bg-card-foreground dark:hover:text-gray-900 hover:bg-[#0a0a0a] hover:text-white transition-all duration-200 ease-in-out border gap-1"
            >
              My Portfolio
              <span className="flex items-center justify-center">
                <svg
                  className="w-4 h-4"
                  viewBox="0 0 24 24"
                  focusable="false"
                  aria-hidden="true"
                >
                  <path
                    fill="currentColor"
                    d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"
                  ></path>
                </svg>
              </span>
            </Link>
          </div>
        </div>
        <div>
          <h3 className="text-xl font-bold inline-block border-b-[2px] mb-2 mt-3">
            Bio
          </h3>
          <div className="flex">
            <span className="font-bold inline-block me-5">2000</span>
            Born in Kadikoy, Turkey.
          </div>
          <div className="flex">
            <span className="font-bold inline-block me-5">2018</span>
            Completed the Department of Interior Design.
          </div>
          <div className="flex">
            <span className="font-bold inline-block me-5">2019</span>
            Started working as a freelancer.
          </div>
          <div className="flex">
            <span className="font-bold inline-block me-5">2021</span>
            Worked at RavenSoft Web Software Support Services.
          </div>
          <div className="flex">
            <span className="font-bold inline-block me-5">2021</span>
            Worked at Talk Solutions.
          </div>
          <div className="flex">
            <span className="font-bold inline-block me-5">2022 to present</span>
            Working as a freelancer.
          </div>
        </div>
        <div>
          <h3 className="text-xl font-bold inline-block border-b-[2px] mb-2 mt-5">
            On the web
          </h3>
          <ul>
            <li>
              <Link
                href="https://github.com/imGrappa"
                target="_blank"
                className="inline-flex items-center h-10 font-semibold rounded-sm px-3.5 text-[#81E6D9] hover:bg-[#81e6d91f]"
              >
                <span className="inline-flex self-center me-2">
                  <IoLogoGithub />
                </span>
                @imGrappa
              </Link>
            </li>
            <li>
              <Link
                href="https://www.youtube.com/@korayaslnn"
                target="_blank"
                className="inline-flex items-center h-10 font-semibold rounded-sm px-3.5 text-[#81E6D9] hover:bg-[#81e6d91f]"
              >
                <span className="inline-flex self-center me-2">
                  <IoLogoYoutube />
                </span>
                @korayaslnn
              </Link>
            </li>
            <li>
              <Link
                href="https://www.instagram.com/koray_aslnn/"
                target="_blank"
                className="inline-flex items-center h-10 font-semibold rounded-sm px-3.5 text-[#81E6D9] hover:bg-[#81e6d91f]"
              >
                <span className="inline-flex self-center me-2">
                  <IoLogoInstagram />
                </span>
                @koray_aslnn
              </Link>
            </li>
            <li>
              <Link
                href="linkedin.com/in/korayhan/"
                target="_blank"
                className="inline-flex items-center h-10 font-semibold rounded-sm px-3.5 text-[#81E6D9] hover:bg-[#81e6d91f]"
              >
                <span className="inline-flex self-center me-2">
                  <IoLogoLinkedin />
                </span>
                @korayhan
              </Link>
            </li>
          </ul>
          <div className="grid md:grid-cols-2 grid-cols-1 gap-5 mt-3">
            <div>
              <Link
                href="https://www.youtube.com/watch?v=NKSWmGiFoPw&list=PLW5s23IMsrJaGLsu-N-JGs9HThtR8SW9J"
                className="text-center overflow-hidden rounded-md group"
                target="_blank"
              >
                <Image
                  src={thumbYoutube}
                  alt="Youtube Thumbnail"
                  className="rounded-md group-hover:scale-[1.03] transition-all ease-in-out duration-200"
                />
                <p className="font-semibold mt-2">Javascript</p>
                <p className="text-sm">Javascript course on Youtube</p>
              </Link>
            </div>
            <div>
              <Link
                href="https://www.youtube.com/watch?v=Wvcij_-MgxQ&list=PLW5s23IMsrJaFPP-inUhDcRVI8a_aeHo7"
                className="text-center overflow-hidden rounded-md group"
                target="_blank"
              >
                <Image
                  src={thumbSinglePage}
                  alt="Single Page Thumbnail"
                  className="rounded-md group-hover:scale-[1.03] transition-all ease-in-out duration-200"
                />
                <p className="font-semibold mt-2">Single Page</p>
                <p className="text-sm">Single Page coding on Youtube</p>
              </Link>
            </div>
          </div>
        </div>
      </article>
    </main>
  );
}
