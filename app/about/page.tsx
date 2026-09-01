import type { Metadata } from "next";
import { CheckCircle, GraduationCap, UserCircle } from "@phosphor-icons/react/dist/ssr";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { PlaceholderVisual } from "@/components/ui/PlaceholderVisual";

export const metadata: Metadata = {
  title: "About Us | Société à Mission | Clean Energy Schools Africa",
  description:
    "Tripp Energy and Mobility is a French Société à Mission transforming schools into solar energy and mobility hubs across Africa and South Asia. Anchored by Rennes School of Business.",
};

const commitments = [
  "Prioritising school community energy access over commercial revenue extraction",
  "Maintaining the 5/10/5/80 distribution model sharing programme benefits with parents, school operators, and the community",
  "Publishing all programme methodologies as open-source resources freely available for global replication",
  "Achieving independently verified carbon credit registration for all programme emissions avoided",
  "Maintaining a 40% female employment target across all programme operations",
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="Energy Is the Foundation. Mobility Is the Application. Schools Are the Infrastructure."
        intro="Who Tripp Energy and Mobility is, what drives the mission, and what the Société à Mission legal form means for every stakeholder we work with."
      />

      <section className="py-24">
        <Container className="max-w-3xl">
          <Reveal>
            <h2 className="text-2xl font-semibold text-navy">Who We Are</h2>
            <p className="mt-4 leading-relaxed text-ink/75">
              Tripp Energy and Mobility is a Société à Mission, France&apos;s
              purpose-driven company legal form, equivalent to a Benefit Corporation,
              registered in France and operating across Sub-Saharan Africa and South
              Asia through the SPARC+CM programme. We are simultaneously a social
              enterprise and a commercially structured company: our mission is binding,
              our financial model is self-sustaining, and our impact is independently
              verified.
            </p>
            <p className="mt-4 leading-relaxed text-ink/75">
              Our Nigerian operational entity, Tripp Energy and Mobility Nigeria
              Limited, is registered under the Companies and Allied Matters Act (CAMA)
              2020 and serves as the primary implementation vehicle for the LASMOCEP /
              SPARC+CM programme in Nigeria.
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="bg-navy-tint py-20">
        <Container className="max-w-3xl">
          <Reveal>
            <h2 className="text-2xl font-semibold text-navy">Our Mission</h2>
            <p className="mt-4 text-lg leading-relaxed text-navy/85">
              To transform schools across Sub-Saharan Africa and South Asia into
              solar-powered community energy and mobility hubs, eliminating
              fossil-fuel dependence, deploying clean electric transport, and
              creating community EV charging infrastructure, using a financially
              self-sustaining model that does not depend on ongoing subsidy or grid
              extension.
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="py-24">
        <Container className="max-w-3xl">
          <Reveal>
            <h2 className="text-2xl font-semibold text-navy">
              The Société à Mission: What It Means
            </h2>
            <p className="mt-4 leading-relaxed text-ink/75">
              Tripp Energy and Mobility is incorporated as a Société à Mission under
              French law, a legal form introduced in 2019 that requires the company to
              define, publish, and be independently audited on its social and
              environmental mission.{" "}
              <strong className="font-semibold text-navy">
                This is not a marketing designation. It is a binding legal commitment.
              </strong>
            </p>
            <p className="mt-4 text-sm font-semibold uppercase tracking-wide text-muted">
              Our mission commitments, embedded in our statuts, include:
            </p>
          </Reveal>
          <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {commitments.map((item, i) => (
              <Reveal
                key={item}
                delay={i * 0.05}
                className="flex gap-3 rounded-2xl border border-navy/10 bg-surface p-5"
              >
                <CheckCircle weight="fill" className="mt-0.5 size-5 shrink-0 text-teal" />
                <p className="text-sm leading-relaxed text-ink/80">{item}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-surface py-24">
        <Container>
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.9fr_1.4fr] lg:items-center">
            <Reveal>
              <PlaceholderVisual
                tone="teal"
                icon={<UserCircle weight="thin" className="size-56" />}
                className="aspect-[4/5] w-full rounded-3xl"
              />
              <p className="mt-3 text-xs text-muted">
                Founder photograph pending final approval.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="text-2xl font-semibold text-navy">Our Founder</h2>
              <p className="mt-1 text-sm font-medium text-teal">
                Founder and CEO, Tripp Energy and Mobility · Masters Researcher, Rennes
                School of Business
              </p>
              <p className="mt-4 leading-relaxed text-ink/75">
                Tripp Energy and Mobility&apos;s founder is a postgraduate researcher at
                Rennes School of Business in Rennes, France, where their Masters
                research on circular retrofitting as a pathway to green transitions and
                inclusive industrialisation in African cities directly underpins the
                SPARC+CM programme. Their first academic paper, &ldquo;Circular
                Retrofitting as a Pathway to Green Transitions and Inclusive
                Industrialisation in African Cities,&rdquo; has been publicly presented
                and submitted for peer review.
              </p>
              <p className="mt-4 leading-relaxed text-ink/75">
                Before founding Tripp Energy and Mobility, the founder established
                Tobeit Consulting Limited, an active Nigerian technology services
                company, which serves as the programme&apos;s Nigerian implementation
                vehicle and All On Off-Grid Energy Challenge 2026 applicant entity. The
                SPARC+CM programme was designed to solve the daily reality of Nigerian
                school communities paying 15 to 25% of operating budgets on generator
                fuel while students lose thousands of teaching hours annually to energy
                outages.
              </p>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="py-24">
        <Container>
          <Reveal>
            <h2 className="text-2xl font-semibold text-navy">Our Academic Anchors</h2>
          </Reveal>
          <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2">
            <Reveal className="rounded-3xl bg-navy p-8 text-white">
              <GraduationCap weight="fill" className="size-9 text-teal-400" />
              <h3 className="mt-4 text-lg font-semibold">Rennes School of Business</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/70">
                SPARC+CM is anchored by an independent academic research programme at
                RSB, triple-accredited (EQUIS, AACSB, AMBA), ranked in the Financial
                Times Top 100 globally, and a UN PRME signatory. Seven planned
                peer-reviewed publications will document all programme methodologies
                and findings as open-source resources.
              </p>
            </Reveal>
            <Reveal delay={0.1} className="rounded-3xl border border-navy/10 bg-white p-8">
              <GraduationCap weight="fill" className="size-9 text-teal" />
              <h3 className="mt-4 text-lg font-semibold text-navy">
                Pan-Atlantic University / Lagos Business School
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/70">
                PAU/LBS, AACSB-accredited and ranked in the Financial Times Top 40 for
                Executive Education, serves as SPARC+CM&apos;s Nigerian academic
                co-partner.
              </p>
            </Reveal>
          </div>
        </Container>
      </section>
    </>
  );
}
