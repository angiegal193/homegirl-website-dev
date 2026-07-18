"use client";

import { useState } from "react";
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
      <div className="h-[484px] overflow-y-auto overflow-x-hidden [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
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
