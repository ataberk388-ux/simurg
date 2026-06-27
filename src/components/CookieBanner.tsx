"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

const KEY = "simurg-cookie-consent";

export function CookieBanner() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    try {
      if (!localStorage.getItem(KEY)) setShow(true);
    } catch {
      /* localStorage erişilemezse banner gösterme */
    }
  }, []);

  const decide = (value: "accepted" | "rejected") => {
    try {
      localStorage.setItem(KEY, value);
    } catch {
      /* yoksay */
    }
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-[60] p-4">
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-4 rounded-2xl border border-gold-400/20 bg-ink-900/95 p-5 shadow-2xl backdrop-blur-xl sm:flex-row sm:p-6">
        <p className="flex-1 text-sm leading-relaxed text-foreground/70">
          Bu web sitesi, deneyiminizi iyileştirmek için çerezler kullanır.
          Detaylar için{" "}
          <Link href="/cerez-politikasi" className="text-gold-300 underline underline-offset-2 hover:text-gold-200">
            Çerez Politikamızı
          </Link>{" "}
          inceleyebilirsiniz.
        </p>
        <div className="flex w-full gap-3 sm:w-auto">
          <Button variant="outline" className="flex-1 px-5 py-2.5 text-xs" onClick={() => decide("rejected")}>
            Reddet
          </Button>
          <Button className="flex-1 px-5 py-2.5 text-xs" onClick={() => decide("accepted")}>
            Kabul Et
          </Button>
        </div>
      </div>
    </div>
  );
}
