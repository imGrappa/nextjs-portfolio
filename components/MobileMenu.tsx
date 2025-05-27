"use client";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { AlignJustify } from "lucide-react";
import Link from "next/link";
import { IoLogoGithub } from "react-icons/io";
import { Button } from "./ui/button";
import { useState } from "react";

const MobileMenu = () => {
  const [open, setOpen] = useState(false);

  const handleLinkClick = () => {
    setOpen(false);
  };

  return (
    <div className="md:hidden">
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon">
            <AlignJustify className="w-4 h-4" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <SheetHeader className="hidden p-0 m-0">
            <SheetTitle>Menü</SheetTitle>
          </SheetHeader>
          <nav className="flex flex-col mt-8 px-3">
            <Link
              className="p-2 opacity-85 hover:opacity-100 transition-all ease-in-out"
              href="/works"
              onClick={handleLinkClick}
            >
              Works
            </Link>
            <Link
              className="p-2 opacity-85 hover:opacity-100 transition-all ease-in-out"
              href="/stack"
              onClick={handleLinkClick}
            >
              Stack
            </Link>
            <Link
              className="p-2 opacity-85 hover:opacity-100 transition-all ease-in-out"
              href="/posts"
              onClick={handleLinkClick}
            >
              Posts
            </Link>
            <Link
              className="flex items-center gap-1 p-2 opacity-85 hover:opacity-100 transition-all ease-in-out"
              href="/"
              onClick={handleLinkClick}
            >
              <IoLogoGithub />
              Source
            </Link>
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileMenu;
