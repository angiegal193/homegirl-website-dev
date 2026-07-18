"use client";

import { useLayoutEffect, useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import Image from "next/image";
import { bubbleAnims, dotAnims, indicatorAnims } from "./chatAnimations";
import TypingIndicator from "./TypingIndicator";

interface TextBubble {
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
}

// Positions transcribed from Figma frame 377:2 ("CHAT" container, origin
// left:18 top:112 in page space) — local coordinates below are relative to
// that container's own top-left.
const TEXT_BUBBLES: TextBubble[] = [
  {
    key: "loveYouSoMuch",
    side: "right",
    text: "love you so muuccchhhh xxxxxxxx",
    time: "02:30",
    top: 0,
    bubbleLeft: 214.52,
    bubbleWidth: 286.18,
    bubbleHeight: 39.177,
    textLeft: 231.72,
    textWidth: 251.781,
    timeLeft: 452.92,
  },
  {
    key: "hadSuchAFunNight",
    side: "right",
    text: "had such a fun night xx",
    time: "02:30",
    top: 67.84,
    bubbleLeft: 279.49,
    bubbleWidth: 221.204,
    bubbleHeight: 39.177,
    textLeft: 296.69,
    textWidth: 186.805,
    timeLeft: 452.92,
  },
  {
    key: "loveYoouuuuuu",
    side: "left",
    text: "love yoouuuuuu xxxx",
    time: "02:31",
    top: 135.68,
    bubbleLeft: 15.29,
    bubbleWidth: 188.716,
    bubbleHeight: 39.177,
    textLeft: 32.49,
    textWidth: 154.317,
    timeLeft: 17.2,
  },
  {
    key: "letMeKnow",
    side: "left",
    text: "you have to let me know IMMEDIATELY if he texts you! xxx",
    time: "02:31",
    top: 203.53,
    bubbleLeft: 15.29,
    bubbleWidth: 372.655,
    bubbleHeight: 57.332,
    textLeft: 32.49,
    textWidth: 338.256,
    timeLeft: 17.2,
  },
  {
    key: "hommeee",
    side: "right",
    text: "Hommeee xxxxx",
    time: "02:47",
    top: 289.52,
    bubbleLeft: 343.03,
    bubbleWidth: 157.662,
    bubbleHeight: 39.177,
    textLeft: 360.23,
    textWidth: 143.329,
    timeLeft: 452.92,
  },
  {
    key: "kGonnaSlob",
    side: "left",
    text: "k gonna go and slob for the day xx",
    time: "11:17",
    top: 386.03,
    bubbleLeft: 15.29,
    bubbleWidth: 310.546,
    bubbleHeight: 39.177,
    textLeft: 32.49,
    textWidth: 276.147,
    timeLeft: 17.2,
  },
  {
    key: "alsoSendPhotos",
    side: "left",
    text: "also send photos please xxxx",
    time: "11:20",
    top: 453.87,
    bubbleLeft: 15.29,
    bubbleWidth: 261.814,
    bubbleHeight: 39.177,
    textLeft: 32.49,
    textWidth: 227.415,
    timeLeft: 17.2,
  },
];

const INDICATORS = [
  { anim: indicatorAnims.beforeLoveYouSoMuch, dots: [dotAnims.loveYouSoMuchDot1, dotAnims.loveYouSoMuchDot2, dotAnims.loveYouSoMuchDot3] as const, left: 442.7, top: 2.59 },
  { anim: indicatorAnims.beforeHommeee, dots: [dotAnims.hommeeeDot1, dotAnims.hommeeeDot2, dotAnims.hommeeeDot3] as const, left: 442.7, top: 292.11 },
  { anim: indicatorAnims.beforeKGonnaSlob, dots: [dotAnims.kGonnaSlobDot1, dotAnims.kGonnaSlobDot2, dotAnims.kGonnaSlobDot3] as const, left: 15.29, top: 388.62 },
  { anim: indicatorAnims.beforeAlsoSendPhotos, dots: [dotAnims.alsoSendPhotosDot1, dotAnims.alsoSendPhotosDot2, dotAnims.alsoSendPhotosDot3] as const, left: 15.29, top: 456.46 },
];

// TODO: placeholder photo trio for the final bubble's attachment — Figma's
// three "Photo 1 / Image card 2 / Image card 3" slots were placeholders too.
// Swap for the specific shots once confirmed.
const ATTACHMENT_PHOTOS = [
  "/hometime-chat/photo-1.webp",
  "/hometime-chat/photo-2.webp",
  "/hometime-chat/photo-3.webp",
];

const CANVAS_WIDTH = 516;
const CANVAS_HEIGHT = 821;
// Bumps the whole chat canvas up a touch on top of its natural Figma size
// wherever there's room for it; narrow viewports still shrink below this.
const TARGET_SCALE = 1.15;

export default function HometimeChat() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(wrapperRef, { once: true, amount: 0.4 });
  const [scale, setScale] = useState(TARGET_SCALE);

  // The bubble/typing-indicator layout below is transcribed at Figma's
  // fixed desktop pixel coordinates (a 516x821 canvas). Rather than
  // rewriting every position as a percentage, the whole canvas scales
  // to fit the available width so nothing overflows or gets clipped on
  // narrow viewports (e.g. phones) — proportions and animation stay
  // identical, just resized.
  useLayoutEffect(() => {
    const el = wrapperRef.current;
    if (!el) return;
    const update = () => setScale(Math.min(TARGET_SCALE, el.offsetWidth / CANVAS_WIDTH));
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  return (
    <div
      ref={wrapperRef}
      className="relative w-full"
      style={{ maxWidth: CANVAS_WIDTH * TARGET_SCALE, height: CANVAS_HEIGHT * scale }}
    >
    <div
      className="absolute left-0 top-0"
      style={{ width: CANVAS_WIDTH, height: CANVAS_HEIGHT, transform: `scale(${scale})`, transformOrigin: "top left" }}
    >
      {TEXT_BUBBLES.map((b) => {
        const anim = bubbleAnims[b.key];
        return (
          <motion.div
            key={b.key}
            className="absolute overflow-hidden"
            style={{ top: b.top, left: 0, width: 516, height: b.bubbleHeight + 25 }}
            initial={anim.initial}
            animate={isInView ? anim.animate : anim.initial}
            transition={anim.transition}
          >
            <div
              className={`absolute rounded-tl-[17.2px] rounded-tr-[17.2px] ${
                b.side === "right" ? "rounded-bl-[17.2px] rounded-br-[2.87px] bg-[#2d7ff9]" : "rounded-br-[17.2px] rounded-bl-[2.87px] bg-[#3a3a3c]"
              }`}
              style={{ left: b.bubbleLeft, width: b.bubbleWidth, height: b.bubbleHeight }}
            />
            <p
              className="absolute whitespace-pre-wrap text-[14.3px] leading-normal text-white"
              style={{ left: b.textLeft, width: b.textWidth, top: 10.51 }}
            >
              {b.text}
            </p>
            <p
              className="absolute whitespace-nowrap text-[10.5px] text-[#666]"
              style={{ left: b.timeLeft, top: b.bubbleHeight + 4.77 }}
            >
              {b.time}
            </p>
          </motion.div>
        );
      })}

      {(() => {
        const anim = bubbleAnims.photoAttachment;
        return (
          <motion.div
            className="absolute h-[215.949px] w-[516px]"
            style={{ top: 493.05, left: 0 }}
            initial={anim.initial}
            animate={isInView ? anim.animate : anim.initial}
            transition={anim.transition}
          >
            <div className="absolute flex h-[140.446px] w-[109.417px] items-center justify-center" style={{ left: 334.66, top: 3.82 }}>
              <div className="flex-none rotate-4">
                <div className="relative h-[133.774px] w-[100.33px] overflow-hidden rounded-[10.5px]">
                  <Image src={ATTACHMENT_PHOTOS[0]} alt="" fill sizes="101px" className="object-cover" />
                </div>
              </div>
            </div>
            <div className="absolute flex h-[138.841px] w-[107.194px] items-center justify-center" style={{ left: 371.7, top: 17.68 }}>
              <div className="-rotate-3 flex-none">
                <div className="relative h-[133.774px] w-[100.33px] overflow-hidden rounded-[10.5px]">
                  <Image src={ATTACHMENT_PHOTOS[1]} alt="" fill sizes="101px" className="object-cover" />
                </div>
              </div>
            </div>
            <div className="absolute h-[133.774px] w-[100.33px] overflow-hidden rounded-[10.5px]" style={{ left: 328.7, top: 55.42 }}>
              <Image src={ATTACHMENT_PHOTOS[2]} alt="" fill sizes="101px" className="object-cover" />
            </div>
            <p className="absolute whitespace-nowrap text-[10.5px] text-[#666]" style={{ left: 452.92, top: 195.88 }}>
              11:20
            </p>
          </motion.div>
        );
      })()}

      {INDICATORS.map((ind, i) => (
        <TypingIndicator key={i} anim={ind.anim} dots={ind.dots} left={ind.left} top={ind.top} play={isInView} />
      ))}
    </div>
    </div>
  );
}
