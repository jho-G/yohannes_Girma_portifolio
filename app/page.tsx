import { About } from "@/components/About/About";
import { PageBackground } from "@/components/backgrounds/PageBackground";
import { Contact } from "@/components/Contact/Contact";
import { Footer } from "@/components/Footer/Footer";
import { Hero } from "@/components/Hero/Hero";
import { Navbar } from "@/components/Navbar/Navbar";
import { Projects } from "@/components/Projects/Projects";
import { Skills } from "@/components/Skills/Skills";

export default function Home() {
  return (
    <>
      <PageBackground />
      <Navbar />
      <main className="relative z-10 flex-1">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
