"use client";
import React from "react";
import { SparklesCore } from "../components/ui/sparkels";

export function Sparkles() {
  return (
    <div className="h-[7rem] w-full flex flex-col items-center justify-center rounded-md animate-fade-up">
   <h1 className="text-5xl font-bold bg-gradient-to-r inline-block from-blue-600 via-[#6e8ae9] to-[#9932cc] z-20 bg-clip-text text-transparent">Welcome to NowCast</h1>
      <div className="w-[40rem] h-[60px] relative">
        {/* Gradients */}
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

        {/* Core component */}
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={800}
          className="w-full h-full"
          particleColor="#2563eb"
        />

        {/* Radial Gradient to prevent sharp edges */}
        <div className="absolute inset-0 w-full h-full bg-white [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
      </div>
    </div>
  );
}
