"use client";
import { worksContent } from "@/data/worksData";
import { Icon } from "@iconify/react/dist/iconify.js";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function WorkView() {
  return (
    <div className="p-24 bg-gradient-to-br from-slate-900 to-indigo-950">
      <h1 className="font-bold text-4xl bg-gradient-to-br from-sky-600 to-white bg-clip-text text-transparent">
        Works
      </h1>
      <p className="text-slate-400 mt-2">
        A selection of projects I&apos;ve worked on, showcasing both my personal
        and collaborative experience.
      </p>
      <div className="grid grid-cols-3 gap-y-10 py-14 place-items-center">
        {worksContent.map((c, index) => (
          <Link
            key={index}
            href={`/works/${c.id}`}
            className="group flex flex-col gap-2 hover:-translate-y-2 hover:cursor-pointer transition-all"
          >
            <Image
              className="rounded-xl group-hover:shadow-2xl group-hover:shadow-indigo-600 group-hover:scale-105 transition-all"
              src={c.image}
              width={260}
              height={183}
              alt="a screenshot of ray's project"
            />
            <div className="flex justify-between items-center">
              <div className="flex flex-col">
                <p className="font-semibold text-lg">{c.title}</p>
                <div className="flex gap-3 mt-1">
                  {c.icons.map((i, index) => (
                    <Icon
                      key={index}
                      icon={i}
                      className="w-6 h-6 text-slate-200"
                    />
                  ))}
                </div>
              </div>
              <p className="text-slate-400 py-1 px-3 outline rounded-full">
                {c.year}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default WorkView;
