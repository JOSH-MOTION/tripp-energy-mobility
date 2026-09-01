import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { economicImpact, socialImpact, environmentalImpact } from "@/lib/data/impact";

export const metadata: Metadata = {
  title: "Impact | Solar Schools Energy Savings CO2 Green Jobs Nigeria",
  description:
    "Quantified impact: 61–91 tonnes CO2e avoided, 500–600 students in energy-secure schools, 12–20 green jobs, 300–500 teaching hours recovered. Real-time telematics verified.",
};

function ImpactGrid({
  items,
}: {
  items: { metric: string; indicator: string; description: string }[];
}) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <div key={item.indicator} className="rounded-2xl border border-navy/10 bg-white p-6">
          <p className="text-2xl font-bold text-teal">{item.metric}</p>
          <p className="mt-2 text-sm font-semibold text-navy">{item.indicator}</p>
          <p className="mt-1.5 text-sm text-ink/60">{item.description}</p>
        </div>
      ))}
    </div>
  );
}

export default function ImpactPage() {
  return (
    <>
      <PageHero title="Every Impact Claim on This Page Is Verified by Real-Time Telematics Data, Not Self-Reported." />

      <section className="py-20">
        <Container>
          <Reveal>
            <h2 className="text-2xl font-semibold text-navy">Economic Impact</h2>
          </Reveal>
          <div className="mt-6">
            <ImpactGrid items={economicImpact} />
          </div>
        </Container>
      </section>

      <section className="bg-surface py-20">
        <Container>
          <Reveal>
            <h2 className="text-2xl font-semibold text-navy">Social Impact</h2>
          </Reveal>
          <div className="mt-6">
            <ImpactGrid items={socialImpact} />
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <Reveal>
            <h2 className="text-2xl font-semibold text-navy">Environmental Impact</h2>
          </Reveal>
          <div className="mt-6">
            <ImpactGrid items={environmentalImpact} />
          </div>
        </Container>
      </section>
    </>
  );
}
