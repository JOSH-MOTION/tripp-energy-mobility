import type { Metadata } from "next";
import { FileText, Image as ImageIcon, UserCircle, EnvelopeSimple } from "@phosphor-icons/react/dist/ssr";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Press",
  description:
    "Media resources for journalists covering Tripp Energy and Mobility and the SPARC+CM programme.",
};

const assets = [
  { icon: FileText, title: "Programme Overview One-Pager", body: "A concise summary of SPARC+CM, the four projects, and the 5/10/5/80 model." },
  { icon: UserCircle, title: "Founder Biography", body: "Background, credentials, and the research underpinning SPARC+CM." },
  { icon: ImageIcon, title: "High-Resolution Programme Graphics", body: "Approved photography, diagrams, and brand assets for editorial use." },
];

export default function PressPage() {
  return (
    <>
      <PageHero
        title="Press"
        intro="Media resources for journalists covering Tripp Energy and Mobility and the SPARC+CM programme."
      />

      <section className="py-24">
        <Container className="max-w-3xl">
          <Reveal>
            <p className="leading-relaxed text-ink/75">
              Tripp Energy and Mobility is a Société à Mission transforming schools
              across Sub-Saharan Africa and South Asia into solar-powered community
              energy and mobility hubs through the SPARC+CM programme. The founding
              deployment launches in Lagos, Nigeria in September 2026.
            </p>
          </Reveal>

          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {assets.map((asset) => {
              const Icon = asset.icon;
              return (
                <Reveal key={asset.title} className="rounded-2xl border border-navy/10 bg-white p-6">
                  <Icon weight="fill" className="size-7 text-teal" />
                  <h3 className="mt-3 text-sm font-semibold text-navy">{asset.title}</h3>
                  <p className="mt-1.5 text-sm text-ink/60">{asset.body}</p>
                </Reveal>
              );
            })}
          </div>

          <Reveal delay={0.1} className="mt-10 flex items-center gap-3 rounded-2xl bg-navy-tint p-6">
            <EnvelopeSimple weight="fill" className="size-6 shrink-0 text-teal" />
            <p className="text-sm text-navy">
              For press enquiries and asset requests, contact{" "}
              <a href="mailto:media@trippenergy.com" className="font-semibold underline underline-offset-2">
                media@trippenergy.com
              </a>
              .
            </p>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
