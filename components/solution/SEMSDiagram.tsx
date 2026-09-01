"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { SunHorizon, BatteryCharging, CaretRight, ChalkboardTeacher, Bus, Lightning } from "@phosphor-icons/react/dist/ssr";
import { clsx } from "clsx";

const layers = [
  {
    id: 1,
    name: "School Electricity",
    subtitle: "Always First",
    icon: ChalkboardTeacher,
    accent: "bg-teal text-white",
    body: "Solar electricity powers the school, classrooms, laboratories, ICT suites, lighting, and HVAC, as the unconditional first priority. The school never loses electricity to serve the bus or the charging station. Layer 1 is protected at all times, in all seasons.",
  },
  {
    id: 2,
    name: "Electric Bus Charging",
    subtitle: "Second Priority",
    icon: Bus,
    accent: "bg-teal-600 text-white",
    body: "When Layer 1 school electricity is fully served and solar generation exceeds school demand, the SEMS activates bus charging, typically during the midday solar surplus window between 9:00 AM and 1:00 PM when buses are parked on site between school runs.",
  },
  {
    id: 3,
    name: "Public EV Charging",
    subtitle: "Third Priority, Revenue Generating",
    icon: Lightning,
    accent: "bg-gold text-white",
    body: "When both Layer 1 and Layer 2 are fully served, remaining solar surplus activates public EV charging stations at the school perimeter. Revenue: 70% to the SPARC+CM programme financial pool and 30% to the school operator as permanent institutional income.",
  },
];

export function SEMSDiagram() {
  const [active, setActive] = useState(1);

  return (
    <div>
      <div className="flex items-center justify-center gap-3 pb-10 text-navy/60 sm:gap-5">
        <div className="flex flex-col items-center gap-1.5">
          <SunHorizon weight="fill" className="size-7 text-gold" />
          <span className="text-[11px] font-medium">Solar Array</span>
        </div>
        <CaretRight weight="bold" className="size-4 shrink-0" />
        <div className="flex flex-col items-center gap-1.5">
          <BatteryCharging weight="fill" className="size-7 text-teal" />
          <span className="text-[11px] font-medium">Inverter + Storage</span>
        </div>
        <CaretRight weight="bold" className="size-4 shrink-0" />
        <span className="text-[11px] font-medium text-navy/40">SEMS priority sequence ↓</span>
      </div>

      <div className="grid grid-cols-1 gap-3">
        {layers.map((layer) => {
          const Icon = layer.icon;
          const isActive = active === layer.id;
          return (
            <button
              key={layer.id}
              onClick={() => setActive(layer.id)}
              onMouseEnter={() => setActive(layer.id)}
              className={clsx(
                "relative w-full rounded-2xl border p-5 text-left transition-colors sm:p-6",
                isActive ? "border-transparent" : "border-navy/10 hover:border-navy/20"
              )}
            >
              {isActive && (
                <motion.div
                  layoutId="sems-active-bg"
                  className={clsx("absolute inset-0 rounded-2xl", layer.accent)}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                />
              )}
              <div className="relative flex items-start gap-4">
                <div
                  className={clsx(
                    "flex size-11 shrink-0 items-center justify-center rounded-xl",
                    isActive ? "bg-white/20" : "bg-surface"
                  )}
                >
                  <Icon
                    weight="fill"
                    className={clsx("size-5.5", isActive ? "text-white" : "text-navy/50")}
                  />
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-baseline gap-x-2">
                    <span
                      className={clsx(
                        "text-xs font-semibold uppercase tracking-wide",
                        isActive ? "text-white/70" : "text-muted"
                      )}
                    >
                      Layer {layer.id}
                    </span>
                    <span
                      className={clsx(
                        "text-xs font-medium",
                        isActive ? "text-white/70" : "text-teal"
                      )}
                    >
                      {layer.subtitle}
                    </span>
                  </div>
                  <h3
                    className={clsx(
                      "mt-1 text-lg font-semibold",
                      isActive ? "text-white" : "text-navy"
                    )}
                  >
                    {layer.name}
                  </h3>
                  <p
                    className={clsx(
                      "mt-2 text-sm leading-relaxed",
                      isActive ? "text-white/85" : "text-ink/60"
                    )}
                  >
                    {layer.body}
                  </p>
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
