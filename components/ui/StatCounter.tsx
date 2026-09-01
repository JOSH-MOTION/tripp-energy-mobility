"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, animate, useReducedMotion } from "motion/react";

export function StatCounter({
  value,
  className,
}: {
  value: string;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });
  const reduce = useReducedMotion();

  const match = value.match(/^([\d,.]+)(.*)$/);
  const numeric = match ? parseFloat(match[1].replace(/,/g, "")) : null;
  const suffix = match ? match[2] : "";
  const [display, setDisplay] = useState(reduce || numeric === null ? value : `0${suffix}`);

  useEffect(() => {
    if (!inView || numeric === null || reduce) {
      // eslint-disable-next-line react-hooks/set-state-in-effect -- sync reduced-motion fallback display value
      if (reduce) setDisplay(value);
      return;
    }
    const controls = animate(0, numeric, {
      duration: 1.6,
      ease: [0.16, 1, 0.3, 1],
      onUpdate(latest) {
        const rounded = numeric % 1 !== 0 ? latest.toFixed(1) : Math.round(latest).toLocaleString();
        setDisplay(`${rounded}${suffix}`);
      },
    });
    return () => controls.stop();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView]);

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
}
