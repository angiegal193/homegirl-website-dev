"use client";

import Image from "next/image";
import { useEffect } from "react";
import type { CameraRollPhoto } from "@/data/cameraRoll";

interface CameraRollExpandedProps {
  photo: CameraRollPhoto;
  onClose: () => void;
}

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
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      onClick={onClose}
    >
      <div
        className="relative flex max-h-[90vh] max-w-[90vw] flex-col overflow-hidden rounded-lg bg-neutral-950 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute right-3 top-3 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-black/50 text-white hover:bg-black/70"
        >
          <span aria-hidden className="text-xl leading-none">
            ×
          </span>
        </button>

        <div className="relative flex-1 overflow-hidden">
          <Image
            src={photo.lightboxSrc}
            alt={photo.caption || `Camera roll photo ${photo.position}`}
            width={1800}
            height={1800}
            sizes="90vw"
            className="max-h-[80vh] w-auto object-contain"
          />
        </div>

        <div className="flex items-center justify-between gap-4 bg-neutral-950/95 px-5 py-3">
          <p className="text-sm text-white/80">
            {photo.caption || " "}
          </p>
          <span className="text-xs text-white/40">{photo.position} / 40</span>
        </div>
      </div>
    </div>
  );
}
