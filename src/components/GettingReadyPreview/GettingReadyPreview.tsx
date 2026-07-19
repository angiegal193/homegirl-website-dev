"use client";

import { useLayoutEffect, useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import Nav from "@/components/Nav/Nav";
import GettingReadyChat from "@/components/GettingReady/GettingReadyChat";
import {
  ctaArrowAnim,
  ctaCurvedTextAnim,
  cutout01Anim,
  cutout02Anim,
} from "@/components/GettingReady/gettingReadyAnimations";
import styles from "./GettingReadyPreview.module.css";

const WIDTH = 1440;
const HEIGHT = 830;

const cards = [
  { src: "card-01.webp", x: -49, y: 210, w: 321, h: 326, r1: "0.6deg", r2: "-0.33deg", x1: "-8px", x2: "3.6px", y1: "5px", y2: "-2.25px", s1: "1.006", s2: ".998" },
  { src: "card-02.webp", x: 243, y: -36, w: 319, h: 333, r1: "-0.5deg", r2: ".275deg", x1: "6px", x2: "-2.7px", y1: "-7px", y2: "3.15px", s1: "1.004", s2: ".998" },
  { src: "card-03.webp", x: -49, y: -55, w: 338, h: 341, r1: "-0.4deg", r2: ".22deg", x1: "7px", x2: "-3.15px", y1: "6px", y2: "-2.7px", s1: "1.005", s2: ".998" },
  { src: "card-04.webp", x: 185, y: 192, w: 358, h: 362, r1: ".7deg", r2: "-.385deg", x1: "-5px", x2: "2.25px", y1: "-8px", y2: "3.6px", s1: "1.008", s2: ".998" },
  { src: "card-05.webp", x: 508, y: -53, w: 316, h: 320, r1: "-.55deg", r2: ".303deg", x1: "5px", x2: "-2.25px", y1: "5px", y2: "-2.25px", s1: "1.004", s2: ".998" },
  { src: "card-06.webp", x: 352, y: 524, w: 269, h: 271, r1: ".5deg", r2: "-.275deg", x1: "-4px", x2: "1.8px", y1: "-9px", y2: "4.05px", s1: "1.009", s2: ".998" },
  { src: "card-07.webp", x: 503, y: 230, w: 368, h: 371, r1: "-.45deg", r2: ".247deg", x1: "7px", x2: "-3.15px", y1: "-5px", y2: "2.25px", s1: "1.006", s2: ".998" },
  { src: "card-08.webp", x: 591, y: 520, w: 340, h: 344, r1: ".35deg", r2: "-.192deg", x1: "-6px", x2: "2.7px", y1: "7px", y2: "-3.15px", s1: "1.004", s2: ".998" },
] as const;

const props = [
  { src: "eyeshadow.svg", x: -41, y: 194, w: 135 },
  { src: "small-prop.svg", x: 735, y: 215, w: 71 },
  { src: "mascara.svg", x: 819, y: 304, w: 77 },
  { src: "heart-shadow.svg", x: 490, y: 452, w: 60 },
  { src: "lipstick.svg", x: 595, y: 536, w: 54 },
  { src: "wine-glass.svg", x: 872, y: 514, w: 85 },
  { src: "eyelash-curlers.svg", x: 573, y: 748, w: 76 },
] as const;

// Shot 7 uses Shot 5's reveal/settle timing while keeping its own
// left-side entry direction and upright final rotation.
const shot7Anim = {
  initial: cutout01Anim.initial,
  animate: cutout01Anim.animate,
  transition: {
    opacity: cutout02Anim.transition.opacity,
    rotate: cutout02Anim.transition.rotate,
    scaleX: cutout02Anim.transition.scaleX,
    scaleY: cutout02Anim.transition.scaleY,
    x: cutout02Anim.transition.x,
    y: cutout02Anim.transition.y,
  },
};

type CardVars = React.CSSProperties & Record<`--${string}`, string>;

export default function GettingReadyPreview() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const revealRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);
  const isInView = useInView(revealRef, { once: true, amount: 0.25 });

  useLayoutEffect(() => {
    const el = wrapperRef.current;
    if (!el) return;
    const update = () => {
      // Desktop preview uses cover scaling: fill the whole viewport and
      // crop only the minimum centered edge when aspect ratios differ.
      setScale(Math.max(el.clientWidth / WIDTH, el.clientHeight / HEIGHT));
    };
    update();
    const observer = new ResizeObserver(update);
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <main className={styles.page}>
      <Nav active="getting-ready" expanded />
      <div ref={wrapperRef} className={styles.viewport}>
        <div className={styles.canvas} style={{ transform: `translate(-50%, -50%) scale(${scale})` }}>
          {/* Same shared night-lights background used by Home and Hometime. */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className={styles.background} src="/homepage/background.png" alt="" />
          <div className={styles.backgroundShade} />

          {cards.map((card, index) => (
            <div
              key={card.src}
              className={styles.card}
              style={{
                left: card.x,
                top: card.y,
                width: card.w,
                height: card.h,
                animationDelay: `${index * -0.31}s`,
                "--r1": card.r1,
                "--r2": card.r2,
                "--x1": card.x1,
                "--x2": card.x2,
                "--y1": card.y1,
                "--y2": card.y2,
                "--s1": card.s1,
                "--s2": card.s2,
              } as CardVars}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={`/getting-ready-preview/${card.src}`} alt="" />
            </div>
          ))}

          {props.map((prop) => (
            <div key={prop.src} className={styles.prop} style={{ left: prop.x, top: prop.y, width: prop.w }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={`/getting-ready-preview/${prop.src}`} alt="" />
            </div>
          ))}

          <motion.div
            className={styles.cutoutTop}
            initial={cutout02Anim.initial}
            animate={isInView ? cutout02Anim.animate : cutout02Anim.initial}
            transition={cutout02Anim.transition}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/getting-ready-preview/cutout-11.webp" alt="" />
          </motion.div>

          <motion.div
            className={styles.cutoutBottom}
            initial={shot7Anim.initial}
            animate={isInView ? shot7Anim.animate : shot7Anim.initial}
            transition={shot7Anim.transition}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/getting-ready-preview/cutout-08.webp" alt="" />
          </motion.div>

          <div ref={revealRef} className={styles.chat}>
            <GettingReadyChat isInView={isInView} />
          </div>

          <motion.div
            className={styles.ctaText}
            initial={ctaCurvedTextAnim.initial}
            animate={isInView ? ctaCurvedTextAnim.animate : ctaCurvedTextAnim.initial}
            transition={ctaCurvedTextAnim.transition}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/getting-ready/cta-curved-text.svg" alt="Journey" />
          </motion.div>
          <motion.div
            className={styles.ctaArrow}
            initial={ctaArrowAnim.initial}
            animate={isInView ? ctaArrowAnim.animate : ctaArrowAnim.initial}
            transition={ctaArrowAnim.transition}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/getting-ready/cta-arrow.svg" alt="" />
          </motion.div>
        </div>
      </div>
    </main>
  );
}
