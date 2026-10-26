"use client";

export function CookiePrefsButton({
  className,
  label,
}: {
  className?: string;
  label: string;
}) {
  return (
    <button
      onClick={() => window.dispatchEvent(new Event("open-cookie-prefs"))}
      className={className}
    >
      {label}
    </button>
  );
}
