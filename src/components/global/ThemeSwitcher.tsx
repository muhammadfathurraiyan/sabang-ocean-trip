"use client";
import { MoonStars, SunDim } from "@phosphor-icons/react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeSwitcher() {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <div className="w-[22px] h-[22px]" />;

  if (resolvedTheme === "dark") {
    return (
      <SunDim
        size={22}
        onClick={() => setTheme("light")}
        className={`hover:text-sky-400 duration-300`}
      />
    );
  }

  if (resolvedTheme === "light") {
    return (
      <MoonStars
        size={22}
        onClick={() => setTheme("dark")}
        className={`hover:text-sky-400 duration-300`}
      />
    );
  }
}
