"use client";

import { useState } from "react";

export type NavTab =
  | "home"
  | "getting-ready"
  | "journey"
  | "bar"
  | "takeaway"
  | "hometime";

interface NavProps {
  active: NavTab;
}

const NAV_ITEMS: { tab: NavTab; label: string; href: string }[] = [
  { tab: "home", label: "Home", href: "#home" },
  { tab: "getting-ready", label: "Getting Ready", href: "#getting-ready" },
  { tab: "journey", label: "Journey", href: "#journey" },
  { tab: "bar", label: "Bar", href: "#bar" },
  { tab: "takeaway", label: "Takeaway", href: "#takeaway" },
  { tab: "hometime", label: "Hometime", href: "#hometime" },
];

/**
 * Figma component 238:2 ("Website Nav Bar / Hover Menu Component"), built
 * from the code-ready markup in frame 377:2. Collapsed MENU trigger reveals
 * the full pill nav on hover/tap; anchors match the build note on 238:2
 * (#getting-ready, #journey, #bar, #takeaway, #hometime).
 */
export default function Nav({ active }: NavProps) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="fixed left-[38px] top-[30px] z-50"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className={`rounded-full border border-white/18 bg-black/42 px-3 py-2 text-[12px] font-medium tracking-[2.16px] text-white/82 transition-opacity ${
          open ? "pointer-events-none opacity-0" : "opacity-100"
        }`}
      >
        MENU
      </button>

      <nav
        className={`absolute left-0 top-0 flex items-start gap-2 overflow-hidden rounded-full border border-white/20 bg-black/44 px-3 py-[9px] shadow-[0px_8px_20px_0px_rgba(0,0,0,0.26)] transition-opacity ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        {NAV_ITEMS.map(({ tab, label, href }) => (
          <a
            key={tab}
            href={href}
            className={`shrink-0 whitespace-nowrap rounded-full px-[9px] py-[5px] text-[13px] tracking-[1.04px] ${
              tab === active
                ? "bg-white/18 font-medium text-white"
                : "font-normal text-white/72"
            }`}
          >
            {label}
          </a>
        ))}
      </nav>
    </div>
  );
}
