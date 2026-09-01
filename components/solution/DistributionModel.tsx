"use client";

import { motion, useReducedMotion } from "motion/react";

const segments = [
  { pct: 5, label: "Parents", color: "bg-gold", detail: "School bus fee reduction, direct household saving from the first term of operation" },
  { pct: 10, label: "School Operator", color: "bg-teal", detail: "Institutional profit, commercial return on programme participation with zero upfront capital" },
  { pct: 5, label: "Programme Expenses", color: "bg-navy-700", detail: "Monitoring, carbon credit verification, programme management and reporting" },
  { pct: 80, label: "Programme Financial Pool", color: "bg-navy", detail: "DFI recoverable grant repayment and reinvestment, the engine of programme scale-up" },
];

export function DistributionModel() {
  const reduce = useReducedMotion();
  return (
    <div>
      <div className="flex h-10 w-full overflow-hidden rounded-full border border-navy/10">
        {segments.map((seg, i) => (
          <motion.div
            key={seg.label}
            initial={reduce ? false : { width: 0 }}
            whileInView={{ width: `${seg.pct}%` }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
            className={`${seg.color} flex items-center justify-center`}
            style={reduce ? { width: `${seg.pct}%` } : undefined}
          >
            {seg.pct >= 10 && (
              <span className="text-xs font-bold text-white">{seg.pct}%</span>
            )}
          </motion.div>
        ))}
      </div>

      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
        {segments.map((seg) => (
          <div key={seg.label} className="flex gap-3 rounded-2xl border border-navy/10 p-5">
            <span className={`${seg.color} h-full w-1 shrink-0 rounded-full`} />
            <div>
              <p className="flex items-baseline gap-2">
                <span className="text-2xl font-bold text-navy">{seg.pct}%</span>
                <span className="text-sm font-semibold text-navy">{seg.label}</span>
              </p>
              <p className="mt-1 text-sm text-ink/65">{seg.detail}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
