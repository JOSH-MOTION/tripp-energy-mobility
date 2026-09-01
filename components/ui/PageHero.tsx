import { Container } from "./Container";
import { Reveal } from "./Reveal";

export function PageHero({
  title,
  intro,
  children,
}: {
  title: string;
  intro?: string;
  children?: React.ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-navy pt-32 pb-20 text-white lg:pt-36 lg:pb-24">
      <div
        aria-hidden
        className="bg-dot-drift pointer-events-none absolute -inset-8 opacity-[0.07]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "28px 28px",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 -top-32 size-96 rounded-full bg-teal/20 blur-3xl"
      />
      <Container className="relative">
        <Reveal>
          <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-balance md:text-5xl">
            {title}
          </h1>
        </Reveal>
        {intro && (
          <Reveal delay={0.1}>
            <p className="mt-5 max-w-2xl text-lg text-white/75">{intro}</p>
          </Reveal>
        )}
        {children}
      </Container>
    </section>
  );
}
