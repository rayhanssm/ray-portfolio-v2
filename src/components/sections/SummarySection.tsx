import React from "react";
import { motion } from "motion/react";
import { useRouter } from "next/navigation";
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
  const { push } = useRouter();

  return (
    <div className="h-[40vh] bg-slate-900 relative">
      <div
        className="absolute inset-0 bg-contain z-10"
        style={{
          backgroundImage: "url(/assets/about-section-illustraton.svg)",
          opacity: 0.7,
        }}
      />
      <div className="px-24 h-full flex gap-10 justify-center items-center">
        {summaryContent.map((c, index) => (
          <div
            key={index}
            className="p-8 rounded-3xl bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 z-10 cursor-pointer"
          >
            <h1 className="text-3xl font-bold">{c.title}</h1>
            <h2 className="text-slate-500">{c.subTitle}</h2>
          </div>
        ))}
        <motion.button
          className="w-fit px-6 py-2 rounded-2xl text-sky-950 bg-yellow-500 z-10"
          initial={{ boxShadow: "1px 1px 15px #fef08a" }}
          animate={{ boxShadow: "1px 1px 30px #eab308" }}
          transition={{
            duration: 1.3,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
          onClick={() => push("/about")}
        >
          About Me
        </motion.button>
      </div>
    </div>
  );
}

export default SummarySection;
