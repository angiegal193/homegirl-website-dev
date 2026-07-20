"use client";

import { motion } from "motion/react";
import type { DotAnim, IndicatorAnim } from "./chatAnimations";

interface TypingIndicatorProps {
  anim: IndicatorAnim;
  dots: readonly [DotAnim, DotAnim, DotAnim];
  left: number;
  top: number;
  play: boolean;
  side?: "left" | "right";
  sizeScale?: number;
}

const CHAT_CANVAS_WIDTH = 516;

export default function TypingIndicator({
  anim,
  dots,
  left,
  top,
  play,
  side = "left",
  sizeScale = 1,
}: TypingIndicatorProps) {
  const scaledLeft =
    side === "right"
      ? CHAT_CANVAS_WIDTH - (CHAT_CANVAS_WIDTH - left) * sizeScale
      : left * sizeScale;

  return (
    <motion.div
      className="absolute overflow-hidden bg-[rgba(58,58,60,0.96)] shadow-[0px_4px_12px_0px_rgba(0,0,0,0.24)]"
      style={{
        left: scaledLeft,
        top: top * sizeScale,
        width: 58 * sizeScale,
        height: 34 * sizeScale,
        borderRadius: 17 * sizeScale,
      }}
      initial={anim.initial}
      animate={play ? anim.animate : anim.initial}
      transition={anim.transition}
    >
      {dots.map((dot, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-white/90"
          style={{
            left: (15 + i * 12) * sizeScale,
            top: 14 * sizeScale,
            width: 6 * sizeScale,
            height: 6 * sizeScale,
          }}
          initial={dot.initial}
          animate={play ? dot.animate : dot.initial}
          transition={dot.transition}
        />
      ))}
    </motion.div>
  );
}
