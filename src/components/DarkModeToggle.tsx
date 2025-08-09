"use client";

import React, { useEffect, useState } from "react";
import { MdOutlineWbSunny } from "react-icons/md";
import { FiMoon } from "react-icons/fi";

const DarkModeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDarkMode);
  }, [isDarkMode]);

  return (
    <button type="button" onClick={() => setIsDarkMode(!isDarkMode)}>
      {isDarkMode ? (
        <MdOutlineWbSunny size={22} />
      ) : (
        <FiMoon size={22} />
      )}
    </button>
  );
};

export default DarkModeToggle;
