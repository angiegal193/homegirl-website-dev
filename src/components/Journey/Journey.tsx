"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useInView } from "motion/react";
import Nav from "@/components/Nav/Nav";
import styles from "./Journey.module.css";

const WIDTH = 1567;
const HEIGHT = 912;

const cards = [
  { key: "dalston", label: "Dalston Junction", x: 38, y: 199, w: 338, h: 342, delay: -0.3 },
  { key: "oxford", label: "Oxford Circus", x: 615.48, y: 259.56, w: 338, h: 342, delay: -1.9 },
  { key: "soho", label: "Soho", x: 1200.3, y: 21.67, w: 338, h: 342, delay: -3.5 },
] as const;

const bubbles = [
  {
    text: "he's so so so checking you out xx eeeekkk",
    time: "19:47",
    side: "right",
    x: 464.47,
    y: 32.78,
    width: 554,
    bubbleLeft: 143.12,
    bubbleWidth: 394.47,
    bubbleHeight: 42.06,
    delay: 0.25,
  },
  {
    text: "he's actually gorg! i wonder where he's going....",
    time: "19:47",
    side: "left",
    x: 456.47,
    y: 100.85,
    width: 554,
    bubbleLeft: 16.41,
    bubbleWidth: 373.44,
    bubbleHeight: 44.12,
    delay: 0.8,
  },
  {
    text: "we gotta go chica, give him your ig, it's the next stop xxx",
    time: "19:47",
    side: "right",
    x: 1009,
    y: 644,
    width: 554,
    bubbleLeft: 137.47,
    bubbleWidth: 400.11,
    bubbleHeight: 61.56,
    delay: 2.35,
  },
] as const;

