"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { useScroll, useMotionValueEvent, AnimatePresence, motion } from "motion/react";
import { List, X, CaretDown } from "@phosphor-icons/react/dist/ssr";
import { clsx } from "clsx";
import { Container } from "../ui/Container";
import { primaryNav } from "@/lib/site";
import Image from "next/image";

export function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 40);
  });

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- close transient menu state on route change
    setMobileOpen(false);
    setOpenDropdown(null);
  }, [pathname]);

  const transparent = isHome && !scrolled;

  const openMenu = (label: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpenDropdown(label);
  };
  const scheduleClose = () => {
    closeTimer.current = setTimeout(() => setOpenDropdown(null), 150);
  };

  return (
    <header
      className={clsx(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        transparent ? "bg-transparent" : "bg-white/95 shadow-sm backdrop-blur-sm"
      )}
    >
      <Container>
        <div className="flex h-[75px] items-center justify-between">
          
          <Link href="/" className="gap-2 shrink-0">
          <Image
             src={
      transparent
        ? "/logo/tripp_logo_horizontal_white.png"
        : "/logo/tripp_logo_horizontal_color.png"
    }
    alt="Tripp Energy and Mobility"
    width={300}
    height={200}
    priority
    className="h-20 w-auto"
          />
          </Link>

          <nav className="hidden items-center gap-1 lg:flex">
            {primaryNav.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.children && openMenu(item.label)}
                onMouseLeave={() => item.children && scheduleClose()}
              >
                <Link
                  href={item.href}
                  className={clsx(
                    "flex items-center gap-1 rounded-full px-3.5 py-2 text-[13.5px] font-medium tracking-wide transition-colors",
                    transparent
                      ? "text-white/90 hover:text-white"
                      : "text-navy/80 hover:text-navy",
                    !transparent && "hover:bg-surface"
                  )}
                >
                  {item.label}
                  {item.children && (
                    <CaretDown
                      weight="bold"
                      className={clsx(
                        "size-3 transition-transform",
                        openDropdown === item.label && "rotate-180"
                      )}
                    />
                  )}
                </Link>

                <AnimatePresence>
                  {item.children && openDropdown === item.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.16 }}
                      className="absolute left-0 top-full pt-2"
                    >
                      <div className="min-w-64 rounded-2xl border border-navy/10 bg-white p-2 shadow-xl">
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="block rounded-xl px-4 py-2.5 transition-colors hover:bg-surface"
                          >
                            <span className="block text-sm font-semibold text-navy">
                              {child.label}
                            </span>
                            {child.description && (
                              <span className="mt-0.5 block text-xs text-muted">
                                {child.description}
                              </span>
                            )}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </nav>

          <div className="hidden lg:block">
            <Link
              href="/contact?type=partnership"
              className={clsx(
                "inline-flex items-center rounded-full px-5 py-2.5 text-sm font-semibold transition-all active:scale-[0.98]",
                transparent
                  ? "border border-white bg-white/10 text-white backdrop-blur-sm hover:bg-white hover:text-navy"
                  : "bg-teal text-white hover:bg-teal-600"
              )}
            >
              Partner With Us
            </Link>
          </div>

          <button
            aria-label="Toggle menu"
            onClick={() => setMobileOpen((v) => !v)}
            className={clsx(
              "flex size-10 items-center justify-center rounded-full lg:hidden",
              transparent ? "text-white" : "text-navy"
            )}
          >
            {mobileOpen ? <X size={24} /> : <List size={24} />}
          </button>
        </div>
      </Container>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden border-t border-navy/10 bg-white lg:hidden"
          >
            <Container className="flex max-h-[75dvh] flex-col gap-1 overflow-y-auto py-4">
              {primaryNav.map((item) => (
                <div key={item.label}>
                  <Link
                    href={item.href}
                    className="block rounded-lg px-3 py-2.5 text-base font-semibold text-navy"
                  >
                    {item.label}
                  </Link>
                  {item.children && (
                    <div className="ml-3 flex flex-col border-l border-navy/10 pl-3">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="rounded-lg px-3 py-2 text-sm text-navy/70"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <Link
                href="/contact?type=partnership"
                className="mt-3 rounded-full bg-teal px-5 py-3 text-center text-sm font-semibold text-white"
              >
                Partner With Us
              </Link>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
