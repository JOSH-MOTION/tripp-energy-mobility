import type { Metadata } from "next";
import { MapPin } from "@phosphor-icons/react/dist/ssr";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { programmeFamily } from "@/lib/data/programme-family";

export const metadata: Metadata = {
  title: "Programme Family | Nigeria India Pakistan DRC Ethiopia",
  description:
    "Six programme identities. One platform. LASMOCEP Nigeria, LUMECO DRC, SPARC+ET Ethiopia, NOOR-CM Pakistan, SURYA-CM India. Global school solar and EV mobility.",
};

export default function ProgrammeFamilyPage() {
  return (
    <>
      <PageHero
        title="One Model. Six Identities. Five Countries. Designed to Scale."
        intro="Each deployment speaks the language, and meets the financing rules, of the market it enters, while running the same underlying SPARC+CM methodology."
      />

      <section className="py-24">
        <Container>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            {programmeFamily.map((p, i) => (
              <Reveal
                key={p.identity}
                delay={i * 0.05}
                className={
                  p.identity === "SPARC+CM"
                    ? "rounded-3xl bg-navy p-8 text-white md:col-span-2"
                    : "rounded-3xl border border-navy/10 bg-white p-8"
                }
              >
                <div
                  className={`flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide ${
                    p.identity === "SPARC+CM" ? "text-teal-400" : "text-teal"
                  }`}
                >
                  <MapPin weight="fill" className="size-3.5" />
                  {p.geography}
                </div>
                <h2
                  className={`mt-2 text-2xl font-bold ${
                    p.identity === "SPARC+CM" ? "text-white" : "text-navy"
                  }`}
                >
                  {p.identity}
                </h2>
                <p
                  className={`mt-1 text-sm italic ${
                    p.identity === "SPARC+CM" ? "text-white/50" : "text-muted"
                  }`}
                >
                  {p.meaning}
                </p>
                <p
                  className={`mt-4 text-sm leading-relaxed ${
                    p.identity === "SPARC+CM" ? "text-white/75" : "text-ink/70"
                  }`}
                >
                  {p.description}
                </p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
