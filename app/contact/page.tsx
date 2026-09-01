import type { Metadata } from "next";
import { MapPin, EnvelopeSimple, Clock } from "@phosphor-icons/react/dist/ssr";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { ContactForm } from "@/components/contact/ContactForm";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact | DFI Partners | School Partnerships | Media",
  description:
    "Contact Tripp Energy and Mobility: DFI investment enquiries, school partnership discussions, technology supplier partnerships, and media requests. We respond within 48 hours.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Let's Build This Together"
        intro="We are actively seeking partnerships with DFI programme officers, school operators, technology suppliers, and academic institutions."
      >
        <div className="mt-6 flex items-center gap-2 text-sm text-white/70">
          <Clock weight="fill" className="size-4 text-teal-400" />
          Every enquiry is read and responded to within 48 business hours.
        </div>
      </PageHero>

      <section className="py-24">
        <Container>
          <div className="grid grid-cols-1 gap-14 lg:grid-cols-[1.4fr_1fr]">
            <Reveal>
              <ContactForm />
            </Reveal>

            <Reveal delay={0.1} className="space-y-8">
              <div>
                <h2 className="text-sm font-semibold uppercase tracking-[0.12em] text-muted">
                  Offices
                </h2>
                <div className="mt-4 space-y-5">
                  {site.offices.map((office) => (
                    <div key={office.country} className="flex gap-3">
                      <MapPin weight="fill" className="mt-0.5 size-5 shrink-0 text-teal" />
                      <div>
                        <p className="text-sm font-semibold text-navy">{office.country}</p>
                        <p className="text-sm text-ink/60">{office.entity}</p>
                        <p className="text-sm text-ink/60">{office.address}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-sm font-semibold uppercase tracking-[0.12em] text-muted">
                  Direct by enquiry type
                </h2>
                <div className="mt-4 space-y-3">
                  {site.contactEmails.map((c) => (
                    <a
                      key={c.email}
                      href={`mailto:${c.email}`}
                      className="flex items-start gap-3 text-sm hover:text-teal"
                    >
                      <EnvelopeSimple weight="fill" className="mt-0.5 size-4 shrink-0 text-teal" />
                      <span>
                        <span className="block font-medium text-navy">{c.label}</span>
                        <span className="text-ink/55">{c.email}</span>
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>
    </>
  );
}
