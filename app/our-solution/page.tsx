import type { Metadata } from "next";
import { Coins, Lightning, Wrench, Leaf } from "@phosphor-icons/react/dist/ssr";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { SEMSDiagram } from "@/components/solution/SEMSDiagram";
// import { DistributionModel } from "@/components/solution/DistributionModel";

export const metadata: Metadata = {
  title: "SPARC+CM Programme | Solar-Retrofit Nexus | Our Solution",
  description:
    "SPARC+CM integrates solar schools, electric buses, and public EV charging in one self-financing programme. The 5/10/5/80 model, no upfront cost for schools. Nigeria, India, Pakistan.",
};

const revenueStreams = [
  {
    icon: Coins,
    title: "Bus Fuel Savings Pool",
    subtitle: "5/10/5/80 model",
    body: "Generated from Day 1 of electric bus operation. Annual value: ₦1,400,000+ per bus per year at Lagos petrol prices.",
    tint: "bg-navy-tint",
  },
  {
    icon: Lightning,
    title: "Public EV Charging Revenue",
    subtitle: "70/30 split",
    body: "Generated from Day 1 of charging station operation. Growing automatically as Nigeria's EV fleet expands.",
    tint: "bg-surface",
  },
  {
    icon: Wrench,
    title: "Commercial Retrofit Workshop Commissions",
    subtitle: "From Year 2",
    body: "Revenue from third-party EV conversions at the SPARC+CM Lagos retrofit workshop.",
    tint: "bg-surface",
  },
  {
    icon: Leaf,
    title: "Carbon Credits",
    subtitle: "Gold Standard / Verra VCS",
    body: "Three streams: transport emission credits, school energy credits, and embodied carbon credits from circular remanufacturing. First credits from early 2028.",
    tint: "bg-navy-tint",
  },
];

export default function SolutionPage() {
  return (
    <>
      <PageHero
        title="The Solar-Retrofit Nexus: A New Model for School Energy and Mobility."
        intro="SPARC+CM integrates three things no programme has ever combined at a school site: solar primary electricity, solar-charged electric school buses, and solar-powered public EV charging, in a single installation."
      />

      <section className="py-24">
        <Container className="max-w-3xl">
          <Reveal>
            <h2 className="text-2xl font-semibold text-navy">
              The Three-Layer Energy System
            </h2>
            <p className="mt-3 text-ink/70">
              A single smart energy management system (SEMS) governs a strict priority
              sequence, every hour of every day.
            </p>
          </Reveal>
          <div className="mt-10">
            <SEMSDiagram />
          </div>
        </Container>
      </section>

      {/* <section className="bg-surface py-24">
        <Container className="max-w-3xl">
          <Reveal>
            <h2 className="text-2xl font-semibold text-navy">
              The 5/10/5/80 Distribution Model
            </h2>
            <p className="mt-3 text-ink/70">
              Every fuel-saving naira from an electric bus is split four ways the
              moment it is generated.
            </p>
          </Reveal>
          <div className="mt-10">
            <DistributionModel />
          </div>
        </Container>
      </section> */}

      <section className="py-24">
        <Container>
          {/* <Reveal>
            <h2 className="text-2xl font-semibold text-navy">Four Revenue Streams</h2>
          </Reveal>
          <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2">
            {revenueStreams.map((stream, i) => {
              const Icon = stream.icon;
              return (
                <Reveal
                  key={stream.title}
                  delay={i * 0.05}
                  className={`rounded-3xl ${stream.tint} p-7`}
                >
                  <Icon weight="fill" className="size-8 text-teal" />
                  <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-muted">
                    {stream.subtitle}
                  </p>
                  <h3 className="mt-1 text-lg font-semibold text-navy">
                    {stream.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink/70">
                    {stream.body}
                  </p>
                </Reveal>
              );
            })}
          </div> */}

          <Reveal className="mt-12 flex justify-center">
            <Button href="/projects" variant="primary">
              See the Four Projects
            </Button>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
