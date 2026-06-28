import type { Service } from "@/content/services";

const paths: Record<Service["icon"], React.ReactNode> = {
  ledger: (
    <>
      <path d="M6 3h9l5 5v13a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Z" />
      <path d="M14 3v5h5" />
      <path d="M9 13h6M9 17h6M9 9h2" />
    </>
  ),
  building: (
    <>
      <path d="M4 21V5a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1v16" />
      <path d="M15 9h4a1 1 0 0 1 1 1v11" />
      <path d="M2 21h20" />
      <path d="M8 8h3M8 12h3M8 16h3" />
    </>
  ),
  finance: (
    <>
      <path d="M4 19h16" />
      <path d="M7 16V9M12 16V5M17 16v-4" />
      <path d="M4 9l5-4 4 3 7-5" />
    </>
  ),
  invest: (
    <>
      <circle cx="12" cy="12" r="8" />
      <path d="M12 7v10M9.5 9.5h3.5a1.8 1.8 0 0 1 0 3.5H10a1.8 1.8 0 0 0 0 3.5h3.5" />
    </>
  ),
  globe: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18" />
      <path d="M12 3c2.5 2.5 3.8 5.7 3.8 9s-1.3 6.5-3.8 9c-2.5-2.5-3.8-5.7-3.8-9S9.5 5.5 12 3Z" />
    </>
  ),
  law: (
    <>
      <path d="M12 3v18M8 21h8" />
      <path d="M5 7h14" />
      <path d="M5 7l-2 6a3 3 0 0 0 6 0L7 7M19 7l-2 6a3 3 0 0 0 6 0l-2-6" />
    </>
  ),
  strategy: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 12l5-5" />
      <path d="M12 12l-3 4" />
      <circle cx="12" cy="12" r="1.5" fill="currentColor" stroke="none" />
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
