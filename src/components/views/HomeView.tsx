"use client";
import React from "react";
import HeroSection from "../sections/HeroSection";
import SummarySection from "../sections/SummarySection";
import WorksSection from "../sections/WorksSection";

function HomeView() {
  return (
    <main>
      {/* Hero Section */}
      <HeroSection />

      {/* Summary Section */}
      <SummarySection />

      {/* Works Section */}
      <WorksSection />
    </main>
  );
}

export default HomeView;
