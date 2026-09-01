import type { Metadata } from "next";
import { FileArrowDown } from "@phosphor-icons/react/dist/ssr";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { ResearchTimeline } from "@/components/research/Timeline";
import { protocols } from "@/lib/data/research";

export const metadata: Metadata = {
  title: "Research | RSB Publications | Open-Source Solar Protocols",
  description:
    "7 peer-reviewed publications from RSB. Open-source Harmattan Resilience Protocol and Circular Retrofit Protocol. Free for any clean energy developer globally.",
};

export default function ResearchPage() {
  return (
    <>
      <PageHero
        title="SPARC+CM Is Not Just a Programme. It Is a Research Programme That Generates a Replicable Model."
        intro="All findings are published openly and freely available to any clean energy developer globally."
      />

      <section className="py-24">
        <Container className="max-w-3xl">
          <Reveal>
            <h2 className="text-2xl font-semibold text-navy">
              The RSB Academic Partnership
            </h2>
            <p className="mt-4 leading-relaxed text-ink/75">
              The SPARC+CM programme is anchored by an independent academic research
              programme at Rennes School of Business (RSB) in Rennes, France. RSB is
              triple-accredited (EQUIS, AACSB, AMBA), ranked in the Financial Times Top
              100, and a UN PRME signatory. The RSB partnership provides academic
              independence: programme findings are published whether they confirm or
              challenge the programme&apos;s design assumptions.
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="bg-surface py-24">
        <Container className="max-w-3xl">
          <Reveal>
            <h2 className="text-2xl font-semibold text-navy">
              The 7-Paper Publication Pipeline
            </h2>
          </Reveal>
          <div className="mt-10">
            <ResearchTimeline />
          </div>
        </Container>
      </section>

      <section className="py-24">
        <Container className="max-w-3xl">
          <Reveal>
            <h2 className="text-2xl font-semibold text-navy">Open-Source Protocols</h2>
          </Reveal>
          <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2">
            {protocols.map((protocol, i) => (
              <Reveal
                key={protocol.title}
                delay={i * 0.05}
                className="rounded-3xl border border-navy/10 bg-white p-7"
              >
                <FileArrowDown weight="fill" className="size-8 text-teal" />
                <h3 className="mt-4 text-base font-semibold text-navy">
                  {protocol.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/65">
                  {protocol.description}
                </p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
