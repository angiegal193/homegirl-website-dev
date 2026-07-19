"use client";

import { motion } from "motion/react";
import { bubbleAnims, dotAnims, indicatorAnim } from "./gettingReadyAnimations";

interface Bubble {
  key: keyof typeof bubbleAnims;
  side: "left" | "right";
  text: string;
  time: string;
  top: number;
  bubbleLeft: number;
  bubbleWidth: number;
  bubbleHeight: number;
  textLeft: number;
  textWidth: number;
  timeLeft: number;
  timeTop: number;
}

// Positions transcribed from Figma frame 391:2 ("Chat Bubble Part 1"
// container, origin left:1011.82 top:214.5 in page space) — local
// coordinates below are relative to that container's own top-left.
const BUBBLES: Bubble[] = [
  {
    key: "msg01",
    side: "right",
    text: "hey babe xx On my way! can't wait to see youuu xxx",
    time: "16:34",
    top: 0,
    bubbleLeft: 105.56,
    bubbleWidth: 307.228,
    bubbleHeight: 47.266,
    textLeft: 119.74,
    textWidth: 278.868,
    timeLeft: 373.4,
    timeTop: 51.2,
  },
  {
    key: "msg02",
    side: "left",
    text: "kk samsiees! xx",
    time: "16:35",
    top: 69.84,
    bubbleLeft: 12.6,
    bubbleWidth: 128.799,
    bubbleHeight: 32.298,
    textLeft: 26.78,
    textWidth: 100.44,
    timeLeft: 14.18,
    timeTop: 36.24,
  },
  {
    key: "msg03",
    side: "left",
    text: "urgh i don't know what to wear!",
    time: "16:35",
    top: 124.78,
    bubbleLeft: 12.6,
    bubbleWidth: 207.576,
    bubbleHeight: 31.904,
    textLeft: 26.78,
    textWidth: 207.576,
    timeLeft: 14.18,
    timeTop: 36.24,
  },
  {
    key: "msg04",
    side: "right",
    text: "dw we'll find something xx",
    time: "16:37",
    top: 179.71,
    bubbleLeft: 210.33,
    bubbleWidth: 202.455,
    bubbleHeight: 32.298,
    textLeft: 224.51,
    textWidth: 174.096,
    timeLeft: 373.4,
    timeTop: 36.24,
  },
  {
    key: "msg05",
    side: "right",
    text: "i forgot my curlers can i borrow yours? xx",
    time: "16:40",
    top: 234.64,
    bubbleLeft: 150.07,
    bubbleWidth: 262.719,
    bubbleHeight: 33.874,
    textLeft: 166.22,
    textWidth: 278.868,
    timeLeft: 373.4,
    timeTop: 39.78,
  },
  {
    key: "msg06",
    side: "left",
    text: "of course! xx",
    time: "16:40",
    top: 304.49,
    bubbleLeft: 12.6,
    bubbleWidth: 115.407,
    bubbleHeight: 32.298,
    textLeft: 26.78,
    textWidth: 87.048,
    timeLeft: 14.18,
    timeTop: 36.24,
  },
  {
    key: "msg07",
    side: "right",
    text: "here!!!! xxxx",
    time: "17:32",
    top: 359.42,
    bubbleLeft: 297.38,
    bubbleWidth: 115.407,
    bubbleHeight: 32.298,
    textLeft: 311.56,
    textWidth: 87.048,
    timeLeft: 373.4,
    timeTop: 36.24,
  },
];

// Typing indicator sits at message 02's slot (left:12.6, top:69.84 —
// same top as msg02), matching the Figma choreography where it appears
// just before msg02 fades in.
const INDICATOR = { left: 12.6, top: 69.84 };

const CONTAINER_WIDTH = 418.696;
const CONTAINER_HEIGHT = 420;

interface GettingReadyChatProps {
  isInView: boolean;
}

export default function GettingReadyChat({ isInView }: GettingReadyChatProps) {
  return (
    <div className="relative" style={{ width: CONTAINER_WIDTH, height: CONTAINER_HEIGHT }}>
      {BUBBLES.map((b) => {
        const anim = bubbleAnims[b.key];
        return (
          <motion.div
            key={b.key}
            className="absolute overflow-hidden"
            style={{ top: b.top, left: 0, width: CONTAINER_WIDTH, height: b.bubbleHeight + 25 }}
            initial={anim.initial}
            animate={isInView ? anim.animate : anim.initial}
            transition={anim.transition}
          >
            <div
              className={`absolute rounded-tl-[14.18px] rounded-tr-[14.18px] ${
                b.side === "right" ? "rounded-bl-[14.18px] rounded-br-[2.36px] bg-[#2d7ff9]" : "rounded-br-[14.18px] rounded-bl-[2.36px] bg-[#3a3a3c]"
              }`}
              style={{ left: b.bubbleLeft, width: b.bubbleWidth, height: b.bubbleHeight }}
            />
            <p
              className="absolute whitespace-pre-wrap text-[11.8px] leading-normal text-white"
              style={{ left: b.textLeft, width: b.textWidth, top: 8.67 }}
            >
              {b.text}
            </p>
            <p
              className="absolute whitespace-nowrap text-[8.7px] text-[#666]"
              style={{ left: b.timeLeft, top: b.timeTop }}
            >
              {b.time}
            </p>
          </motion.div>
        );
      })}

      <motion.div
        className="absolute h-[32px] w-[62px] rounded-[16px] bg-[#38383d]"
        style={{ left: INDICATOR.left, top: INDICATOR.top }}
        initial={indicatorAnim.initial}
        animate={isInView ? indicatorAnim.animate : indicatorAnim.initial}
        transition={indicatorAnim.transition}
      >
        {([dotAnims.dot1, dotAnims.dot2, dotAnims.dot3] as const).map((dot, i) => (
          <motion.div
            key={i}
            className="absolute size-[6px] rounded-full bg-white/90"
            style={{ left: 19 + i * 11, top: 13 }}
            initial={dot.initial}
            animate={isInView ? dot.animate : dot.initial}
            transition={dot.transition}
          />
        ))}
      </motion.div>
    </div>
  );
}
