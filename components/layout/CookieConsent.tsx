"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";

const STORAGE_KEY = "tem-cookie-consent";

export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      // eslint-disable-next-line react-hooks/set-state-in-effect -- one-time read of an external store (localStorage) on mount
      if (!stored) setVisible(true);
    } catch {
      setVisible(true);
    }
  }, []);

  function decide(value: "accepted" | "declined") {
    try {
      window.localStorage.setItem(STORAGE_KEY, value);
    } catch {
      // ignore storage errors, still dismiss
    }
    setVisible(false);
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 40 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-x-4 bottom-4 z-[60] mx-auto max-w-xl rounded-2xl border border-navy/10 bg-white p-5 shadow-2xl sm:inset-x-auto sm:left-6 sm:bottom-6"
          role="dialog"
          aria-label="Cookie consent"
        >
          <p className="text-sm leading-relaxed text-ink">
            We use cookies for essential site function and, with your consent,
            for analytics. Read our{" "}
            <Link href="/contact" className="font-medium text-teal underline underline-offset-2">
              privacy approach
            </Link>
            .
          </p>
          <div className="mt-4 flex gap-3">
            <button
              onClick={() => decide("accepted")}
              className="rounded-full bg-navy px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-navy-800"
            >
              Accept
            </button>
            <button
              onClick={() => decide("declined")}
              className="rounded-full border border-navy/20 px-5 py-2 text-sm font-semibold text-navy transition-colors hover:bg-surface"
            >
              Decline non-essential
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
