"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";
import { Button } from "../ui/Button";
import { Container } from "../ui/Container";
import { site } from "@/lib/site";

const headlineLines = site.tagline.split(". ").map((line, i, arr) =>
  i < arr.length - 1 ? `${line}.` : line
);

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [0, 140]);
  const imageScale = useTransform(scrollYProgress, [0, 1], reduce ? [1, 1] : [1.06, 1.18]);

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-[100dvh] items-center overflow-hidden bg-navy-deep"
    >
      <motion.div style={{ y: imageY, scale: imageScale }} className="absolute inset-0">
        <Image
          src="/hero.jpeg"
          alt="A solar technician installing rooftop photovoltaic panels"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </motion.div>
      <div className="absolute inset-0 bg-navy/70" />
      <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/30 to-navy-deep/10" />

      <Container className="relative pt-24 pb-16">
        <motion.p
          initial={reduce ? false : { opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="text-sm font-medium tracking-wide text-white/80"
        >
          {site.legalForm} · France, Nigeria, and beyond
        </motion.p>

        <h1 className="mt-4 max-w-3xl text-4xl font-bold leading-[1.08] tracking-tight text-white text-balance md:text-6xl">
          {headlineLines.map((line, i) => (
            <motion.span
              key={line}
              initial={reduce ? false : { opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.15 + i * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="block"
            >
              {line}
            </motion.span>
          ))}
        </h1>

        <motion.p
          initial={reduce ? false : { opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="mt-5 max-w-xl text-base text-white/80 md:text-lg"
        >
          Solar-powered community energy and mobility hubs across Sub-Saharan Africa and
          South Asia: no generator dependence, electric school buses, and public EV
          charging that pays for itself.
        </motion.p>

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mt-9 flex flex-wrap gap-4"
        >
          <Button href="/our-solution" variant="inverse">
            Explore the Programme
          </Button>
          <Button href="/contact?type=partnership" variant="inverse-outline">
            Partner With Us
          </Button>
        </motion.div>
      </Container>
    </section>
  );
}
