import { SunHorizon } from "@phosphor-icons/react/dist/ssr";
import { Button } from "../ui/Button";
import { Container } from "../ui/Container";
import { PlaceholderVisual } from "../ui/PlaceholderVisual";
import { site } from "@/lib/site";

export function Hero() {
  return (
    <section className="relative flex min-h-[100dvh] items-center overflow-hidden bg-navy-deep">
      {/* TODO: replace with real photography: solar-roofed school + electric bus, Lagos */}
      <PlaceholderVisual
        tone="deep"
        icon={<SunHorizon weight="thin" className="size-[38rem]" />}
        className="absolute inset-0"
      />
      <div className="absolute inset-0 bg-navy/55" />
      <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/25 to-transparent" />

      <Container className="relative pt-24 pb-16">
        <p className="text-sm font-medium tracking-wide text-teal-400">
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
