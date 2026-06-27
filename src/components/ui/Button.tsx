import Link from "next/link";
import { cn } from "@/lib/cn";

type Variant = "primary" | "outline" | "ghost";

const base =
  "group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full px-7 py-3 text-sm font-medium tracking-wide transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-ink-800";

const variants: Record<Variant, string> = {
  primary:
    "bg-gradient-to-r from-gold-600 via-gold-400 to-gold-300 text-ink-900 shadow-[0_8px_30px_-8px_rgba(212,175,55,0.55)] hover:shadow-[0_12px_40px_-6px_rgba(212,175,55,0.7)] hover:-translate-y-0.5",
  outline:
    "border border-gold-400/40 text-gold-200 hover:border-gold-400 hover:bg-gold-400/10 hover:-translate-y-0.5",
  ghost: "text-gold-200 hover:text-gold-300",
};

type Props = {
  href?: string;
  variant?: Variant;
  className?: string;
  children: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

function Shine() {
  return (
    <span className="pointer-events-none absolute inset-0 -translate-x-[150%] skew-x-[-20deg] bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-[150%]" />
  );
}

export function Button({
  href,
  variant = "primary",
  className,
  children,
  ...rest
}: Props) {
  const classes = cn(base, variants[variant], className);
  const inner = (
    <>
      {variant === "primary" && <Shine />}
      <span className="relative z-10 inline-flex items-center gap-2">
        {children}
      </span>
    </>
  );

  if (href) {
    const external =
      href.startsWith("http") ||
      href.startsWith("tel:") ||
      href.startsWith("mailto:");
    if (external) {
      return (
        <a
          href={href}
          className={classes}
          target={href.startsWith("http") ? "_blank" : undefined}
          rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
        >
          {inner}
        </a>
      );
    }
    return (
      <Link href={href} className={classes}>
        {inner}
      </Link>
    );
  }
  return (
    <button className={classes} {...rest}>
      {inner}
    </button>
  );
}
