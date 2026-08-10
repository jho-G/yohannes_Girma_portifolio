"use client";

import dynamic from "next/dynamic";

import { NOISE_BACKGROUND } from "./noise";

const NeuralCanvas = dynamic(() => import("./NeuralCanvas"), { ssr: false });

export function PageBackground() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 overflow-hidden"
    >
      {/* Layer 1: looping background video */}
      <video
        className="absolute inset-0 z-0 size-full object-cover opacity-15"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="/images/hero-poster.jpg"
      >
        <source src="/videos/hero-bg.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 z-[1] bg-background/60 dark:bg-[#0a1628]/70" />

      {/* Layer 2: interactive canvas */}
      <NeuralCanvas className="absolute inset-0 z-[2] size-full" />

      {/* Layer 3: premium noise texture */}
      <div
        className="absolute inset-0 z-[3] opacity-30"
        style={{ backgroundImage: NOISE_BACKGROUND }}
      />
    </div>
  );
}
