"use client";
import React from "react";
import NavMenu from "../components/NavMenu";
import ThemeButton from "../components/ThemeButton";
import Logo from "../components/Logo";

function NavBar() {
  return (
    <nav
      className="fixed top-0 lef-0 right-0 w-full z-30 bg-[#ffffff02] backdrop-blur-lg
"
    >
      <div className="flex items-center max-w-2xl mx-auto p-2">
        <Logo />
        <NavMenu />
        <ThemeButton />
      </div>
    </nav>
  );
}

export default NavBar;
