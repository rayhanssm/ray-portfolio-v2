import Image from "next/image";
import React from "react";
import LinkCustom from "../LinkCustom";
import {
  IAboutContent,
  IEducationContent,
  IExperienceContent,
} from "@/types/types";
import { Icon } from "@iconify/react/dist/iconify.js";

const aboutContent: IAboutContent[] = [
  {
    title: "rayhansmantiri@gmail.com",
    url: "mailto:rayhansmantiri@gmail.com",
  },
  {
    title: "LinkedIn",
    url: "https://www.linkedin.com/in/ray-mantiri",
  },
  {
    title: "GitHub",
    url: "https://github.com/rayhanssm",
  },
];

const experienceContent: IExperienceContent[] = [
  {
    company: "Bosshire",
    image: "/assets/about/bosshire.png",
    location: "Jakarta, Indonesia",
    jobs: [
      { title: "Front-End Developer Intern", date: "Feb 2023 - Feb 2024" },
    ],
  },
  {
    company: "Filemagz (FILE Magazine)",
    image: "/assets/about/filemagz.png",
    location: "Jakarta, Indonesia",
    jobs: [{ title: "Director of Art", date: "Jan 2022 - Dec 2022" }],
  },
  {
    company: "BNCC (Bina Nusantara Computer Club)",
    image: "/assets/about/bncc.png",
    location: "Jakarta Indonesia",
    jobs: [
      { title: "FILE Magazine Staff", date: "Jan 2022 - Dec 2022" },
      { title: "Activist", date: "Oct 2020 - Jan 2022" },
    ],
  },
];

const educationContent: IEducationContent[] = [
  {
    school: "Bina Nusantara University",
    image: "/assets/about/binus.png",
    location: "Jakarta Indonesia",
    year: "2020-2024",
    program: "Bachelor's degree, Computer Science",
  },
  {
    school: "Kartini Vocational High School",
    image: "/assets/about/kartini.png",
    location: "Batam, Indonesia",
    year: "2017-2020",
    program: "High school diploma, Multimedia",
  },
];

const toolsIcon: { icon: string; title: string }[] = [
  { icon: "akar-icons:nextjs-fill", title: "Next.js" },
  { icon: "vscode-icons:file-type-reactjs", title: "React.js" },
  { icon: "vscode-icons:file-type-tailwind", title: "Tailwind CSS" },
  { icon: "devicon-plain:materialui", title: "Material UI" },
  { icon: "devicon:bootstrap", title: "Bootstrap" },
  { icon: "devicon:html5", title: "HTML" },
  { icon: "devicon:css3", title: "CSS" },
  { icon: "logos:javascript", title: "JavaScript" },
  { icon: "devicon:typescript", title: "TypeScript" },
  { icon: "mdi:github", title: "GitHub" },
  { icon: "devicon:figma", title: "Figma" },
];

