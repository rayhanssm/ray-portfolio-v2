import React from "react";
import { motion } from "motion/react";
import LinkCustom from "../LinkCustom";

function HeroSection() {
  return (
    <div className="px-4 md:px-12 h-screen flex justify-around items-center bg-gradient-to-bl from-slate-900 from-5% to-indigo-950 to-95%">
      <div className="flex flex-col max-md:items-center gap-4">
        <h1 className="font-bold xl:text-6xl text-4xl">
          Hi,
          <span className="xl:text-6xl text-4xl bg-gradient-to-br from-sky-600 to-white bg-clip-text text-transparent">
            {` Ray `}
          </span>
          here!
        </h1>
        <p className="text-xl font-extralight mb-5">
          I&apos;m a web dev enthusiast.
        </p>
        <LinkCustom text="Get to Know Me" href={"/about"} />
      </div>

      {/* Illustration */}
      <div className="relative w-[512px] h-[512px] hidden md:block">
        <img
          className="absolute top-0 right-0"
          src="/assets/projector.svg"
          alt="illustration of projecting ray's logo"
          draggable={false}
        />
        <motion.div
          animate={{ opacity: [1, 0.1, 0.9, 0.5, 1, 0.8] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
          }}
        >
          <img
            className="absolute top-0 right-0"
            src="/assets/projector-light.svg"
            alt="illustration of projecting ray's logo"
            draggable={false}
          />
        </motion.div>
      </div>
    </div>
  );
}

export default HeroSection;
