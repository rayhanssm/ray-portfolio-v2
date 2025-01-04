"use client";
import { INav } from "@/types/types";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

const navItems: INav[] = [
  {
    page: "/works",
    title: "Works",
  },
  {
    page: "/about",
    title: "About",
  },
];

function Navbar() {
  const pathName = usePathname();
  const [navScroll, setNavScroll] = useState(false);

  const handleScroll = () => {
    if (window.scrollY >= 10) {
      setNavScroll(true);
    } else {
      setNavScroll(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="px-4 md:px-14 py-5 z-50 w-full fixed top-0">
      <div
        className={`px-5 md:px-10 py-3 rounded-full flex justify-between items-center transition-all ${
          navScroll ? "bg-slate-900/40 backdrop-blur-lg" : ""
        }`}
      >
        <Link href={"/"}>
          <Image
            src="/assets/ray-logo.png"
            alt="Go to homepage (Ray's Logo)"
            className={`transition-opacity
              ${navScroll || pathName !== "/" ? "opacity-100" : "opacity-0"}
              `}
            height={40}
            width={27}
            draggable={false}
          />
        </Link>
        <div className="flex gap-5">
          {navItems.map((nav, index) => (
            <Link
              key={index}
              href={nav.page}
              className={`text-xl md:text-2xl transition-all ${
                pathName === "/" + nav.title.toLowerCase()
                  ? "text-yellow-300"
                  : "text-inherit"
              }`}
            >
              {nav.title}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
