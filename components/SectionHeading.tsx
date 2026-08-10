"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import type { LucideIcon } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { ScrollReveal } from "@/components/ScrollReveal";

interface SectionHeadingProps {
  eyebrow: string;
  eyebrowIcon?: LucideIcon;
  title: string;
  highlight?: string;
  className?: string;
}

function TitleWithUnderline({
  title,
  highlight,
}: {
  title: string;
  highlight?: string;
}) {
  const target = highlight ?? title;
  const index = title.indexOf(target);

  if (index === -1) {
    return <>{title}</>;
  }

  const before = title.slice(0, index);
  const after = title.slice(index + target.length);

  return (
    <>
      {before}
      <span className="relative inline-block">
        {target}
        <motion.span
          aria-hidden
          className="absolute inset-x-0 -bottom-1 h-[3px] origin-left rounded-full bg-gradient-to-r from-primary to-accent"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        />
      </span>
      {after}
    </>
  );
}

export function SectionHeading({
  eyebrow,
  eyebrowIcon: EyebrowIcon = Sparkles,
  title,
  highlight,
  className,
}: SectionHeadingProps) {
  return (
    <div className={className}>
      <ScrollReveal className="flex justify-center">
        <Badge variant="glass" className="mb-4 h-7 px-3 py-1 text-xs">
          <EyebrowIcon className="size-3.5 text-primary" />
          {eyebrow}
        </Badge>
      </ScrollReveal>
      <ScrollReveal delay={0.1}>
        <h2
          className="text-center text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl"
          style={{ filter: "drop-shadow(0 2px 16px var(--glow))" }}
        >
          <TitleWithUnderline title={title} highlight={highlight} />
        </h2>
      </ScrollReveal>
    </div>
  );
}