export default function Journey() {
  const viewportRef = useRef<HTMLDivElement>(null);
  const revealRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string } | null>(null);
  const isInView = useInView(revealRef, { once: true, amount: 0.2 });

  useLayoutEffect(() => {
    const el = viewportRef.current;
    if (!el) return;
    const update = () => setScale(Math.max(el.clientWidth / WIDTH, el.clientHeight / HEIGHT));
    update();
    const observer = new ResizeObserver(update);
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!selectedImage) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelectedImage(null);
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [selectedImage]);

  return (
    <main className={styles.page}>
      <Nav active="journey" expanded />
      <div ref={viewportRef} className={styles.viewport}>
        <div ref={revealRef} className={styles.canvas} style={{ transform: `translate(-50%, -50%) scale(${scale})` }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className={styles.background} src="/homepage/background.png" alt="" />
          <div className={styles.shade} />

          <motion.div className={`${styles.route} ${styles.routeOrange}`} initial={{ opacity: 0, clipPath: "inset(0 100% 0 0)" }} animate={isInView ? { opacity: 1, clipPath: "inset(0 0% 0 0)" } : undefined} transition={{ duration: 1.5, delay: 0.35, ease: "easeInOut" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/journey/route-orange.svg" alt="" />
          </motion.div>
          <motion.div className={`${styles.route} ${styles.routeRed}`} initial={{ opacity: 0, clipPath: "inset(0 100% 0 0)" }} animate={isInView ? { opacity: 1, clipPath: "inset(0 0% 0 0)" } : undefined} transition={{ duration: 1.45, delay: 1.45, ease: "easeInOut" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/journey/route-red.svg" alt="" />
          </motion.div>

          <p className={`${styles.stationLabel} ${styles.dalstonLabel}`}>Dalston Junction</p>
          <p className={`${styles.stationLabel} ${styles.oxfordLabel}`}>Oxford Circus</p>
          <p className={`${styles.stationLabel} ${styles.sohoLabel}`}>Soho</p>

          <motion.div className={`${styles.stationDot} ${styles.dotDalston}`} initial={{ opacity: 0, scale: 0 }} animate={isInView ? { opacity: 1, scale: [0, 1.18, 1] } : undefined} transition={{ duration: 0.5, delay: 0.3 }} />
          <motion.div className={`${styles.stationDot} ${styles.dotOxfordOrange}`} initial={{ opacity: 0, scale: 0 }} animate={isInView ? { opacity: 1, scale: [0, 1.18, 1] } : undefined} transition={{ duration: 0.5, delay: 1.55 }} />
          <motion.div className={`${styles.stationDot} ${styles.dotOxfordRed}`} initial={{ opacity: 0, scale: 0 }} animate={isInView ? { opacity: 1, scale: [0, 1.18, 1] } : undefined} transition={{ duration: 0.5, delay: 1.75 }} />
          <motion.div className={`${styles.stationDot} ${styles.dotSoho}`} initial={{ opacity: 0, scale: 0 }} animate={isInView ? { opacity: 1, scale: [0, 1.18, 1] } : undefined} transition={{ duration: 0.5, delay: 2.65 }} />

          {cards.map((card) => (
            <button
              type="button"
              key={card.key}
              className={styles.card}
              style={{ left: card.x, top: card.y, width: card.w, height: card.h, animationDelay: `${card.delay}s` }}
              aria-label={`Enlarge ${card.label} photo`}
              onClick={() => setSelectedImage({ src: `/journey/${card.key}.webp`, alt: `${card.label} journey photo` })}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={`/journey/${card.key}.webp`} alt="" />
            </button>
          ))}

          {bubbles.map((bubble) => (
            <motion.div
              key={bubble.text}
              className={styles.chat}
              style={{ left: bubble.x, top: bubble.y, width: bubble.width, height: 89 }}
              initial={{ opacity: 0, y: 10, scale: 0.96 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : undefined}
              transition={{ duration: 0.45, delay: bubble.delay, ease: "easeOut" }}
            >
              <div className={bubble.side === "right" ? styles.bubbleRight : styles.bubbleLeft} style={{ left: bubble.bubbleLeft, width: bubble.bubbleWidth, height: bubble.bubbleHeight }} />
              <p className={styles.message} style={{ left: bubble.bubbleLeft + 18, width: bubble.bubbleWidth - 36 }}>{bubble.text}</p>
              <p className={styles.time} style={{ left: bubble.side === "right" ? 486 : 20, top: bubble.bubbleHeight + 5 }}>{bubble.time}</p>
            </motion.div>
          ))}

          <motion.div className={styles.typing} initial={{ opacity: 0, scale: 0.9 }} animate={isInView ? { opacity: [0, 1, 1, 0], scale: [0.9, 1, 1, 1] } : undefined} transition={{ duration: 1.25, delay: 1.15, times: [0, 0.15, 0.72, 1] }}>
            <span /><span /><span />
          </motion.div>

          <motion.div className={styles.ctaBar} initial={{ opacity: 0, x: 26 }} animate={isInView ? { opacity: 1, x: 0 } : undefined} transition={{ duration: 0.7, delay: 2.8, ease: "easeOut" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/journey/cta-bar.svg" alt="Bar" />
          </motion.div>
          <motion.div className={styles.ctaArrow} initial={{ opacity: 0, x: -20 }} animate={isInView ? { opacity: 1, x: 0 } : undefined} transition={{ duration: 0.65, delay: 3.05, ease: "easeOut" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/journey/cta-arrow.svg" alt="" />
          </motion.div>
        </div>
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div className={styles.lightbox} role="dialog" aria-modal="true" aria-label="Enlarged Journey photo" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSelectedImage(null)}>
            <motion.div className={styles.lightboxImageWrap} initial={{ opacity: 0, scale: 0.88, rotate: -1.5 }} animate={{ opacity: 1, scale: 1, rotate: 0 }} exit={{ opacity: 0, scale: 0.92 }} transition={{ duration: 0.35, ease: "easeOut" }} onClick={(event) => event.stopPropagation()}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={selectedImage.src} alt={selectedImage.alt} />
              <button type="button" className={styles.lightboxClose} onClick={() => setSelectedImage(null)} aria-label="Close enlarged Journey photo">×</button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
