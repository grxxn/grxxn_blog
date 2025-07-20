"use client";

import React, { useEffect, useState } from "react";

const DarkModeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDarkMode);
  }, [isDarkMode]);

  return (
    <div className="w-14 h-6 flex items-center border border-black/[.2] dark:border-white/[.5] px-1 rounded-xl">
      <button
        className={`w-auto h-auto rounded-full transition-all duration-300 ease-in-out cursor-pointer text-[15px] transform ${isDarkMode ? "translate-x-7" : "translate-x-0"
          }`}
        onClick={() => setIsDarkMode(!isDarkMode)}
      >
        {isDarkMode ? "🌝" : "🌚"}
      </button>
    </div>
  );
};

export default DarkModeToggle;
