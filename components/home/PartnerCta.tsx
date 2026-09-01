import { Container } from "../ui/Container";
import { Button } from "../ui/Button";
import { Reveal } from "../ui/Reveal";

export function PartnerCta() {
  return (
    <section className="relative overflow-hidden bg-navy py-24 text-white">
      <div
        aria-hidden
        className="pointer-events-none absolute -left-24 top-1/2 size-96 -translate-y-1/2 rounded-full bg-teal/20 blur-3xl"
      />
      <Container className="relative">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
              Partner With Us
            </h2>
            <p className="mt-4 text-white/70">
              We are actively seeking partnerships with development finance
              institutions, school operators, solar installation partners, EV
              technology suppliers, and academic institutions. Whether you are a DFI
              programme officer, a school proprietor, or a clean energy company looking
              to expand into African and South Asian markets, we want to hear from you.
            </p>
            <div className="mt-8 flex justify-center">
              <Button href="/contact?type=partnership" variant="inverse">
                Partner With Us
              </Button>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
