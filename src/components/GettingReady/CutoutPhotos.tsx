"use client";

import { motion } from "motion/react";
import { cutout01Anim, cutout02Anim } from "./gettingReadyAnimations";

interface CutoutPhotosProps {
  isInView: boolean;
}

/**
 * The two loose "polaroid sticker" cutout photos layered on top of the
 * collage — entrance-once reveal with a small settle bounce, same rule
 * as the chat/CTA (repeat stripped from the raw Figma data).
 */
export default function CutoutPhotos({ isInView }: CutoutPhotosProps) {
  return (
    <>
      <motion.div
        className="absolute h-[472px] w-[378px]"
        style={{ left: 0, top: 409.5 }}
        initial={cutout01Anim.initial}
        animate={isInView ? cutout01Anim.animate : cutout01Anim.initial}
        transition={cutout01Anim.transition}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/getting-ready/cutout-01.webp" alt="" className="absolute inset-0 size-full object-cover" />
      </motion.div>

      <motion.div
        className="absolute flex h-[380px] w-[324px] items-center justify-center"
        style={{ left: 766.43, top: -69.85 }}
        initial={cutout02Anim.initial}
        animate={isInView ? cutout02Anim.animate : cutout02Anim.initial}
        transition={cutout02Anim.transition}
      >
        <div className="relative h-[331px] w-[256px] rotate-[13.01deg]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/getting-ready/cutout-02.webp" alt="" className="absolute inset-0 size-full object-cover" />
        </div>
      </motion.div>
    </>
  );
}
