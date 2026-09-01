import Image from "next/image";
import { Button } from "../ui/Button";
import { Container } from "../ui/Container";
import { site } from "@/lib/site";

export function Hero() {
  return (
    <section className="relative flex min-h-[100dvh] items-center overflow-hidden bg-navy-deep">
      <Image
        src="/hero.jpeg"
        alt="A solar technician installing rooftop photovoltaic panels"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-navy/70" />
      <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/30 to-navy-deep/10" />

      <Container className="relative pt-24 pb-16">
        <p className="text-sm font-medium tracking-wide text-white/80">
          {site.legalForm} · France, Nigeria, and beyond
        </p>
        <h1 className="mt-4 max-w-3xl text-4xl font-bold leading-[1.08] tracking-tight text-white text-balance md:text-6xl">
          {site.tagline}
        </h1>
        <p className="mt-5 max-w-xl text-base text-white/80 md:text-lg">
          Solar-powered community energy and mobility hubs across Sub-Saharan Africa and
          South Asia: no generator dependence, electric school buses, and public EV
          charging that pays for itself.
        </p>
        <div className="mt-9 flex flex-wrap gap-4">
          <Button href="/our-solution" variant="inverse">
            Explore the Programme
          </Button>
          <Button href="/contact?type=partnership" variant="inverse-outline">
            Partner With Us
          </Button>
        </div>
      </Container>
    </section>
  );
}
