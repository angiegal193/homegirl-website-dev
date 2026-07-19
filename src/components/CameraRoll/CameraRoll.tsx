"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { cameraRollPhotos, type CameraRollPhoto } from "@/data/cameraRoll";
import CameraRollTile from "./CameraRollTile";
import CameraRollExpanded from "./CameraRollExpanded";
import CameraRollStatusBar from "./CameraRollStatusBar";

const TAB_LABELS = ["Library", "For You", "Albums", "Search"] as const;

/**
 * Desktop/landscape camera-roll widget. Figma frame 308:4 — the "app shell"
 * chrome (header, tab bar) is decorative and fixed; only the photo grid
 * scrolls, inside a clipped viewport. Mobile is a separate design, not a
 * breakpoint of this component.
 */
export default function CameraRoll() {
  const [expanded, setExpanded] = useState<CameraRollPhoto | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const viewport = scrollRef.current;
    if (!viewport || reduceMotion) return;

    let cancelled = false;
    const cancel = () => { cancelled = true; };
    viewport.addEventListener("pointerdown", cancel, { once: true });
    viewport.addEventListener("wheel", cancel, { once: true });

    const down = window.setTimeout(() => {
      if (!cancelled) viewport.scrollTo({ top: 82, behavior: "smooth" });
    }, 1100);
    const up = window.setTimeout(() => {
      if (!cancelled) viewport.scrollTo({ top: 0, behavior: "smooth" });
    }, 2050);

    return () => {
      cancelled = true;
      window.clearTimeout(down);
      window.clearTimeout(up);
      viewport.removeEventListener("pointerdown", cancel);
      viewport.removeEventListener("wheel", cancel);
    };
  }, [reduceMotion]);

  return (
    <div className="relative mx-auto w-full max-w-[1220px] overflow-hidden rounded-[36px] bg-neutral-950 shadow-xl">
      {/* Decorative phone-mockup chrome — static, not a live clock */}
      <CameraRollStatusBar />

      {/* Fixed header — stays put while the grid below scrolls */}
      <div className="flex items-end justify-between border-b border-white/5 px-6 py-4">
        <div>
          <h2 className="text-2xl font-bold text-white">Recents</h2>
          <p className="mt-1 text-sm text-white/50">{cameraRollPhotos.length} Photos</p>
        </div>
        <button
          type="button"
          className="text-sm font-medium text-[#0a84ff] hover:opacity-80"
        >
          Select
        </button>
      </div>

      {/* Clipped scroll viewport — only this region scrolls */}
      <div ref={scrollRef} className="h-[484px] overflow-y-auto overflow-x-hidden [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        <div
          className="grid gap-1 p-0"
          style={{
            gridTemplateColumns: "repeat(6, 1fr)",
            gridAutoRows: "200px",
          }}
        >
          {cameraRollPhotos.map((photo) => (
            <CameraRollTile key={photo.position} photo={photo} onSelect={setExpanded} />
          ))}
        </div>
      </div>

      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[62px] left-1/2 z-20 flex -translate-x-1/2 items-center gap-3 whitespace-nowrap rounded-full border border-white/15 bg-black/70 px-5 py-3 text-[12px] font-medium tracking-[0.08em] text-white/90 shadow-lg backdrop-blur-md"
        initial={reduceMotion ? { opacity: .9 } : { opacity: 0, y: 10 }}
        animate={reduceMotion ? { opacity: .9 } : { opacity: [0, 1, 1, 0], y: [10, 0, 0, -5] }}
        transition={reduceMotion ? undefined : { duration: 5.4, times: [0, .12, .76, 1], ease: "easeOut", delay: .35 }}
      >
        <motion.span
          className="text-base leading-none"
          animate={reduceMotion ? undefined : { y: [0, 5, 0] }}
          transition={{ duration: 1.15, ease: "easeInOut", repeat: 2, delay: .8 }}
        >
          ↕
        </motion.span>
        <span>Camera roll scrolls vertically&nbsp; / &nbsp;tap photo to expand</span>
      </motion.div>

      {/* Fixed tab bar */}
      <div className="flex items-center justify-around border-t border-white/5 py-3">
        {TAB_LABELS.map((label) => (
          <span key={label} className="text-xs text-white/50">
            {label}
          </span>
        ))}
      </div>

      {expanded && (
        <CameraRollExpanded photo={expanded} onClose={() => setExpanded(null)} />
      )}
    </div>
  );
}
