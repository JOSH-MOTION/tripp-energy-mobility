import { Container } from "../ui/Container";
import { ScrollRevealQuote } from "../ui/ScrollRevealQuote";

export function StandingSentence() {
  return (
    <section className="bg-navy-tint py-24">
      <Container>
        <ScrollRevealQuote
          className="mx-auto max-w-4xl text-center text-2xl font-medium leading-snug text-navy md:text-3xl"
          segments={[
            {
              text: "Eighteen of the twenty countries with the largest electricity access deficits in the world are in Sub-Saharan Africa.",
            },
            {
              text: "SPARC+CM is the only programme designed to address school-level energy insecurity across this geography at scale,",
              className: "text-gold",
            },
            {
              text: "using a financially self-sustaining solar-retrofit model that does not depend on grid extension.",
            },
          ]}
        />
      </Container>
    </section>
  );
}
