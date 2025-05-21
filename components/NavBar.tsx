"use client";
import React from "react";
import NavMenu from "../components/NavMenu";
import ThemeButton from "../components/ThemeButton";
import Logo from "../components/Logo";
import MobileMenu from "./MobileMenu";

function NavBar() {
  return (
    <nav
      className="fixed top-0 lef-0 right-0 w-full z-30 bg-[#ffffff01] backdrop-blur-lg
"
    >
      <div className="flex items-center md:justify-start justify-between max-w-2xl mx-auto p-2">
        <Logo />
        <NavMenu />
        <div className="flex items-center gap-2">
          <MobileMenu />
          <ThemeButton />
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
