import React from "react";
import Image from "next/image";
import FigmaIcon from "../../assets/images/figma.png";
import AdobeXDIcon from "../../assets/images/adobexd.png";
import HtmlIcon from "../../assets/images/html.png";
import CssIcon from "../../assets/images/css.png";
import JavascriptIcon from "../../assets/images/javascript.png";
import BootstrapIcon from "../../assets/images/bootstrap.png";
import TailwindIcon from "../../assets/images/tailwind.png";
import JqueryIcon from "../../assets/images/jquery.png";
import ReactJsIcon from "../../assets/images/react.png";
import NextIcon from "../../assets/images/nextjs.png";
import GithubIcon from "../../assets/images/github.png";
import GitIcon from "../../assets/images/git.png";
import VercelIcon from "../../assets/images/vercel.png";
import VscodeIcon from "../../assets/images/vscode.png";
import SassIcon from "../../assets/images/sass.png";
import ReduxTkIcon from "../../assets/images/redux.png";
import NextJsIcon from "../../assets/images/nextjs.png";

function Stack() {
  return (
    <>
      <div>
        <h3 className="text-xl font-bold mb-2 mt-3">Stack</h3>
        <blockquote className="border-l-2 pl-3 italic text-sm text-muted-foreground mb-6">
          Tools, resources and software I use daily.
        </blockquote>
        <div className="flex flex-col gap-8">
          <div>
            <h2 className="font-semibold">Design Tools</h2>
            <div className="grid md:grid-cols-2 grid-cols-1 gap-5 mt-5">
              <div className="flex items-center gap-4 p-2 border rounded-lg border-[transparent] hover:border hover:border-gray-300 dark:hover:border-[#252629] hover:bg-stone-50 dark:hover:bg-[#1B1C20] transition-all duration-300 cursor-default">
                <div>
                  <Image
                    className="w-10 h-10 object-cover rounded-lg"
                    src={FigmaIcon}
                    alt="Figma Icon"
                  />
                </div>
                <div>
                  <h5 className="text-sm font-semibold">Figma</h5>
                  <p className="text-xs text-muted-foreground">Design Tool</p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-2 border rounded-lg border-[transparent] hover:border hover:border-gray-300 dark:hover:border-[#252629] hover:bg-stone-50 dark:hover:bg-[#1B1C20] transition-all duration-300 cursor-default">
                <div>
                  <Image
                    className="w-10 h-10 object-cover rounded-lg"
                    src={AdobeXDIcon}
                    alt="Adobe XD Icon"
                  />
                </div>
                <div>
                  <h5 className="text-sm font-semibold">Adobe XD</h5>
                  <p className="text-xs text-muted-foreground">Design Tool</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h2 className="font-semibold">Development Tools</h2>
            <div className="grid md:grid-cols-2 grid-cols-1 gap-5 mt-5">
              <div className="flex items-center gap-4 p-2 border rounded-lg border-[transparent] hover:border hover:border-gray-300 dark:hover:border-[#252629] hover:bg-stone-50 dark:hover:bg-[#1B1C20] transition-all duration-300 cursor-default">
                <div>
                  <Image
                    className="w-10 h-10 object-cover rounded-lg"
                    src={HtmlIcon}
                    alt="Html5 Icon"
                  />
                </div>
                <div>
                  <h5 className="text-sm font-semibold">Html 5</h5>
                  <p className="text-xs text-muted-foreground">
                    Development Tool
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-2 border rounded-lg border-[transparent] hover:border hover:border-gray-300 dark:hover:border-[#252629] hover:bg-stone-50 dark:hover:bg-[#1B1C20] transition-all duration-300 cursor-default">
                <div>
                  <Image
                    className="w-10 h-10 object-cover rounded-lg"
                    src={CssIcon}
                    alt="Css 3 Icon"
                  />
                </div>
                <div>
                  <h5 className="text-sm font-semibold">Css3</h5>
                  <p className="text-xs text-muted-foreground">
                    Development Tool
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-2 border rounded-lg border-[transparent] hover:border hover:border-gray-300 dark:hover:border-[#252629] hover:bg-stone-50 dark:hover:bg-[#1B1C20] transition-all duration-300 cursor-default">
                <div>
                  <Image
                    className="w-10 h-10 object-cover rounded-lg"
                    src={BootstrapIcon}
                    alt="Bootstrap Icon"
                  />
                </div>
                <div>
                  <h5 className="text-sm font-semibold">Bootstrap5</h5>
                  <p className="text-xs text-muted-foreground">CSS Library</p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-2 border rounded-lg border-[transparent] hover:border hover:border-gray-300 dark:hover:border-[#252629] hover:bg-stone-50 dark:hover:bg-[#1B1C20] transition-all duration-300 cursor-default">
                <div>
                  <Image
                    className="w-10 h-10 object-cover rounded-lg"
                    src={TailwindIcon}
                    alt="TailwindCSS Icon"
                  />
                </div>
                <div>
                  <h5 className="text-sm font-semibold">Tailwind CSS</h5>
                  <p className="text-xs text-muted-foreground">CSS Library</p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-2 border rounded-lg border-[transparent] hover:border hover:border-gray-300 dark:hover:border-[#252629] hover:bg-stone-50 dark:hover:bg-[#1B1C20] transition-all duration-300 cursor-default">
                <div>
                  <Image
                    className="w-10 h-10 object-cover rounded-lg"
                    src={SassIcon}
                    alt="Sass Icon"
                  />
                </div>
                <div>
                  <h5 className="text-sm font-semibold">Sass</h5>
                  <p className="text-xs text-muted-foreground">
                    CSS Preprocessor
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-2 border rounded-lg border-[transparent] hover:border hover:border-gray-300 dark:hover:border-[#252629] hover:bg-stone-50 dark:hover:bg-[#1B1C20] transition-all duration-300 cursor-default">
                <div>
                  <Image
                    className="w-10 h-10 object-cover rounded-lg"
                    src={VscodeIcon}
                    alt="Css 3 Icon"
                  />
                </div>
                <div>
                  <h5 className="text-sm font-semibold">Visual Studio Code</h5>
                  <p className="text-xs text-muted-foreground">Code Editor</p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-2 border rounded-lg border-[transparent] hover:border hover:border-gray-300 dark:hover:border-[#252629] hover:bg-stone-50 dark:hover:bg-[#1B1C20] transition-all duration-300 cursor-default">
                <div>
                  <Image
                    className="w-10 h-10 object-cover rounded-lg"
                    src={JavascriptIcon}
                    alt="Javascript Icon"
                  />
                </div>
                <div>
                  <h5 className="text-sm font-semibold">Javascript</h5>
                  <p className="text-xs text-muted-foreground">
                    Development Tool
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-2 border rounded-lg border-[transparent] hover:border hover:border-gray-300 dark:hover:border-[#252629] hover:bg-stone-50 dark:hover:bg-[#1B1C20] transition-all duration-300 cursor-default">
                <div>
                  <Image
                    className="w-10 h-10 object-cover rounded-lg"
                    src={JqueryIcon}
                    alt="jQuery Icon"
                  />
                </div>
                <div>
                  <h5 className="text-sm font-semibold">jQuery</h5>
                  <p className="text-xs text-muted-foreground">
                    Javascript Library
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-2 border rounded-lg border-[transparent] hover:border hover:border-gray-300 dark:hover:border-[#252629] hover:bg-stone-50 dark:hover:bg-[#1B1C20] transition-all duration-300 cursor-default">
                <div>
                  <Image
                    className="w-10 h-10 object-cover rounded-lg"
                    src={ReactJsIcon}
                    alt="ReactJS Icon"
                  />
                </div>
                <div>
                  <h5 className="text-sm font-semibold">React JS</h5>
                  <p className="text-xs text-muted-foreground">
                    Javascript Library
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-2 border rounded-lg border-[transparent] hover:border hover:border-gray-300 dark:hover:border-[#252629] hover:bg-stone-50 dark:hover:bg-[#1B1C20] transition-all duration-300 cursor-default">
                <div>
                  <Image
                    className="w-10 h-10 object-cover rounded-lg"
                    src={NextJsIcon}
                    alt="NextJS Icon"
                  />
                </div>
                <div>
                  <h5 className="text-sm font-semibold">Next JS</h5>
                  <p className="text-xs text-muted-foreground">
                    React Framework
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-2 border rounded-lg border-[transparent] hover:border hover:border-gray-300 dark:hover:border-[#252629] hover:bg-stone-50 dark:hover:bg-[#1B1C20] transition-all duration-300 cursor-default">
                <div>
                  <Image
                    className="w-10 h-10 object-cover rounded-lg"
                    src={ReduxTkIcon}
                    alt="Redux Toolkit Icon"
                  />
                </div>
                <div>
                  <h5 className="text-sm font-semibold">Redux Toolkit</h5>
                  <p className="text-xs text-muted-foreground">
                    State Management
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-2 border rounded-lg border-[transparent] hover:border hover:border-gray-300 dark:hover:border-[#252629] hover:bg-stone-50 dark:hover:bg-[#1B1C20] transition-all duration-300 cursor-default">
                <div>
                  <Image
                    className="w-10 h-10 object-cover rounded-lg"
                    src={GithubIcon}
                    alt="Github Icon"
                  />
                </div>
                <div>
                  <h5 className="text-sm font-semibold">Github</h5>
                  <p className="text-xs text-muted-foreground">
                    Source Code Hosting Service
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-2 border rounded-lg border-[transparent] hover:border hover:border-gray-300 dark:hover:border-[#252629] hover:bg-stone-50 dark:hover:bg-[#1B1C20] transition-all duration-300 cursor-default">
                <div>
                  <Image
                    className="w-10 h-10 object-cover rounded-lg"
                    src={GitIcon}
                    alt="Git Icon"
                  />
                </div>
                <div>
                  <h5 className="text-sm font-semibold">Git</h5>
                  <p className="text-xs text-muted-foreground">
                    Version Control System
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-2 border rounded-lg border-[transparent] hover:border hover:border-gray-300 dark:hover:border-[#252629] hover:bg-stone-50 dark:hover:bg-[#1B1C20] transition-all duration-300 cursor-default">
                <div>
                  <Image
                    className="w-10 h-10 object-cover rounded-lg"
                    src={VercelIcon}
                    alt="Vercel Icon"
                  />
                </div>
                <div>
                  <h5 className="text-sm font-semibold">Vercel</h5>
                  <p className="text-xs text-muted-foreground">
                    Cloud Platform
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Stack;
