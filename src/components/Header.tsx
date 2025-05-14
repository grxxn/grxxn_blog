import React from "react";
import DarkModeToggle from "./DarkModeToggle";
import Link from "next/link";

const Header = () => {
  return (
    <header className="h-14 w-full p-2 px-5 border-b border-black/[.09] dark:border-white/[.5] flex justify-between items-center fixed top-0 left-0 bg-white dark:bg-black">
      <h1 className="dark:text-green-600 font-bold text-2xl">
        <Link href={"/"}>Grxxn</Link>
      </h1>
      <div className="flex items-center gap-1">
        <DarkModeToggle />
      </div>
    </header>
  );
};

export default Header;
