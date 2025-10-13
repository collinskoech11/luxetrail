import { AnimatedGrid } from "@/components/magicui/animated-grid";
import { TextReveal } from "@/components/ui/text-reveal";
import React from "react";

const AboutSection = () => {
  return (
    <div className="relative h-screen">
      <div className="absolute inset-0 -z-10">
        <AnimatedGrid />
      </div>
      <div className="flex h-full flex-col items-center justify-center">
        <TextReveal className="text-center text-4xl font-bold text-black dark:text-white">
          About Us
        </TextReveal>
        <p className="mt-4 text-center text-lg text-black dark:text-white">
          We are a team of passionate developers and designers who love to build beautiful and functional websites.
        </p>
      </div>
    </div>
  );
};

export default AboutSection;