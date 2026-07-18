"use client";

import { motion } from "motion/react";
import type { DotAnim, IndicatorAnim } from "./chatAnimations";

interface TypingIndicatorProps {
  anim: IndicatorAnim;
  dots: readonly [DotAnim, DotAnim, DotAnim];
  left: number;
  top: number;
  play: boolean;
}

export default function TypingIndicator({ anim, dots, left, top, play }: TypingIndicatorProps) {
  return (
    <motion.div
      className="absolute h-[34px] w-[58px] overflow-hidden rounded-[17px] bg-[rgba(58,58,60,0.96)] shadow-[0px_4px_12px_0px_rgba(0,0,0,0.24)]"
      style={{ left, top }}
      initial={anim.initial}
      animate={play ? anim.animate : anim.initial}
      transition={anim.transition}
    >
      {dots.map((dot, i) => (
        <motion.div
          key={i}
          className="absolute size-[6px] rounded-full bg-white/90"
          style={{ left: 15 + i * 12, top: 14 }}
          initial={dot.initial}
          animate={play ? dot.animate : dot.initial}
          transition={dot.transition}
        />
      ))}
    </motion.div>
  );
}
