"use client";
import { MoonStars, SunDim } from "@phosphor-icons/react";
import { useEffect, useState } from "react";

const ThemeSwitcher = () => {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const className = "dark";
    const body = window.document.documentElement.classList;
    if (darkMode === true) {
      body.add(className);
      localStorage.setItem("theme", "dark");
    } else {
      body.remove(className);
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="hover:text-sky-600 transition-all"
    >
      {darkMode ? <MoonStars size={22} /> : <SunDim size={22} />}
    </button>
  );
};

export default ThemeSwitcher;
