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
// that container's own top-left. Used for the desktop/pixel-perfect canvas
// only; the compact mobile layout below renders the same content/animation
// data as a fluid, content-sized bubble list instead.
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
  { key: "beforeLoveYouSoMuch", side: "right" as const, anim: indicatorAnims.beforeLoveYouSoMuch, dots: [dotAnims.loveYouSoMuchDot1, dotAnims.loveYouSoMuchDot2, dotAnims.loveYouSoMuchDot3] as const, left: 442.7, top: 2.59 },
  { key: "beforeHommeee", side: "right" as const, anim: indicatorAnims.beforeHommeee, dots: [dotAnims.hommeeeDot1, dotAnims.hommeeeDot2, dotAnims.hommeeeDot3] as const, left: 442.7, top: 292.11 },
  { key: "beforeKGonnaSlob", side: "left" as const, anim: indicatorAnims.beforeKGonnaSlob, dots: [dotAnims.kGonnaSlobDot1, dotAnims.kGonnaSlobDot2, dotAnims.kGonnaSlobDot3] as const, left: 15.29, top: 388.62 },
  { key: "beforeAlsoSendPhotos", side: "left" as const, anim: indicatorAnims.beforeAlsoSendPhotos, dots: [dotAnims.alsoSendPhotosDot1, dotAnims.alsoSendPhotosDot2, dotAnims.alsoSendPhotosDot3] as const, left: 15.29, top: 456.46 },
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
// Bumps the whole chat canvas up on top of its natural Figma size
// wherever there's room for it; narrow viewports still shrink below this.
const TARGET_SCALE = 1.3;
// Below this container width, bubbles stop being a uniformly-scaled copy
// of the fixed 516px Figma canvas and switch to a fluid, content-sized
// layout instead (see COMPACT_BREAKPOINT usage below).
const COMPACT_BREAKPOINT = 640;

// Ordered timeline for the compact layout: indicators interleaved with the
// bubbles they precede, since compact mode is real document flow rather
// than the desktop canvas's absolute positions.
const COMPACT_TIMELINE = [
  { type: "indicator" as const, item: INDICATORS[0] },
  { type: "bubble" as const, item: TEXT_BUBBLES[0] },
  { type: "bubble" as const, item: TEXT_BUBBLES[1] },
  { type: "bubble" as const, item: TEXT_BUBBLES[2] },
  { type: "bubble" as const, item: TEXT_BUBBLES[3] },
  { type: "indicator" as const, item: INDICATORS[1] },
  { type: "bubble" as const, item: TEXT_BUBBLES[4] },
  { type: "indicator" as const, item: INDICATORS[2] },
  { type: "bubble" as const, item: TEXT_BUBBLES[5] },
  { type: "indicator" as const, item: INDICATORS[3] },
  { type: "bubble" as const, item: TEXT_BUBBLES[6] },
  { type: "photo" as const },
];

