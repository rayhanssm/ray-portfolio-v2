"use client";
import { worksContent } from "@/data/worksData";
import Image from "next/image";
import React from "react";
import LinkCustom from "../LinkCustom";

function WorkDetailView({ id }: { id: string }) {
  const currentWorkDetail = worksContent.find((content) => content.id === id);

  return (
    <div className="p-24 min-h-[calc(100vh-80px)] bg-gradient-to-bl from-slate-900 to-indigo-950">
      {currentWorkDetail?.title ? (
        <div className="grid grid-cols-5 gap-8">
          <div className="col-span-2">
            <div className="flex justify-between items-center mb-5">
              <h1 className="font-semibold text-4xl bg-gradient-to-br from-sky-600 to-white bg-clip-text text-transparent">
                {currentWorkDetail.title}
              </h1>
              <p className="text-slate-400 py-1 px-3 outline rounded-full">
                {currentWorkDetail.year}
              </p>
            </div>
            <Image
              src={currentWorkDetail.image}
              alt="a screenshot of ray's project"
              width="0"
              height="0"
              sizes="100vw"
              className="w-full h-auto rounded-xl shadow-2xl"
            />
          </div>
          <div className="col-span-3">
            <p className="mt-14 text-xl">{currentWorkDetail.description}</p>
            <p className="mt-8 text-lg text-slate-400">
              Role: {currentWorkDetail.role}
            </p>
            <p className="mt-3 mb-5 text-lg">
              <span className="text-sm text-slate-400">
                Technology/tools used:
              </span>{" "}
              <br />
              {currentWorkDetail.tech}
            </p>
            <div className="flex gap-3">
              {currentWorkDetail.links.map(
                (l, index) =>
                  l.title && (
                    <LinkCustom
                      key={index}
                      href={l.url}
                      text={l.title}
                      target
                      rel
                    />
                  )
              )}
            </div>
          </div>
        </div>
      ) : (
        <p>Work not found.</p>
      )}
    </div>
  );
}

export default WorkDetailView;
