import { clsx } from "clsx";

/**
 * Stand-in for real photography (network access to stock image CDNs was
 * unavailable at build time). Swap for a real photo per the brand's
 * documentary imagery guidelines before launch.
 */
export function PlaceholderVisual({
  icon,
  tone = "navy",
  className,
}: {
  icon: React.ReactNode;
  tone?: "navy" | "teal" | "deep";
  className?: string;
}) {
  const toneClasses = {
    navy: "from-navy-700 via-navy to-navy-deep",
    teal: "from-teal-400 via-teal to-teal-600",
    deep: "from-navy-800 via-navy-deep to-black",
  }[tone];

  return (
    <div className={clsx("relative overflow-hidden bg-gradient-to-br", toneClasses, className)}>
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "26px 26px",
        }}
      />
      <div
        aria-hidden
        className="absolute -right-16 -top-16 size-64 rounded-full bg-white/10 blur-3xl"
      />
      <div
        aria-hidden
        className="absolute -bottom-20 -left-10 size-72 rounded-full bg-gold/20 blur-3xl"
      />
      <div className="absolute inset-0 flex items-center justify-center text-white/20">
        {icon}
      </div>
    </div>
  );
}
