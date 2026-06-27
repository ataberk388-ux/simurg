import { cn } from "@/lib/cn";
import { Reveal } from "./Reveal";

export function SectionTitle({
  eyebrow,
  title,
  subtitle,
  align = "center",
  className,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  align?: "center" | "left";
  className?: string;
}) {
  return (
    <Reveal
      variant="mask"
      className={cn(
        "max-w-2xl",
        align === "center" ? "mx-auto text-center" : "text-left",
        className,
      )}
    >
      {eyebrow && (
        <div
          className={cn(
            "mb-4 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.25em] text-gold-400",
            align === "center" && "justify-center",
          )}
        >
          <span className="h-px w-8 bg-gradient-to-r from-transparent to-gold-400" />
          {eyebrow}
          <span className="h-px w-8 bg-gradient-to-l from-transparent to-gold-400" />
        </div>
      )}
      <h2 className="font-serif text-3xl font-semibold leading-tight text-foreground sm:text-4xl md:text-[2.75rem]">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base leading-relaxed text-foreground/65">
          {subtitle}
        </p>
      )}
    </Reveal>
  );
}
