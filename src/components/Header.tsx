import React from "react";
import DarkModeToggle from "./DarkModeToggle";
import Link from "next/link";
import ProfileCard from "./ProfileCard";

const Header = () => {
  return (
    <header className="w-full flex flex-col justify-between ">
      <div className="flex justify-between min-h-[250px] p-5 bg-green-900 dark:bg-black">
        <h1 className="dark:text-green-600 font-black text-2xl">
          <Link href={"/"}>Grxxn</Link>
        </h1>
        <DarkModeToggle />
      </div>
    </header>
  );
};

export default Header;
