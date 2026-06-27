import Image from "next/image";
import { cn } from "@/lib/cn";

/* Gerçek altın Anka logosu (siyah zemin mix-blend-screen ile düşer). */
export function PhoenixLogo({
  className,
  size = 40,
}: {
  className?: string;
  size?: number;
}) {
  return (
    <span
      className={cn("relative inline-block", className)}
      style={{ width: size, height: size }}
    >
      <Image
        src="/brand/phoenix.png"
        alt="Simurg amblemi"
        fill
        sizes={`${size}px`}
        className="object-contain"
        priority
      />
    </span>
  );
}
