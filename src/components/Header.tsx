import React from "react";
import DarkModeToggle from "./DarkModeToggle";
import Link from "next/link";

const Header = () => {
  return (
    <header className="w-full flex flex-col justify-between ">
      <div className="flex justify-center min-h-[250px] p-5 bg-green-900 dark:bg-black">
        <div className="flex items-center justify-between max-w-3xl w-full h-fit">
          <h1 className="text-white text-2xl font-bold">Grxxn</h1>
          <div className="flex gap-5">
            <h1 className="text-white text-lg font-semibold">
              <Link href={"/"}>Posts</Link>
            </h1>
            <h1 className="text-white text-lg font-semibold">
              <Link href={"/resume"}>Resume</Link>
            </h1>
            <DarkModeToggle />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
