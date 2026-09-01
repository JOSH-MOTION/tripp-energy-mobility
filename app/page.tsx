import type { Metadata } from "next";
import { Hero } from "@/components/home/Hero";
import { ImpactBar } from "@/components/home/ImpactBar";
import { StandingSentence } from "@/components/home/StandingSentence";
import { Pillars } from "@/components/home/Pillars";
import { SolutionTeaser } from "@/components/home/SolutionTeaser";
import { ProgrammeMap } from "@/components/home/ProgrammeMap";
import { PartnerCta } from "@/components/home/PartnerCta";

export const metadata: Metadata = {
  title: "Solar Schools, Electric Buses, EV Charging | Africa & South Asia",
  description:
    "Tripp Energy and Mobility transforms schools across Sub-Saharan Africa and South Asia into solar-powered energy and mobility hubs. SPARC+CM programme: Nigeria, India, Pakistan, DRC, Ethiopia.",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <ImpactBar />
      <StandingSentence />
      <Pillars />
      <SolutionTeaser />
      <ProgrammeMap />
      <PartnerCta />
    </>
  );
}
