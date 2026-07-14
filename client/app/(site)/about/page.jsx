import WhoWeAre from "@/components/WhoWeAre";
import WhatWeDo from "@/components/WhatWeDo";
import Services from "@/components/Services";
import Team from "@/components/Team";
import MissionVision from "@/components/MissionVision";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata = {
  title: "About Us · Vision Solutions Limited",
  description:
    "Who we are, what we do, our team, and our mission — Vision Solutions Limited, a technology & AI company in the Horn of Africa.",
};

export default function About() {
  return (
    <>
      <main className="pt-[72px]">
        <WhoWeAre />
        <WhatWeDo />
        <Services />
        <Team />
        <MissionVision />
      </main>
      <ScrollReveal />
    </>
  );
}
