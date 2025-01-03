import WorkDetailView from "@/components/views/WorkDetailView";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Works Detail | Ray Mantiri",
  description: "Ray's works detail",
};

async function Page({ params }: { params: Promise<{ id: string }> }) {
  const id = (await params).id;

  return <WorkDetailView id={id} />;
}

export default Page;
