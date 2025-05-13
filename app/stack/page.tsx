import React from "react";

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
              <div className="flex items-center gap-4">
                <div>
                  <img
                    className="w-10 h-10 object-cover rounded-lg"
                    src="https://korayaslan.com/assets/figma-9TC_2wbl.png"
                    alt="Figma Design Tool"
                  ></img>
                </div>
                <div>
                  <h5 className="text-sm font-semibold">Figma</h5>
                  <p className="text-xs text-muted-foreground">Design Tool</p>
                </div>
              </div>
              <div>adobe xd</div>
            </div>
          </div>
          <div>
            <h2 className="font-semibold">Development Tools</h2>
            <div className="grid md:grid-cols-2 grid-cols-1 gap-5 mt-5">
              <div className="flex items-center gap-4">
                <div>
                  <img
                    className="w-10 h-10 object-cover rounded-lg"
                    src="https://korayaslan.com/assets/figma-9TC_2wbl.png"
                    alt="Figma Design Tool"
                  ></img>
                </div>
                <div>
                  <h5 className="text-sm font-semibold">Figma</h5>
                  <p className="text-xs text-muted-foreground">Design Tool</p>
                </div>
              </div>
              <div>adobe xd</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Stack;
