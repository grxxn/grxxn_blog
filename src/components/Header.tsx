"use client";

import React from "react";
import DarkModeToggle from "./DarkModeToggle";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const path = usePathname();
  const headerMenuInfo = [
    {
      name: "Home",
      path: "/",
    }, {
      name: "Posts",
      path: "/blog",
    }, {
      name: "Resume",
      path: "/resume",
    }
  ];

  return (
    <header className="w-full flex justify-center items-center py-3">
      <div className="max-w-4xl w-full flex justify-between">
        <ul className="flex font-normal gap-4">
          {
            headerMenuInfo.map((menu) => (
              <React.Fragment key={menu.path}>
                <li className={menu.path === path ? "relative font-bold" : "relative"}>
                  <Link href={menu.path}>{menu.name}</Link>
                  <span className={menu.path === path ? "inline-block w-[calc(100%+10px)] h-full absolute left-[-5px] bg-green-600/40 transition-width duration-200 ease-in" : ""}></span>
                </li>
              </React.Fragment>
            ))
          }
        </ul>
        <DarkModeToggle />
      </div>
    </header>
  );
};

export default Header;
