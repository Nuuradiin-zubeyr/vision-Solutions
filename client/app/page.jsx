import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhoWeAre from "@/components/WhoWeAre";
import WhatWeDo from "@/components/WhatWeDo";
import Services from "@/components/Services";
import Team from "@/components/Team";
import MissionVision from "@/components/MissionVision";
import Projects from "@/components/Projects";
import Partners from "@/components/Partners";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import ChatWidget from "@/components/ChatWidget";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <WhoWeAre />
        <WhatWeDo />
        <Services />
        <Team />
        <MissionVision />
        <Projects />
        <Partners />
        <Contact />
      </main>
      <Footer />
      <ScrollReveal />
      <ChatWidget />
    </>
  );
}
