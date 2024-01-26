"use client";

import { MoonStars, SunDim } from "@phosphor-icons/react";
import { useEffect, useState } from "react";

const ThemeSwitcher = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const className = "dark";
    const body = window.document.documentElement.classList;
    if (darkMode === true) {
      body.add(className);
    } else {
      body.remove(className);
    }
  }, [darkMode]);

  return (
    <button onClick={() => setDarkMode(!darkMode)} className="hover:text-sky-600 transition-all">
      {darkMode ? <MoonStars size={22} /> : <SunDim size={22} />}
    </button>
  );
};

export default ThemeSwitcher;
