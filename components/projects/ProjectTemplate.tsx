import { Container } from "../ui/Container";
import { Reveal } from "../ui/Reveal";
import { Button } from "../ui/Button";
import { CheckCircle } from "@phosphor-icons/react/dist/ssr";
import type { Project } from "@/lib/data/projects";
import { colorStyles } from "./colorStyles";

export function ProjectTemplate({ project }: { project: Project }) {
  const c = colorStyles[project.color];

  return (
    <>
      <section className="relative overflow-hidden bg-navy pt-32 pb-20 text-white lg:pt-36 lg:pb-24">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
            backgroundSize: "28px 28px",
          }}
        />
        <Container className="relative">
          <Reveal>
            <span
              className={`inline-block rounded-full ${c.bg} px-3.5 py-1 text-xs font-semibold uppercase tracking-wide text-white`}
            >
              {project.code}
            </span>
            <h1 className="mt-5 max-w-3xl text-4xl font-bold tracking-tight text-balance md:text-5xl">
              {project.headline}
            </h1>
            <p className="mt-4 text-white/60">
              {project.fullName} · {project.target}
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="py-20">
        <Container className="max-w-3xl">
          <Reveal>
            <p className="text-lg leading-relaxed text-ink/80">{project.intro}</p>
          </Reveal>

          {project.bullets.length > 0 && (
            <div className="mt-8 space-y-3">
              {project.bullets.map((bullet, i) => (
                <Reveal
                  key={bullet}
                  delay={i * 0.04}
                  className={`flex gap-3 rounded-xl ${c.tint} p-4`}
                >
                  <CheckCircle weight="fill" className={`mt-0.5 size-5 shrink-0 ${c.text}`} />
                  <p className="text-sm leading-relaxed text-ink/80">{bullet}</p>
                </Reveal>
              ))}
            </div>
          )}
        </Container>
      </section>

      {project.specs.length > 0 && (
        <section className="bg-surface py-20">
          <Container className="max-w-3xl">
            <Reveal>
              <h2 className="text-xl font-semibold text-navy">Technical Specification</h2>
            </Reveal>
            <div className="mt-6 divide-y divide-navy/10 overflow-hidden rounded-2xl border border-navy/10 bg-white">
              {project.specs.map((spec) => (
                <div
                  key={spec.label}
                  className="grid grid-cols-1 gap-1 p-5 sm:grid-cols-[220px_1fr] sm:gap-4"
                >
                  <span className={`text-sm font-semibold ${c.text}`}>{spec.label}</span>
                  <span className="text-sm text-ink/75">{spec.value}</span>
                </div>
              ))}
            </div>
          </Container>
        </section>
      )}

      {project.table && (
        <section className="bg-surface py-20">
          <Container className="max-w-4xl">
            <Reveal>
              <h2 className="text-xl font-semibold text-navy">Vehicle Options</h2>
            </Reveal>
            <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3">
              {project.table.rows.map((row) => (
                <div
                  key={row[0]}
                  className="rounded-2xl border border-navy/10 bg-white p-6"
                >
                  <h3 className={`text-base font-semibold ${c.text}`}>{row[0]}</h3>
                  <p className="mt-2 text-sm font-medium text-navy">{row[1]}</p>
                  <p className="mt-3 text-sm leading-relaxed text-ink/65">{row[2]}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>
      )}

      {project.extra && (
        <section className="py-20">
          <Container className="max-w-3xl">
            <Reveal className={`rounded-3xl ${c.tint} p-8`}>
              <h2 className="text-xl font-semibold text-navy">{project.extra.heading}</h2>
              <p className="mt-3 text-sm leading-relaxed text-ink/75">
                {project.extra.body}
              </p>
            </Reveal>
          </Container>
        </section>
      )}

      <section className="border-t border-navy/10 py-16">
        <Container className="flex flex-col items-center gap-5 text-center">
          <Reveal>
            <h2 className="text-xl font-semibold text-navy">
              Every school receives all four projects.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <Button href="/projects" variant="secondary">
              View All Projects
            </Button>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
