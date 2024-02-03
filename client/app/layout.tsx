"use client";
import type { Metadata } from "next";
import "./globals.css";
import "@radix-ui/themes/styles.css";
import { bungee } from "./font";
import NavBar from "./NavBar";
import { usePathname } from "next/navigation";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const currentPath = usePathname();
  return (
    <html lang="en">
      <body className={bungee.className}>
        <div className="wrap">
          <main className="w-full h-full">{children}</main>
          {currentPath === "/" || currentPath === "/registration" ? (
            <></>
          ) : (
            <NavBar />
          )}
        </div>
      </body>
    </html>
  );
}
