"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion, type MotionValue } from "motion/react";

type Segment = { text: string; className?: string };

function Word({
  children,
  progress,
  range,
  className,
}: {
  children: string;
  progress: MotionValue<number>;
  range: [number, number];
  className?: string;
}) {
  const opacity = useTransform(progress, range, [0.18, 1]);
  return (
    <motion.span style={{ opacity }} className={className}>
      {children}{" "}
    </motion.span>
  );
}

export function ScrollRevealQuote({
  segments,
  className,
}: {
  segments: Segment[];
  className?: string;
}) {
  const ref = useRef<HTMLParagraphElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.85", "start 0.35"],
  });

  if (reduce) {
    return (
      <p ref={ref} className={className}>
        {segments.map((seg, i) => (
          <span key={i} className={seg.className}>
            {seg.text}{" "}
          </span>
        ))}
      </p>
    );
  }

  const words = segments.flatMap((seg) =>
    seg.text.split(" ").map((word) => ({ word, className: seg.className }))
  );
  const n = words.length;

  return (
    <p ref={ref} className={className}>
      {words.map((w, i) => (
        <Word
          key={i}
          progress={scrollYProgress}
          range={[i / n, Math.min(1, i / n + 1.5 / n)]}
          className={w.className}
        >
          {w.word}
        </Word>
      ))}
    </p>
  );
}
