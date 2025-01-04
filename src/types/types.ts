import { Variants } from "motion/react";
import { Url } from "next/dist/shared/lib/router/router";

export interface INav {
  page: string;
  title: string;
}

export interface ILinkCustom {
  text: string;
  href: Url;
  target?: boolean;
  rel?: boolean;
}

export interface ISummaryContent {
  title: string;
  subTitle: string;
}

export interface IFooterLink {
  link: string;
  icon: string;
}

export interface IHomeWorkSectionCard {
  variant: Variants;
  image: string;
}

export interface IWorksContent {
  id: string;
  image: string;
  title: string;
  year: string;
  description: string;
  icons: string[];
  role: string;
  tech: string;
  links: {
    title: string;
    url: string;
  }[];
}

export interface IAboutContent {
  url: string;
  title: string;
}

export interface IExperienceContent {
  company: string;
  image: string;
  location: string;
  jobs: { title: string; date: string }[];
}

export interface IEducationContent {
  school: string;
  image: string;
  location: string;
  year: string;
  program: string;
}