export default function HometimeChat() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(wrapperRef, { once: true, amount: 0.4 });
  const [scale, setScale] = useState(TARGET_SCALE);
  const [isCompact, setIsCompact] = useState(false);

  // The desktop bubble/typing-indicator layout is transcribed at Figma's
  // fixed desktop pixel coordinates (a 516x821 canvas), uniformly scaled to
  // fit the available width. Below COMPACT_BREAKPOINT that stops being
  // appropriate — text/padding need to grow independently of the canvas's
  // shrink factor, and bubble widths need to size to their own content
  // rather than a fixed px number — so compact mode renders a completely
  // separate fluid layout further down instead of scaling the canvas.
  useLayoutEffect(() => {
    const el = wrapperRef.current;
    if (!el) return;
    const update = () => {
      const width = el.offsetWidth;
      setScale(Math.min(TARGET_SCALE, width / CANVAS_WIDTH));
      setIsCompact(width < COMPACT_BREAKPOINT);
    };
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  if (isCompact) {
    return (
      <div ref={wrapperRef} className="w-full max-w-[640px]">
        <div className="flex flex-col gap-4 px-1 py-2">
          {COMPACT_TIMELINE.map((entry, i) => {
            if (entry.type === "indicator") {
              const { side, anim, dots } = entry.item;
              return (
                <CompactTypingIndicator
                  key={entry.item.key}
                  side={side}
                  anim={anim}
                  dots={dots}
                  play={isInView}
                />
              );
            }
            if (entry.type === "bubble") {
              const b = entry.item;
              const anim = bubbleAnims[b.key];
              return (
                <motion.div
                  key={b.key}
                  className={`flex ${b.side === "right" ? "justify-end" : "justify-start"}`}
                  initial={anim.initial}
                  animate={isInView ? anim.animate : anim.initial}
                  transition={anim.transition}
                >
                  <div className={`flex max-w-[82%] flex-col ${b.side === "right" ? "items-end" : "items-start"}`}>
                    <div
                      className={`rounded-[26px] px-[26px] py-[16px] text-[21px] leading-snug text-white ${
                        b.side === "right" ? "rounded-br-[5px] bg-[#2d7ff9]" : "rounded-bl-[5px] bg-[#3a3a3c]"
                      }`}
                    >
                      {b.text}
                    </div>
                    <span className="mt-[6px] px-1 text-[16px] text-[#666]">{b.time}</span>
                  </div>
                </motion.div>
              );
            }
            // Photo attachment — final bubble, always right-aligned.
            const anim = bubbleAnims.photoAttachment;
            return (
              <motion.div
                key={`photo-${i}`}
                className="flex justify-end"
                initial={anim.initial}
                animate={isInView ? anim.animate : anim.initial}
                transition={anim.transition}
              >
                <div className="flex flex-col items-end">
                  <div className="relative h-[228px] w-[215px]">
                    <div className="absolute rotate-4" style={{ left: 0, top: 0 }}>
                      <div className="relative h-[150px] w-[150px] overflow-hidden rounded-[16px]">
                        <Image src={ATTACHMENT_PHOTOS[0]} alt="" fill sizes="150px" className="object-cover" />
                      </div>
                    </div>
                    <div className="absolute -rotate-3" style={{ left: 9, top: 21 }}>
                      <div className="relative h-[150px] w-[150px] overflow-hidden rounded-[16px]">
                        <Image src={ATTACHMENT_PHOTOS[1]} alt="" fill sizes="150px" className="object-cover" />
                      </div>
                    </div>
                    <div className="absolute h-[150px] w-[150px] overflow-hidden rounded-[16px]" style={{ left: 65, top: 77 }}>
                      <Image src={ATTACHMENT_PHOTOS[2]} alt="" fill sizes="150px" className="object-cover" />
                    </div>
                  </div>
                  <span className="mt-[6px] px-1 text-[16px] text-[#666]">11:20</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    );
  }

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

        {INDICATORS.map((ind) => (
          <TypingIndicator key={ind.key} anim={ind.anim} dots={ind.dots} left={ind.left} top={ind.top} play={isInView} />
        ))}
      </div>
    </div>
  );
}

interface CompactTypingIndicatorProps {
  side: "left" | "right";
  anim: (typeof INDICATORS)[number]["anim"];
  dots: (typeof INDICATORS)[number]["dots"];
  play: boolean;
}

// 1.5x-scaled version of TypingIndicator's dimensions, laid out with flex
// instead of the desktop version's absolute pixel coordinates.
function CompactTypingIndicator({ side, anim, dots, play }: CompactTypingIndicatorProps) {
  return (
    <div className={`flex ${side === "right" ? "justify-end" : "justify-start"}`}>
      <motion.div
        className="flex h-[51px] items-center gap-[9px] rounded-[26px] bg-[rgba(58,58,60,0.96)] px-[18px] shadow-[0px_4px_12px_0px_rgba(0,0,0,0.24)]"
        initial={anim.initial}
        animate={play ? anim.animate : anim.initial}
        transition={anim.transition}
      >
        {dots.map((dot, i) => (
          <motion.div
            key={i}
            className="size-[9px] rounded-full bg-white/90"
            initial={dot.initial}
            animate={play ? dot.animate : dot.initial}
            transition={dot.transition}
          />
        ))}
      </motion.div>
    </div>
  );
}
