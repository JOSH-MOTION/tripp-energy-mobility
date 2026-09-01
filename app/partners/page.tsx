import type { Metadata } from "next";
import { MapPin } from "@phosphor-icons/react/dist/ssr";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { pilotSchools, technologyPartners, dfiPartners } from "@/lib/data/partners";

export const metadata: Metadata = {
  title: "Partners | Pilot Schools Lagos | DFI Partners",
  description:
    "SPARC+CM partners: Padre Monti Catholic College, Abba's Heart Montessori, Auxano Solar, Retrofleet, RSB, All On, AFD, AfDB. Building the clean energy school network.",
};

export default function PartnersPage() {
  return (
    <>
      <PageHero
        title="Partners and Pilot Schools"
        intro="The schools, suppliers, academic institutions, and development finance partners building SPARC+CM."
      />

      <section className="py-24">
        <Container>
          <Reveal>
            <h2 className="text-2xl font-semibold text-navy">Our Pilot Schools</h2>
          </Reveal>
          <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2">
            {pilotSchools.map((school, i) => (
              <Reveal
                key={school.name}
                delay={i * 0.05}
                className="rounded-3xl border border-navy/10 bg-white p-7"
              >
                <h3 className="text-lg font-semibold text-navy">{school.name}</h3>
                <p className="mt-1 flex items-center gap-1.5 text-sm text-teal">
                  <MapPin weight="fill" className="size-3.5" />
                  {school.location}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-ink/65">
                  {school.description}
                </p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-surface py-24">
        <Container>
          <Reveal>
            <h2 className="text-2xl font-semibold text-navy">
              Technology and Supply Partners
            </h2>
          </Reveal>
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {technologyPartners.map((partner, i) => (
              <Reveal
                key={partner.name}
                delay={(i % 3) * 0.05}
                className="rounded-2xl border border-navy/10 bg-white p-6"
              >
                <h3 className="text-base font-semibold text-navy">{partner.name}</h3>
                <p className="mt-1 text-sm font-medium text-teal">{partner.role}</p>
                <p className="mt-2 text-sm leading-relaxed text-ink/60">{partner.notes}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-24">
        <Container>
          <Reveal>
            <h2 className="text-2xl font-semibold text-navy">
              DFI and Funding Partners
            </h2>
          </Reveal>
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {dfiPartners.map((partner, i) => (
              <Reveal
                key={partner.name}
                delay={(i % 3) * 0.05}
                className="rounded-2xl bg-navy-tint p-6"
              >
                <h3 className="text-base font-semibold text-navy">{partner.name}</h3>
                <p className="mt-1 text-sm font-medium text-teal-600">{partner.role}</p>
                <p className="mt-2 text-sm leading-relaxed text-navy/60">{partner.notes}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
