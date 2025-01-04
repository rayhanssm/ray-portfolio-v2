import AboutView from "@/components/views/AboutView";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "About | Ray",
  description: "Get to know Ray",
};

function About() {
  return <AboutView />;
}

export default About;
