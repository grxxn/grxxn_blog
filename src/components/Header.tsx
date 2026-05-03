"use client";

import React from "react";
import DarkModeToggle from "./DarkModeToggle";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const HEADER_MENU_INFO = [
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

const Header = () => {
  const path = usePathname();


  return (
    <header className="w-full h-14 flex justify-center items-center py-4 fixed top-0 z-50 bg-white/80 dark:bg-black/80 backdrop-blur-md">
      <div className="max-w-4xl w-full flex justify-between">
        <ul className="flex font-normal gap-4">
          {
            HEADER_MENU_INFO.map((menu) => {
              const isActive = menu.path === path || path.startsWith(menu.path + "/")

              return <li key={menu.path} className={cn("relative font-monoCustom", isActive && "font-bold")}>
                  <Link href={menu.path}>
                    {menu.name}
                    <span className={cn("inline-block h-full absolute left-[-5px] bg-green-600/40 transition-width duration-200 ease-in", isActive ? "w-[calc(100%+10px)]" : "w-0")}>
                    </span>
                  </Link>
                </li>
            })
          }
        </ul>
        <DarkModeToggle />
      </div>
    </header>
  );
};

export default Header;
