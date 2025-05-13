import React from "react";
import DarkModeToggle from "./DarkModeToggle";

const Header = () => {
  return (
    <header className="p-2 px-5 border-b border-black/[.09] dark:border-white/[.5] flex justify-between items-center fiex top-0 left-0">
      <h1 className="dark:text-green-600 font-extrabold text-2xl">Grxxn</h1>
      <div className="flex items-center gap-1">
        <DarkModeToggle />
      </div>
    </header>
  );
};

export default Header;
