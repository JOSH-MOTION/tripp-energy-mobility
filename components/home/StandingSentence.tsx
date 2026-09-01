import { Container } from "../ui/Container";
import { Reveal } from "../ui/Reveal";

export function StandingSentence() {
  return (
    <section className="bg-navy-tint py-20">
      <Container>
        <Reveal>
          <p className="mx-auto max-w-4xl text-center text-2xl font-medium leading-snug text-navy md:text-3xl">
            Eighteen of the twenty countries with the largest electricity access
            deficits in the world are in Sub-Saharan Africa.{" "}
            <span className="text-gold">
              SPARC+CM is the only programme designed to address school-level energy
              insecurity across this geography at scale
            </span>
            , using a financially self-sustaining solar-retrofit model that does not
            depend on grid extension.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
