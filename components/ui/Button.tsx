import Link from "next/link";
import { clsx } from "clsx";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";

type Variant = "primary" | "secondary" | "inverse" | "inverse-outline";

const variantClasses: Record<Variant, string> = {
  primary: "bg-navy text-white hover:bg-navy-800 border border-navy",
  secondary: "bg-white text-teal border border-teal hover:bg-teal hover:text-white",
  inverse: "bg-white text-navy hover:bg-surface border border-white",
  "inverse-outline": "bg-navy/30 text-white border border-white hover:bg-white hover:text-navy backdrop-blur-sm",
};

export function Button({
  href,
  children,
  variant = "primary",
  className,
  showArrow = true,
  ...rest
}: {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  className?: string;
  showArrow?: boolean;
} & React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <Link
      href={href}
      className={clsx(
        "group inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full px-6 py-3 text-sm font-semibold tracking-wide transition-all duration-300 active:scale-[0.98]",
        variantClasses[variant],
        className
      )}
      {...rest}
    >
      {children}
      {showArrow && (
        <ArrowRight
          weight="bold"
          className="size-4 shrink-0 transition-transform duration-300 group-hover:translate-x-0.5"
        />
      )}
    </Link>
  );
}
