import WorkView from "@/components/views/WorkView";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Works | Ray Mantiri",
  description: "Ray's works",
};

function Works() {
  return <WorkView />;
}

export default Works;
