"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";
import { clsx } from "clsx";
import { Reveal } from "../ui/Reveal";
import { publications } from "@/lib/data/research";

export function ResearchTimeline() {
  const trackRef = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ["start 0.75", "end 0.6"],
  });
  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <>
      {/* Mobile: horizontal scroll-snap */}
      <div className="-mx-6 flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 pb-4 lg:hidden">
        {publications.map((pub) => (
          <div
            key={pub.number}
            className="w-[82%] shrink-0 snap-start rounded-2xl border border-navy/10 bg-white p-6"
          >
            <PubBadge pub={pub} />
          </div>
        ))}
      </div>

      {/* Desktop: vertical timeline */}
      <div className="hidden lg:block">
        <div ref={trackRef} className="relative space-y-8 pl-10">
          <div className="absolute inset-y-0 left-0 w-px bg-navy/10" />
          <motion.div
            style={{ scaleY: reduce ? 1 : lineScale }}
            className="absolute inset-y-0 left-0 w-px origin-top bg-gradient-to-b from-teal via-teal to-gold"
          />
          {publications.map((pub, i) => (
            <Reveal key={pub.number} delay={i * 0.03} className="relative">
              <span
                className={clsx(
                  "absolute -left-[3.05rem] top-1 flex size-6 items-center justify-center rounded-full text-xs font-bold",
                  pub.status ? "bg-gold text-white" : "bg-navy text-white"
                )}
              >
                {pub.number}
              </span>
              <PubBadge pub={pub} />
            </Reveal>
          ))}
        </div>
      </div>
    </>
  );
}

function PubBadge({ pub }: { pub: (typeof publications)[number] }) {
  return (
    <div>
      {pub.status && (
        <span className="mb-2 inline-block rounded-full bg-gold/10 px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-gold">
          {pub.status}
        </span>
      )}
      <p className="text-xs font-semibold uppercase tracking-wide text-teal">
        Paper {pub.number}
      </p>
      <h3 className="mt-1 text-base font-semibold leading-snug text-navy">{pub.title}</h3>
      <p className="mt-2 text-sm text-ink/60">
        {pub.target} · {pub.date}
      </p>
    </div>
  );
}
