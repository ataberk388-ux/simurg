import { clients } from "@/content/site-content";

/* Sonsuz akan referans şeridi (iki kopya yan yana → kesintisiz döngü). */
export function LogoMarquee() {
  const items = [...clients, ...clients];
  return (
    <div className="group relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
      <div className="flex w-max animate-[marquee_36s_linear_infinite] gap-12 pr-12 group-hover:[animation-play-state:paused] motion-reduce:animate-none">
        {items.map((c, i) => (
          <span
            key={i}
            className="flex shrink-0 items-center whitespace-nowrap font-serif text-lg text-foreground/35 transition-colors hover:text-gold-300/80"
          >
            {c}
          </span>
        ))}
      </div>
    </div>
  );
}
