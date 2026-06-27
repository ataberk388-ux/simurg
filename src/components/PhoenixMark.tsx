/* Header/footer için sade, tek renk Anka amblemi (currentColor). */
export function PhoenixMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      role="img"
      aria-label="Simurg amblemi"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* gövde */}
      <path d="M32 18c-3 4-3 12 0 30 3-18 3-26 0-30Z" fill="currentColor" stroke="none" />
      {/* baş + gaga */}
      <circle cx="32" cy="15" r="3.4" fill="currentColor" stroke="none" />
      <path d="M32 13v6l3-3Z" fill="currentColor" stroke="none" />
      {/* sağ kanat */}
      <path d="M33 22c6-2 12-8 17-6-3 1-5 4-6 7 4-2 8-2 11 1-5 0-8 3-10 7-4-6-9-8-12-9" />
      {/* sol kanat */}
      <path d="M31 22c-6-2-12-8-17-6 3 1 5 4 6 7-4-2-8-2-11 1 5 0 8 3 10 7 4-6 9-8 12-9" />
      {/* kuyruk */}
      <path d="M28 46c1 4 2 8 4 12 2-4 3-8 4-12" />
    </svg>
  );
}
