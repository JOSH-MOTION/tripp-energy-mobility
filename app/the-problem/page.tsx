import type { Metadata } from "next";
import { Warning, GasPump, SunDim, Lightning } from "@phosphor-icons/react/dist/ssr";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "The School Energy Crisis in Africa | Generator Dependence",
  description:
    "15–25% of African school budgets spent on generator fuel. 80–240 teaching hours lost annually. The school energy crisis explained, and how SPARC+CM solves it.",
};

const energyFacts = [
  "15–25% of school operating budgets consumed by generator fuel",
  "2–6 hours of teaching time lost weekly to outage disruption, 80–240 hours per academic year per school",
  "Laboratories, ICT suites, and air conditioning non-functional during outages",
  "Generator fuel costs rose over 200% in Nigeria following the 2023 subsidy removal",
  "Pakistan: 8–16 hours of daily load-shedding, making the grid non-viable for educational operations",
];

const irradiance = [
  { place: "Lagos, Nigeria", value: "4.5–5.2 peak sun hours / day" },
  { place: "Khyber Pakhtunkhwa, Pakistan", value: "5.5–6.5 peak sun hours / day" },
  { place: "Maharashtra, India", value: "5.0–6.0 peak sun hours / day" },
];

export default function ProblemPage() {
  return (
    <>
      <PageHero
        title="The Problem Is Not a Lack of Sunlight. It Is a Lack of Infrastructure Built to Use It."
        intro="The market failure that SPARC+CM was built to solve, and why it matters to DFI funders and school operators alike."
      />

      <section className="py-24">
        <Container className="max-w-3xl">
          <Reveal>
            <div className="flex items-center gap-2 text-teal">
              <Warning weight="fill" className="size-5" />
              <h2 className="text-2xl font-semibold text-navy">
                The Energy Crisis in African and South Asian Schools
              </h2>
            </div>
            <p className="mt-4 leading-relaxed text-ink/75">
              Eighteen of the twenty countries with the largest electricity access
              deficits in the world are in Sub-Saharan Africa. But the energy crisis in
              African schools is not primarily a rural electrification problem, it is
              an urban reliability problem. Schools in Lagos, Karachi, and Kinshasa are
              grid-connected. But the grid delivers power for 2 to 6 hours per day. The
              rest of the time, schools run on petrol and diesel generators.
            </p>
          </Reveal>

          <div className="mt-8 space-y-3">
            {energyFacts.map((fact, i) => (
              <Reveal
                key={fact}
                delay={i * 0.05}
                className="flex gap-3 rounded-xl bg-surface p-4"
              >
                <span className="mt-1 size-1.5 shrink-0 rounded-full bg-gold" />
                <p className="text-sm leading-relaxed text-ink/80">{fact}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-surface py-20">
        <Container className="max-w-3xl">
          <Reveal>
            <div className="flex items-center gap-2 text-teal">
              <GasPump weight="fill" className="size-5" />
              <h2 className="text-2xl font-semibold text-navy">
                The Transport Fuel Crisis
              </h2>
            </div>
            <p className="mt-4 leading-relaxed text-ink/75">
              Alongside the energy crisis, schools across Sub-Saharan Africa and South
              Asia operate ageing school bus fleets running on petrol or diesel, at
              escalating cost. In Nigeria, the 2023 fuel subsidy removal pushed petrol
              prices from ₦200 per litre to over ₦1,250 per litre within 18 months.
              School transport, already consuming 10 to 20% of school operating
              budgets, became unaffordable almost overnight.
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="py-24">
        <Container>
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.2fr_1fr]">
            <Reveal>
              <div className="flex items-center gap-2 text-teal">
                <SunDim weight="fill" className="size-5" />
                <h2 className="text-2xl font-semibold text-navy">
                  The Infrastructure Paradox
                </h2>
              </div>
              <p className="mt-4 leading-relaxed text-ink/75">
                Africa receives more solar irradiance than almost any other continent.
                The energy to power every school in these regions sustainably is
                available every morning, free, renewable, and inexhaustible.{" "}
                <span className="font-semibold text-gold">
                  The barrier is not sunlight. It is the upfront capital cost and the
                  absence of a self-financing model.
                </span>{" "}
                SPARC+CM is the answer.
              </p>
            </Reveal>
            <Reveal delay={0.1} className="space-y-3">
              {irradiance.map((row) => (
                <div
                  key={row.place}
                  className="flex items-center justify-between rounded-xl border border-navy/10 bg-white px-5 py-4"
                >
                  <span className="text-sm font-medium text-navy">{row.place}</span>
                  <span className="text-sm text-teal">{row.value}</span>
                </div>
              ))}
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="bg-navy py-20 text-white">
        <Container className="max-w-3xl">
          <Reveal>
            <div className="flex items-center gap-2 text-teal-400">
              <Lightning weight="fill" className="size-5" />
              <h2 className="text-2xl font-semibold">The Ethiopia Dimension</h2>
            </div>
            <p className="mt-4 leading-relaxed text-white/75">
              Ethiopia, the world&apos;s first country to ban ICE vehicle imports, has
              over 115,000 electric vehicles on its roads and critically inadequate
              charging infrastructure to support them. SPARC+CM&apos;s school-anchored
              solar-powered charging network is structurally the most deliverable
              near-term solution to this crisis, because it does not depend on the grid
              connections and regulatory licences that are paralysing every
              conventional charging infrastructure project in the country.
            </p>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
