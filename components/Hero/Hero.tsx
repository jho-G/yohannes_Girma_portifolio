"use client";

import { motion, type Variants } from "framer-motion";
import { useLenis } from "lenis/react";
import { ArrowRight, Download, Sparkles } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useGsapParallax } from "@/hooks/use-gsap-scroll";
import { socialLinks, typingRoles } from "@/lib/data";

import { useTypewriter } from "./useTypewriter";

const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export function Hero() {
  const typed = useTypewriter(typingRoles);
  const lenis = useLenis();
  const blobTopRef = useRef<HTMLDivElement>(null);
  const blobBottomRef = useRef<HTMLDivElement>(null);

  useGsapParallax(blobTopRef, 60);
  useGsapParallax(blobBottomRef, -90);

  return (
    <section
      id="hero"
      aria-label="Hero"
      className="relative flex min-h-screen items-center overflow-hidden pt-24"
    >
      <div
        ref={blobTopRef}
        aria-hidden
        className="pointer-events-none absolute -left-32 top-1/4 size-72 rounded-full bg-primary/30 blur-3xl motion-safe:animate-pulse"
      />
      <div
        ref={blobBottomRef}
        aria-hidden
        className="pointer-events-none absolute -right-24 bottom-10 size-96 rounded-full bg-primary/20 blur-3xl motion-safe:animate-pulse"
        style={{ animationDelay: "1.2s" }}
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-12 px-6 md:grid-cols-2 md:px-10"
      >
        <div className="flex flex-col items-start gap-5">
          <motion.div variants={itemVariants}>
            <Badge variant="glass" className="h-7 px-3 py-1 text-xs">
              <Sparkles className="size-3.5 text-primary" />
              Hello, I&apos;m
            </Badge>
          </motion.div>
          <motion.h1
            variants={itemVariants}
            className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl"
            style={{ filter: "drop-shadow(0 2px 16px var(--glow))" }}
          >
            <span className="relative inline-block">
              Yohannes
              <motion.span
                aria-hidden
                className="absolute inset-x-0 -bottom-1 h-[3px] origin-left rounded-full bg-gradient-to-r from-primary to-accent"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{
                  duration: 0.7,
                  delay: 0.6,
                  ease: [0.22, 1, 0.36, 1],
                }}
              />
            </span>
          </motion.h1>
          <motion.h2
            variants={itemVariants}
            className="h-9 text-2xl font-semibold text-primary sm:text-3xl"
          >
            {typed}
            <span className="ml-0.5 animate-pulse">|</span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="max-w-md text-muted-foreground"
          >
            Backend developer focused on Django, REST APIs, and scalable
            systems.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center gap-4 pt-2"
          >
            <Button
              size="lg"
              className="group h-11 animate-[pulse-glow_2.4s_ease-in-out_infinite] rounded-xl px-6 text-base motion-reduce:animate-none"
              onClick={() => lenis?.scrollTo("#projects", { offset: -80 })}
            >
              View Projects
              <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5" />
            </Button>
            <Button
              nativeButton={false}
              variant="outline"
              size="lg"
              className="h-11 rounded-xl px-6 text-base"
              render={<a href="/cv.pdf" download />}
            >
              <Download className="size-4" />
              Download CV
            </Button>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex items-center gap-4 pt-2"
          >
            {socialLinks.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex size-10 items-center justify-center rounded-full border border-border text-foreground/80 transition-colors hover:border-primary hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                <Icon className="size-4" />
              </a>
            ))}
          </motion.div>
        </div>

        <motion.div
          variants={itemVariants}
          className="relative mx-auto flex size-64 items-center justify-center sm:size-80 md:size-96"
        >
          <div className="absolute inset-0 rounded-full bg-primary/20 blur-2xl" />
          <div className="relative size-full overflow-hidden rounded-full border-4 border-primary/40 shadow-2xl">
            <Image
              src="/images/profile.png"
              alt="Yohannes"
              fill
              priority
              sizes="(min-width: 768px) 24rem, 16rem"
              className="object-cover"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
