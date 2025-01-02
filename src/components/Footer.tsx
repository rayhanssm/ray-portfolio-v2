import React from "react";
import { Icon } from "@iconify/react";
import { IFooterLink } from "@/types/types";

const linkContent: IFooterLink[] = [
  {
    link: "mailto:rayhansmantiri@gmail.com",
    icon: "ic:round-email",
  },
  {
    link: "https://www.linkedin.com/in/ray-mantiri",
    icon: "mdi:linkedin",
  },
  {
    link: "https://github.com/rayhanssm",
    icon: "mdi:github",
  },
];

function Footer() {
  return (
    <footer className="h-20 bg-gradient-to-t from-slate-900 to-transparent">
      <div className="h-[0.5px] rounded-full w-full bg-gradient-to-r from-transparent via-slate-400 to-transparent" />
      <div className="px-24 w-full h-full flex justify-between items-center">
        <p className="text-slate-400">Created by Ray Mantiri 2024</p>
        <div className="flex gap-4">
          {linkContent.map((l, index) => (
            <a
              key={index}
              href={l.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon
                key={index}
                icon={l.icon}
                name="Links"
                className="w-8 h-8 text-slate-400 hover:text-white hover:shadow-lg transition-all hover:-translate-y-1"
              />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
