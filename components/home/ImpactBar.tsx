import { Container } from "../ui/Container";
import { StatCounter } from "../ui/StatCounter";
import { Reveal } from "../ui/Reveal";
import { heroStats } from "@/lib/data/impact";

export function ImpactBar() {
  return (
    <section className="bg-navy py-14">
      <Container>
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-6">
          {heroStats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 0.05}>
              <p className="font-mono text-3xl font-bold text-teal-400 md:text-4xl">
                <StatCounter value={stat.value} />
              </p>
              <p className="mt-1.5 text-sm font-semibold text-white">{stat.label}</p>
              <p className="mt-0.5 text-xs text-white/50">{stat.detail}</p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
