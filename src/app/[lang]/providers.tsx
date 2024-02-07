"use client";
import { ThemeProvider } from "next-themes";
import { redirect, usePathname } from "next/navigation";
import { useRouter } from "next/navigation";

export default function Providers({
  children,
  lang,
}: {
  children: React.ReactNode;
  lang: string;
}) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      {children}
    </ThemeProvider>
  );
}
