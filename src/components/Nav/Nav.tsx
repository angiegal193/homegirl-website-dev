"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export type NavTab =
  | "home"
  | "getting-ready"
  | "journey"
  | "bar"
  | "takeaway"
  | "hometime";

interface NavProps {
  active: NavTab;
  expanded?: boolean;
  className?: string;
}

const NAV_ITEMS: { tab: NavTab; label: string; href: string; icon: string }[] = [
  { tab: "home", label: "Home", href: "/", icon: "/nav-icons/home.png" },
  { tab: "getting-ready", label: "Getting Ready", href: "/getting-ready", icon: "/nav-icons/getting-ready.png" },
  { tab: "journey", label: "Journey", href: "/journey", icon: "/nav-icons/journey.png" },
  { tab: "bar", label: "Bar", href: "/bar", icon: "/nav-icons/bar.png" },
  { tab: "takeaway", label: "Takeaway", href: "/takeaway", icon: "/nav-icons/takeaway.png" },
  { tab: "hometime", label: "Hometime", href: "/hometime", icon: "/nav-icons/hometime.png" },
];

/**
 * Figma component 238:2 ("Website Nav Bar / Hover Menu Component"), built
 * from the code-ready markup in frame 377:2. Collapsed MENU trigger reveals
 * the full pill nav on hover/tap. Route links keep the same navigation
 * component usable across every page as the remaining sections are built.
 */
export default function Nav({ active, expanded = false, className = "" }: NavProps) {
  const [open, setOpen] = useState(expanded);
  const rootRef = useRef<HTMLDivElement>(null);

  // Touch devices commonly synthesize a mouseenter right before a tap's
  // click event, so onMouseEnter opening the menu and a click toggling it
  // would immediately close it again on the very tap that opened it. The
  // trigger button is only ever meant to open (it's hidden/non-interactive
  // once open), so this is open-only rather than a toggle — that alone
  // removes the race regardless of event order.
  const openMenu = () => setOpen(true);

  // onMouseLeave never fires on touch, so give touch users an explicit way
  // to close: tap outside the nav, or press Escape.
  useEffect(() => {
    if (!open) return;
    const onPointerDown = (e: PointerEvent) => {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <div
      ref={rootRef}
      className={`fixed left-5 top-5 z-50 sm:left-[38px] sm:top-[30px] ${className}`}
      onMouseEnter={openMenu}
      onMouseLeave={() => {
        if (!expanded) setOpen(false);
      }}
    >
      <button
        type="button"
        onClick={openMenu}
        aria-expanded={open}
        className={`rounded-full border border-white/18 bg-black/42 px-3 py-2 text-[12px] font-medium tracking-[2.16px] text-white/82 transition-opacity ${
          open || expanded ? "pointer-events-none opacity-0" : "opacity-100"
        }`}
      >
        MENU
      </button>

      <nav
        className={`absolute left-0 top-0 grid w-[calc(100vw-40px)] grid-cols-2 items-stretch gap-1 overflow-hidden rounded-[24px] border border-white/20 bg-black/44 p-2 shadow-[0px_8px_20px_0px_rgba(0,0,0,0.26)] backdrop-blur-md transition-opacity sm:flex sm:w-max sm:items-start sm:gap-2 sm:rounded-full sm:px-3 sm:py-[9px] ${
          open || expanded ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        {NAV_ITEMS.map(({ tab, label, href, icon }) => (
          <Link
            key={tab}
            href={href}
            aria-current={tab === active ? "page" : undefined}
            className={`flex min-w-0 items-center gap-2 whitespace-nowrap rounded-full px-2 py-2 text-[12px] tracking-[0.7px] sm:shrink-0 sm:px-[9px] sm:py-[5px] sm:text-[13px] sm:tracking-[1.04px] ${
              tab === active
                ? "bg-white/18 font-medium text-white"
                : "font-normal text-white/72"
            }`}
          >
            <Image src={icon} alt="" width={20} height={20} className="size-[18px] shrink-0 object-contain sm:size-[20px]" />
            {label}
          </Link>
        ))}
      </nav>
    </div>
  );
}
