import { clsx } from "clsx";
import { publications } from "@/lib/data/research";

export function ResearchTimeline() {
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
        <div className="relative space-y-8 border-l border-navy/15 pl-10">
          {publications.map((pub) => (
            <div key={pub.number} className="relative">
              <span
                className={clsx(
                  "absolute -left-[3.05rem] top-1 flex size-6 items-center justify-center rounded-full text-xs font-bold",
                  pub.status ? "bg-gold text-white" : "bg-navy text-white"
                )}
              >
                {pub.number}
              </span>
              <PubBadge pub={pub} />
            </div>
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
