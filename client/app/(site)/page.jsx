import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Partners from "@/components/Partners";
import Contact from "@/components/Contact";
import ScrollReveal from "@/components/ScrollReveal";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <Projects />
        <Partners />
        <Contact />
      </main>
      <ScrollReveal />
    </>
  );
}
