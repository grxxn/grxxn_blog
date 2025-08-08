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
        <MdOutlineWbSunny color="white" size={20} />
      ) : (
        <FiMoon color="white" size={20} />
      )}
    </button>
  );
};

export default DarkModeToggle;
