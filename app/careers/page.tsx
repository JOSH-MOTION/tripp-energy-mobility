import type { Metadata } from "next";
import { MapPin, Clock, CalendarBlank } from "@phosphor-icons/react/dist/ssr";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { openings, collaboratorCountries } from "@/lib/data/careers";

export const metadata: Metadata = {
  title: "Careers | SPARC+CM Student Collaborator Programme",
  description:
    "Join the team building Africa's school clean energy network. Nigeria Country Manager role, student collaborator programme across 9 countries. SPARC+CM careers.",
};

export default function CareersPage() {
  return (
    <>
      <PageHero title="We Are Building the Clean Energy Infrastructure of Africa, One School at a Time. Join Us." />

      <section className="py-24">
        <Container className="max-w-3xl">
          <Reveal>
            <h2 className="text-2xl font-semibold text-navy">
              The Student Collaborator Programme
            </h2>
            <p className="mt-4 leading-relaxed text-ink/75">
              Before a single dollar of external funding was received, a nine-country
              team of young professionals from Nigeria, India, Pakistan, Ghana, Kenya,
              Cameroon, Ivory Coast, Ethiopia, and the DRC had already engaged with the
              programme, bringing country-specific market knowledge, language
              capability, and community connections that no single-country team can
              replicate.
            </p>
            <p className="mt-4 leading-relaxed text-ink/75">
              The student collaborator programme is open to Masters and doctoral
              students from any accredited institution with a demonstrated interest in
              clean energy, sustainable mobility, circular economy, or international
              development finance. Collaborators receive real programme experience,
              co-authorship credits on open-source publications, and an internationally
              recognised programme credential.
            </p>
          </Reveal>

          <Reveal delay={0.1} className="mt-8 flex flex-wrap gap-2">
            {collaboratorCountries.map((c) => (
              <span
                key={c}
                className="rounded-full bg-navy-tint px-3.5 py-1.5 text-sm font-medium text-navy"
              >
                {c}
              </span>
            ))}
          </Reveal>
        </Container>
      </section>

      <section className="bg-surface py-24">
        <Container className="max-w-3xl">
          <Reveal>
            <h2 className="text-2xl font-semibold text-navy">Current Openings</h2>
          </Reveal>
          <div className="mt-8 space-y-5">
            {openings.map((job) => (
              <Reveal key={job.title} className="rounded-3xl border border-navy/10 bg-white p-8">
                <h3 className="text-xl font-semibold text-navy">{job.title}</h3>
                <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-sm text-ink/60">
                  <span className="flex items-center gap-1.5">
                    <MapPin weight="fill" className="size-4 text-teal" />
                    {job.location}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock weight="fill" className="size-4 text-teal" />
                    {job.type}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <CalendarBlank weight="fill" className="size-4 text-teal" />
                    Start {job.start}
                  </span>
                </div>
                <p className="mt-4 leading-relaxed text-ink/75">{job.description}</p>
                <p className="mt-3 text-sm text-ink/60">{job.requirements}</p>
                <div className="mt-6">
                  <Button href="/contact?type=general" variant="secondary">
                    Apply for This Role
                  </Button>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
