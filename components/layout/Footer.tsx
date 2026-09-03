import Link from "next/link";
import { EnvelopeSimple, MapPin } from "@phosphor-icons/react/dist/ssr";
import { Container } from "../ui/Container";
import { NewsletterForm } from "./NewsletterForm";
import { site, footerNav } from "@/lib/site";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-navy-deep text-white">
      <Container className="py-16">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.3fr_1fr_1fr_1fr]">
          <div>
             <Image
                src="/logo/tripp_logo_horizontal_white.svg"
                alt="Tripp Energy and Mobility"
                width={180}
                height={70}
                priority
              />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/60">
              A {site.legalForm} transforming schools across Sub-Saharan Africa and South
              Asia into solar-powered community energy and mobility hubs.
            </p>
            <div className="mt-6 space-y-3">
              {site.offices.map((office) => (
                <div key={office.country} className="flex gap-2 text-sm text-white/60">
                  <MapPin weight="bold" className="mt-0.5 size-4 shrink-0 text-teal-400" />
                  <div>
                    <p className="font-medium text-white/85">{office.country}</p>
                    <p>{office.address}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {footerNav.map((group) => (
            <div key={group.heading}>
              <h3 className="text-xs font-semibold uppercase tracking-[0.12em] text-white/40">
                {group.heading}
              </h3>
              <ul className="mt-4 space-y-2.5">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/70 transition-colors hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 border-t border-white/10 pt-10">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-[0.12em] text-white/40">
                Contact us
              </h3>
              <div className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2">
                {site.contactEmails.map((c) => (
                  <a
                    key={c.email}
                    href={`mailto:${c.email}`}
                    className="flex items-center gap-2 text-sm text-white/70 hover:text-white"
                  >
                    <EnvelopeSimple weight="bold" className="size-3.5 shrink-0 text-teal-400" />
                    <span>
                      {c.label}: <span className="text-white/50">{c.email}</span>
                    </span>
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xs font-semibold uppercase tracking-[0.12em] text-white/40">
                Subscribe to programme updates
              </h3>
              <p className="mt-4 text-sm text-white/60">
                Milestones, publications, and pilot progress, direct to your inbox.
              </p>
              <NewsletterForm />
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Tripp Energy and Mobility. All rights reserved.</p>
          <p>{site.domain}, {site.legalForm}, France</p>
        </div>
      </Container>
    </footer>
  );
}
