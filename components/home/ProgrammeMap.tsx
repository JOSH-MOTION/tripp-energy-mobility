"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MapPin } from "@phosphor-icons/react/dist/ssr";
import { Container } from "../ui/Container";
import { Reveal } from "../ui/Reveal";
import { programmeFamily } from "@/lib/data/programme-family";
import Link from "next/link";

export function ProgrammeMap() {
  const [active, setActive] = useState(0);
  const current = programmeFamily[active];

  return (
    <section className="bg-navy-deep py-24 text-white">
      <Container>
        <Reveal>
          <h2 className="max-w-xl text-3xl font-semibold tracking-tight md:text-4xl">
            Where We Operate
          </h2>
          <p className="mt-3 max-w-lg text-white/60">
            Six programme identities, one methodology, five countries designed to
            scale.
          </p>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1.1fr]">
          <Reveal delay={0.1} className="flex flex-wrap gap-3">
            {programmeFamily.map((p, i) => (
              <button
                key={p.identity}
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
                onClick={() => setActive(i)}
                className={`relative overflow-hidden rounded-2xl border px-5 py-4 text-left transition-colors ${
                  active === i
                    ? "border-teal-400"
                    : "border-white/10 hover:border-white/25"
                }`}
              >
                {active === i && (
                  <motion.div
                    layoutId="programme-active-tab"
                    className="absolute inset-0 bg-teal-400/10"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
                <span className="relative flex items-center gap-1.5 text-sm font-semibold text-white">
                  <MapPin
                    weight="fill"
                    className={active === i ? "size-3.5 text-teal-400" : "size-3.5 text-white/30"}
                  />
                  {p.identity}
                </span>
                <span className="relative mt-0.5 block text-xs text-white/50">
                  {p.geography}
                </span>
              </button>
            ))}
          </Reveal>

          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.identity}
                initial={{ opacity: 0, x: 16 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -16 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="rounded-3xl border border-white/10 bg-white/5 p-8"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-teal-400">
                  {current.geography}
                </p>
                <h3 className="mt-2 text-2xl font-bold">{current.identity}</h3>
                <p className="mt-1 text-sm italic text-white/50">{current.meaning}</p>
                <p className="mt-4 text-sm leading-relaxed text-white/70">
                  {current.description}
                </p>
                <Link
                  href="/programme-family"
                  className="mt-6 inline-block text-sm font-semibold text-teal-400 hover:text-white"
                >
                  View the full programme family →
                </Link>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </Container>
    </section>
  );
}
