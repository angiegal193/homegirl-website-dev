"use client";

import Image from "next/image";
import { useEffect } from "react";
import type { CameraRollPhoto } from "@/data/cameraRoll";

interface CameraRollExpandedProps {
  photo: CameraRollPhoto;
  onClose: () => void;
}

/**
 * Matches Figma frame 375:3023 ("EXPANDED PHOTO STATE"): the grid stays
 * visible but dimmed behind the overlay (55% black scrim, no blur) rather
 * than being replaced by a full-viewport blackout — so this is positioned
 * absolute within the CameraRoll shell, not a fixed/portal-style modal.
 * No caption bar — the design was updated to drop it, image now fills
 * the full overlay.
 */
export default function CameraRollExpanded({ photo, onClose }: CameraRollExpandedProps) {
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [onClose]);

  return (
    <div
      className="absolute inset-0 z-50 flex items-center justify-center bg-black/55"
      role="dialog"
      aria-modal="true"
      onClick={onClose}
    >
      <div
        className="relative h-[85%] w-[65%] max-h-[640px] max-w-[800px] overflow-hidden rounded-[32px] bg-[#050505] shadow-[0px_32px_90px_0px_rgba(0,0,0,0.75)]"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute right-6 top-6 z-10 flex h-[42px] w-[42px] items-center justify-center rounded-full bg-black/42 text-white/90 hover:bg-black/60"
        >
          <span aria-hidden className="text-[30px] font-normal leading-none">
            ×
          </span>
        </button>

        <div className="relative h-full w-full">
          <Image
            src={photo.lightboxSrc}
            alt={`Camera roll photo ${photo.position}`}
            fill
            sizes="800px"
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
}
