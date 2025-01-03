import React from "react";
import { motion, Variants } from "motion/react";
import LinkCustom from "../LinkCustom";
import { IHomeWorkSectionCard } from "@/types/types";
import Image from "next/image";

const variant1: Variants = {
  offscreen: { x: 0, y: 0 },
  onscreen: {
    y: 10,
    x: -300,
    rotate: -10,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 4,
    },
  },
};

const variant2: Variants = {
  offscreen: { x: 0, y: 0 },
  onscreen: {
    y: 60,
    x: 300,
    rotate: 10,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 4,
    },
  },
};

const cardContent: IHomeWorkSectionCard[] = [
  {
    variant: variant1,
    image: "url(/assets/works/works-bosshire.png)",
  },
  {
    variant: variant2,
    image: "url(/assets/works/works-micro-monitor.png)",
  },
];

function WorksSection() {
  return (
    <div className="relative h-[100vh] px-24 flex justify-center items-center">
      <Image
        alt="circle illustration"
        src="/assets/bg-circle.svg"
        className="z-0 absolute h-full"
        width={700}
        height={700}
        draggable={false}
      />
      <div className="absolute flex justify-center items-center">
        <div className="flex flex-col items-center gap-6 z-10">
          <h1 className="font-bold text-4xl bg-gradient-to-br from-sky-600 to-white bg-clip-text text-transparent">
            My Works
          </h1>
          <LinkCustom text="View Works" href="/works" />
        </div>
      </div>

      <motion.div
        viewport={{ amount: 0.8 }}
        className="h-full flex justify-center items-center z-20"
      >
        {cardContent.map((v, index) => (
          <motion.div
            key={index}
            variants={v.variant}
            initial="offscreen"
            whileInView="onscreen"
            className="h-56 w-72 bg-cover rounded-3xl absolute shadow-xl"
            style={{ backgroundImage: v.image }}
          />
        ))}
      </motion.div>
    </div>
  );
}

export default WorksSection;