function AboutView() {
  return (
    <div className="px-4 py-24 md:p-24 min-h-[calc(100vh-80px)] bg-gradient-to-br from-slate-900 to-indigo-950">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left */}
        <div className="md:col-span-1">
          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-3">
              <Image
                src="/assets/potrait-ray.png"
                alt="Potrait of Ray"
                width={0}
                height={0}
                sizes="100vw"
                className="w-full h-auto hidden md:block rounded-3xl shadow-2xl shadow-violet-950"
              />
              <div>
                <p className="font-bold text-4xl md:text-2xl">
                  Ray Hans Sebastian Mantiri
                </p>
                <p className="text-slate-400 text-lg md:text-sm">
                  Jakarta, Indonesia | Batam, Indonesia
                </p>
              </div>

              <div className="flex flex-col gap-2">
                {aboutContent.map((c, index) => (
                  <div
                    key={index}
                    className=" w-fit flex gap-1 items-center hover:underline"
                  >
                    <a
                      href={c.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xl md:text-base"
                    >
                      {c.title}
                    </a>
                    <Icon icon="proicons:open" />
                  </div>
                ))}
              </div>
            </div>

            <div className="p-4 md:p-8 flex flex-col gap-4 rounded-3xl shadow-2xl shadow-slate-900 bg-slate-900">
              <h2 className="mb-3 font-bold text-2xl md:text-xl bg-gradient-to-br from-sky-600 to-white bg-clip-text text-transparent">
                Technology/tools
              </h2>
              <div className="flex flex-wrap gap-x-4 gap-y-6">
                {toolsIcon.map((t, index) => (
                  <div key={index} className="relative group">
                    <Icon icon={t.icon} className="w-10 md:w-8 h-10 md:h-8" />
                    <div className="absolute border border-violet-900 text-center bg-violet-950 text-white text-xs rounded-xl px-2 py-1 z-10 mb-2 bottom-full left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all">
                      {t.title}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right */}
        <div className="md:col-span-2 flex flex-col gap-10">
          <div className="p-4 md:p-8 text-lg md:text-base flex flex-col gap-4 rounded-3xl shadow-2xl shadow-slate-900 bg-slate-900">
            <p>Hi, I&apos;m Ray!</p>
            <p>
              I&apos;m a computer science graduate with a deep passion for web
              development and design.
            </p>
            <p>
              Through my experience in front-end development and UI/UX design,
              I&apos;ve realized the importance of creating interfaces that are
              both functional and aesthetically pleasing to maximize user
              satisfaction.
            </p>
            <p>
              This challenge has motivated me to continuously grow and expand my
              skills, so I can contribute meaningfully in the future!
            </p>
            <LinkCustom
              href="https://drive.google.com/file/d/1okXW3SV86UOlJeVQeZ4ZC20K-KexqB5B/view"
              text="Resume"
              target
              rel
            />
          </div>

          {/* Experience Section */}
          <div className="p-4 md:p-8 flex flex-col gap-4 rounded-3xl shadow-2xl shadow-slate-900 bg-slate-900">
            <h2 className="mb-3 font-bold text-center md:text-left text-3xl md:text-2xl bg-gradient-to-br from-sky-600 to-white bg-clip-text text-transparent">
              Experience
            </h2>
            <div className="flex flex-col gap-10">
              {experienceContent.map((e, index) => (
                <div
                  key={index}
                  className="flex flex-col md:flex-row gap-4 md:gap-8"
                >
                  <Image
                    src={e.image}
                    alt={e.company + "'s logo"}
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="w-[150px] h-fit"
                  />
                  <div>
                    <p className="text-2xl md:text-xl font-semibold">
                      {e.company}
                    </p>
                    <p className="text-lg md:text-sm text-slate-400 mb-3">
                      {e.location}
                    </p>
                    <div className="flex flex-col gap-2">
                      {e.jobs.map((j, index) => (
                        <div key={index}>
                          <p className="mb-1 text-xl md:text=base">{j.title}</p>
                          <p className="py-1 px-3 w-fit text-base md:text-sm bg-slate-700 rounded-full">
                            {j.date}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education Section */}
          <div className="p-4 md:p-8 flex flex-col gap-4 rounded-3xl shadow-2xl shadow-slate-900 bg-slate-900">
            <h2 className="font-bold  text-center md:text-left text-3xl md:text-2xl bg-gradient-to-br from-sky-600 to-white bg-clip-text text-transparent">
              Education
            </h2>
            <div className="flex flex-col gap-10">
              {educationContent.map((e, index) => (
                <div
                  key={index}
                  className="flex flex-col md:flex-row gap-4 md:gap-8"
                >
                  <Image
                    src={e.image}
                    alt={e.school + "'s logo"}
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="w-[150px] h-fit"
                  />
                  <div>
                    <p className="text-2xl md:text-xl font-semibold">
                      {e.school}
                    </p>
                    <p className="text-lg md:text-sm text-slate-400 mb-2">
                      {e.location}
                    </p>
                    <p className="py-1 px-3 w-fit text-lg md:text-sm bg-slate-700 rounded-full mb-2">
                      {e.year}
                    </p>
                    <p className="text-xl md:text-base">{e.program}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutView;
