"use client";

import { ArrowRight } from "lucide-react";
import { useState } from "react";

import { ScrollReveal } from "@/components/ScrollReveal";
import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { sendContactForm } from "@/lib/emailjs";

type Status = "idle" | "sending" | "success" | "error";

export function Contact() {
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;

    setStatus("sending");

    try {
      await sendContactForm(form);

      setStatus("success");
      form.reset();
    } catch (error) {
      console.error("EmailJS Error:", error);
      setStatus("error");
    }
  };

  return (
    <section
      id="contact"
      aria-label="Contact"
      className="mx-auto max-w-xl px-6 py-24 md:px-10"
    >
      <SectionHeading
        className="mb-12"
        eyebrow="Get In Touch"
        title="Contact"
      />

      <ScrollReveal delay={0.15}>
        <div className="rounded-3xl border border-black/10 bg-black/[0.02] p-6 shadow-[0_8px_40px_-12px_rgba(56,189,248,0.25)] backdrop-blur-md dark:border-white/10 dark:bg-white/[0.06] dark:shadow-[0_8px_40px_-12px_rgba(56,189,248,0.45)] sm:p-8">
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="name"
                className="text-sm font-medium text-muted-foreground"
              >
                Name
              </label>
              <Input
                id="name"
                name="name"
                placeholder="Your name"
                required
                className="h-11 rounded-xl px-3.5"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="email"
                className="text-sm font-medium text-muted-foreground"
              >
                Email
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="you@example.com"
                required
                className="h-11 rounded-xl px-3.5"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="message"
                className="text-sm font-medium text-muted-foreground"
              >
                Message
              </label>
              <Textarea
                id="message"
                name="message"
                placeholder="Message"
                required
                rows={5}
                className="rounded-xl px-3.5 py-2.5"
              />
            </div>

            <Button
              type="submit"
              size="lg"
              disabled={status === "sending"}
              className="group h-11 animate-[pulse-glow_2.4s_ease-in-out_infinite] rounded-xl text-base motion-reduce:animate-none"
            >
              {status === "sending" ? "Sending..." : "Send Message"}
              {status !== "sending" && (
                <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5" />
              )}
            </Button>

            {status === "success" && (
              <p role="status" className="text-sm text-primary">
                Message sent successfully! I&apos;ll get back to you soon.
              </p>
            )}
            {status === "error" && (
              <p role="alert" className="text-sm text-destructive">
                Something went wrong. Please try again.
              </p>
            )}
          </form>
        </div>
      </ScrollReveal>
    </section>
  );
}
