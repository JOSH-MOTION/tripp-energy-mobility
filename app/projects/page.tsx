import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { projects } from "@/lib/data/projects";
import { colorStyles } from "@/components/projects/colorStyles";

export const metadata: Metadata = {
  title: "Our Projects | CSRP PSEBP SSECNP LSECNP | Solar Schools Nigeria",
  description:
    "Four integrated projects at every SPARC+CM school: circular bus retrofit, new EV deployment, solar-storage, and public EV charging network. No upfront cost for schools.",
};

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        title="Four Projects. One School. One Solar System. Unlimited Impact."
        intro="Every SPARC+CM school receives all four projects. Each addresses a different dimension of the school's energy and mobility challenge, together forming a complete, self-sustaining clean energy and mobility hub."
      />

      <section className="py-24">
        <Container>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {projects.map((project, i) => {
              const c = colorStyles[project.color];
              return (
                <Reveal key={project.slug} delay={i * 0.05}>
                  <Link
                    href={`/projects/${project.slug}`}
                    className="group block h-full rounded-3xl border border-navy/10 bg-white p-8 transition-shadow hover:shadow-xl"
                  >
                    <span
                      className={`inline-block rounded-full ${c.bg} px-3.5 py-1 text-xs font-semibold uppercase tracking-wide text-white`}
                    >
                      {project.code}
                    </span>
                    <h2 className="mt-4 text-xl font-semibold text-navy">
                      {project.fullName}
                    </h2>
                    <p className={`mt-1 text-sm font-medium ${c.text}`}>{project.target}</p>
                    <p className="mt-4 text-sm leading-relaxed text-ink/65">
                      {project.headline}
                    </p>
                    <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-navy">
                      Read the project
                      <ArrowRight
                        weight="bold"
                        className="size-4 transition-transform group-hover:translate-x-0.5"
                      />
                    </span>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </section>
    </>
  );
}
