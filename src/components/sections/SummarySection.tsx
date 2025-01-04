import React from "react";
import { motion } from "motion/react";
import { ISummaryContent } from "@/types/types";

const summaryContent: ISummaryContent[] = [
  {
    title: "1+ Year",
    subTitle: "Work & Organizational Experience",
  },
  {
    title: "5+ Projects",
    subTitle: "Solo & Collaborative",
  },
];

function SummarySection() {
  return (
    <div className="h-[50vh] md:h-[40vh] bg-slate-900 relative">
      <div
        className="absolute inset-0 bg-contain z-10"
        style={{
          backgroundImage: "url(/assets/about-section-illustraton.svg)",
          opacity: 0.5,
        }}
      />
      <div className="px-4 md:px-24 h-full flex flex-col md:flex-row gap-10 justify-center items-center">
        {summaryContent.map((c, index) => (
          <div
            key={index}
            className="p-4 md:p-8 w-[70vw] md:w-fit text-center md:text-left rounded-3xl bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 z-10 cursor-pointer"
          >
            <h1 className="text-2xl md:text-3xl font-bold">{c.title}</h1>
            <h2 className="text-lg md:text-base text-slate-500">
              {c.subTitle}
            </h2>
          </div>
        ))}
        <motion.a
          className="w-[70vw] md:w-fit text-xl md:text-base px-6 py-2 text-center rounded-2xl text-sky-950 bg-yellow-500 z-10"
          initial={{ boxShadow: "1px 1px 15px #fef08a" }}
          animate={{ boxShadow: "1px 1px 30px #eab308" }}
          transition={{
            duration: 1.3,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
          href="https://drive.google.com/file/d/1okXW3SV86UOlJeVQeZ4ZC20K-KexqB5B/view"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Resume
        </motion.a>
      </div>
    </div>
  );
}

export default SummarySection;
