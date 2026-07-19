"use client";

import { useLayoutEffect, useRef, useState } from "react";
import { useInView } from "motion/react";
import Nav from "@/components/Nav/Nav";
import PhotoCollage from "@/components/GettingReady/PhotoCollage";
import CutoutPhotos from "@/components/GettingReady/CutoutPhotos";
import GettingReadyChat from "@/components/GettingReady/GettingReadyChat";
import GettingReadyCta from "@/components/GettingReady/GettingReadyCta";

const CANVAS_WIDTH = 1440;
const CANVAS_HEIGHT = 830;

/**
 * Figma frame 391:2. Desktop only per standing instruction — no mobile
 * breakpoint/layout work in this pass, unlike Hometime's chat which got
 * a separate compact layout. Uses the same fixed-canvas +
 * scale-to-fit-on-resize approach as Hometime's desktop render.
 */
export default function GettingReadyPage() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(wrapperRef, { once: true, amount: 0.3 });
  const [scale, setScale] = useState(1);

  useLayoutEffect(() => {
    const el = wrapperRef.current;
    if (!el) return;
    const update = () => setScale(Math.min(1, el.offsetWidth / CANVAS_WIDTH));
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  return (
    <main className="relative min-h-screen overflow-hidden bg-black">
      <Nav active="getting-ready" />

      <div
        ref={wrapperRef}
        className="relative mx-auto w-full"
        style={{ maxWidth: CANVAS_WIDTH, height: CANVAS_HEIGHT * scale }}
      >
        <div
          className="absolute left-0 top-0 overflow-hidden bg-black"
          style={{ width: CANVAS_WIDTH, height: CANVAS_HEIGHT, transform: `scale(${scale})`, transformOrigin: "top left" }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/getting-ready/background.webp"
            alt=""
            className="absolute left-1/2 top-1/2 h-[220%] w-[220%] -translate-x-1/2 -translate-y-1/2 object-cover"
          />

          <PhotoCollage />
          <CutoutPhotos isInView={isInView} />

          <div className="absolute" style={{ left: 1011.82, top: 214.5 }}>
            <GettingReadyChat isInView={isInView} />
          </div>

          <GettingReadyCta isInView={isInView} />
        </div>
      </div>
    </main>
  );
}
