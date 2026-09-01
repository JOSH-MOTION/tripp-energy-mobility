import { GraduationCap, SealCheck } from "@phosphor-icons/react/dist/ssr";
import { Container } from "../ui/Container";
import { Button } from "../ui/Button";
import { Reveal } from "../ui/Reveal";

const credentials = ["EQUIS", "AACSB", "AMBA", "FT Top 100", "UN PRME"];

export function SolutionTeaser() {
  return (
    <section className="bg-surface py-24">
      <Container>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.3fr_1fr] lg:items-start">
          <Reveal>
            <h2 className="text-3xl font-semibold tracking-tight text-navy md:text-4xl">
              The SPARC+CM Programme
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-ink/75">
              School Programme Action for Renewable Charging and Circular Mobility is
              Tripp Energy and Mobility&apos;s flagship programme. Launching in Nigeria
              in September 2026 and deploying simultaneously in India and Pakistan from
              September 2027, SPARC+CM is designed to scale to tens of thousands of
              schools across five countries through a self-financing model that does not
              require ongoing subsidy.
            </p>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-ink/75">
              The 5/10/5/80 fuel savings distribution model simultaneously reduces
              school bus fees for parents, generates institutional profit for school
              operators, and builds a financial pool that repays DFI investment capital
              and funds the next cycle of expansion.{" "}
              <strong className="font-semibold text-navy">
                No school pays anything upfront. The programme pays for itself.
              </strong>
            </p>
            <div className="mt-7">
              <Button href="/our-solution" variant="secondary">
                See How It Works
              </Button>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="rounded-3xl bg-navy p-8 text-white">
            <GraduationCap weight="fill" className="size-9 text-teal-400" />
            <h3 className="mt-4 text-lg font-semibold">Anchored by Rennes School of Business</h3>
            <p className="mt-2 text-sm leading-relaxed text-white/70">
              SPARC+CM is anchored by an independent academic research programme at RSB,
              triple-accredited and ranked in the Financial Times Top 100 globally.
              Seven peer-reviewed publications are planned across the programme&apos;s
              four-year implementation period.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {credentials.map((c) => (
                <span
                  key={c}
                  className="inline-flex items-center gap-1 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium text-white/80"
                >
                  <SealCheck weight="fill" className="size-3.5 text-teal-400" />
                  {c}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
