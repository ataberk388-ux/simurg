import type { Service } from "@/content/services";

const paths: Record<Service["icon"], React.ReactNode> = {
  ledger: (
    <>
      <path d="M6 3h9l5 5v13a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Z" />
      <path d="M14 3v5h5" />
      <path d="M9 13h6M9 17h6M9 9h2" />
    </>
  ),
  finance: (
    <>
      <path d="M4 19h16" />
      <path d="M7 16V9M12 16V5M17 16v-4" />
      <path d="M4 9l5-4 4 3 7-5" />
    </>
  ),
  law: (
    <>
      <path d="M12 3v18M8 21h8" />
      <path d="M5 7h14" />
      <path d="M5 7l-2 6a3 3 0 0 0 6 0L7 7M19 7l-2 6a3 3 0 0 0 6 0l-2-6" />
    </>
  ),
  hr: (
    <>
      <circle cx="9" cy="8" r="3" />
      <path d="M3.5 20a5.5 5.5 0 0 1 11 0" />
      <path d="M16 7.5a3 3 0 0 1 0 5.8M16.5 20a5.5 5.5 0 0 0-3-4.9" />
    </>
  ),
};

export function ServiceIcon({
  icon,
  className,
}: {
  icon: Service["icon"];
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {paths[icon]}
    </svg>
  );
}
