"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useInView } from "motion/react";
import Nav from "@/components/Nav/Nav";
import styles from "./Journey.module.css";

const WIDTH = 1567;
const HEIGHT = 912;

const cards = [
  { key: "dalston", label: "Dalston Junction", x: 38, y: 199, w: 338, h: 342, delay: -0.3, reveal: 1.9, duration: 0.32 },
  { key: "oxford", label: "Oxford Circus", x: 615.48, y: 259.56, w: 338, h: 342, delay: -1.9, reveal: 3.2, duration: 0.35 },
  { key: "soho", label: "Soho", x: 1200.3, y: 21.67, w: 338, h: 342, delay: -3.5, reveal: 5.38, duration: 0.37 },
] as const;

const bubbles = [
  {
    text: "he's so so so checking you out xx eeeekkk",
    time: "19:47",
    side: "right",
    x: 464.47,
    y: 64,
    width: 554,
    bubbleLeft: 143.12,
    bubbleWidth: 394.47,
    bubbleHeight: 42.06,
    delay: 2.35,
  },
  {
    text: "he's actually gorg! i wonder where he's going....",
    time: "19:47",
    side: "left",
    x: 456.47,
    y: 132,
    width: 554,
    bubbleLeft: 16.41,
    bubbleWidth: 373.44,
    bubbleHeight: 44.12,
    delay: 2.9,
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
    delay: 6.05,
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
      <Nav active="journey" />
      <div ref={viewportRef} className={styles.viewport}>
        <div ref={revealRef} className={styles.canvas} style={{ transform: `translate(-50%, -50%) scale(${scale})` }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className={styles.background} src="/homepage/background.png" alt="" />
          <div className={styles.shade} />

          <motion.div className={`${styles.route} ${styles.routeOrange}`}>
            <svg viewBox="0 0 595.397 634.087" preserveAspectRatio="none" aria-hidden="true">
              <motion.path d="M169.672 5.69139C214.172 3.35806 308.472 21.3914 329.672 112.191C356.172 225.691 222.672 429.191 69.1717 472.191C-84.3283 515.191 73.1717 670.691 190.672 617.691C308.172 564.691 213.672 388.191 367.172 409.691C520.672 431.191 536.172 381.191 593.672 400.191" pathLength="1" fill="none" stroke="#EE7623" strokeWidth="11" initial={{ pathLength: 0 }} animate={isInView ? { pathLength: 1 } : undefined} transition={{ duration: 1.3, delay: 1.85, ease: "easeInOut" }} />
            </svg>
          </motion.div>
          <motion.div className={`${styles.route} ${styles.routeRed}`}>
            <svg viewBox="0 0 715 373" preserveAspectRatio="none" aria-hidden="true">
              <motion.path d="M11.1507 306.838C-4.11495 336.676 2.3146 388.729 150.158 358.239C334.962 320.125 277.312 294.25 312.872 266.976C348.432 239.703 345.199 231.66 257.916 170.819C170.632 109.977 397.462 -58.9106 440.565 31.6524C483.668 122.215 269.769 193.197 542.935 142.146C816.1 91.0953 700.8 -9.60792 567.719 11.0222" pathLength="1" fill="none" stroke="#DC241F" strokeWidth="11" initial={{ pathLength: 0 }} animate={isInView ? { pathLength: 1 } : undefined} transition={{ duration: 1.25, delay: 4.1, ease: "easeInOut" }} />
            </svg>
          </motion.div>

          <motion.p className={`${styles.stationLabel} ${styles.dalstonLabel}`} initial={{ opacity: 0, y: 8, scale: .98 }} animate={isInView ? { opacity: 1, y: 0, scale: [.98, 1.02, 1] } : undefined} transition={{ duration: .28, delay: .15, ease: "easeOut" }}>Dalston Junction</motion.p>
          <motion.p className={`${styles.stationLabel} ${styles.oxfordLabel}`} initial={{ opacity: 0, y: 8, scale: .98 }} animate={isInView ? { opacity: 1, y: 0, scale: [.98, 1.02, 1] } : undefined} transition={{ duration: .28, delay: 3.12, ease: "easeOut" }}>Oxford Circus</motion.p>
          <motion.p className={`${styles.stationLabel} ${styles.sohoLabel}`} initial={{ opacity: 0, y: 8, scale: .98 }} animate={isInView ? { opacity: 1, y: 0, scale: [.98, 1.02, 1] } : undefined} transition={{ duration: .28, delay: 5.32, ease: "easeOut" }}>Soho</motion.p>

          <motion.div className={`${styles.stationDot} ${styles.dotDalston}`} initial={{ opacity: 0, scale: .2 }} animate={isInView ? { opacity: 1, scale: [.2, 1.18, 1] } : undefined} transition={{ duration: .34, delay: 1.85, ease: "easeOut" }} />
          <motion.div className={`${styles.stationDot} ${styles.dotOxfordOrange}`} initial={{ opacity: 0, scale: .2 }} animate={isInView ? { opacity: 1, scale: [.2, 1.18, 1] } : undefined} transition={{ duration: .34, delay: 3.17, ease: "easeOut" }} />
          <motion.div className={`${styles.stationDot} ${styles.dotOxfordRed}`} initial={{ opacity: 0, scale: .2 }} animate={isInView ? { opacity: 1, scale: [.2, 1.16, 1] } : undefined} transition={{ duration: .3, delay: 4.1, ease: "easeOut" }} />
          <motion.div className={`${styles.stationDot} ${styles.dotSoho}`} initial={{ opacity: 0, scale: .2 }} animate={isInView ? { opacity: 1, scale: [.2, 1.18, 1] } : undefined} transition={{ duration: .34, delay: 5.37, ease: "easeOut" }} />

          {cards.map((card) => (
            <motion.button
              type="button"
              key={card.key}
              className={styles.card}
              style={{ left: card.x, top: card.y, width: card.w, height: card.h, animationDelay: `${card.delay}s` }}
              aria-label={`Enlarge ${card.label} photo`}
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : undefined}
              transition={{ duration: card.duration, delay: card.reveal, ease: "easeOut" }}
              onClick={() => setSelectedImage({ src: `/journey/${card.key}.webp`, alt: `${card.label} journey photo` })}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={`/journey/${card.key}.webp`} alt="" />
            </motion.button>
          ))}

          {bubbles.map((bubble) => (
            <motion.div
              key={bubble.text}
              className={styles.chat}
              style={{ left: bubble.x, top: bubble.y, width: bubble.width, height: 89 }}
              initial={{ opacity: 0, y: 10, scale: 0.96 }}
              animate={isInView ? { opacity: 1, y: 0, scale: [.95, 1.035, 1] } : undefined}
              transition={{
                opacity: { duration: .3, delay: bubble.delay, ease: "easeOut" },
                y: { duration: .3, delay: bubble.delay, ease: "easeOut" },
                scale: { duration: .3, delay: bubble.delay, ease: "easeOut", times: [0, .47, 1] },
              }}
            >
              <div className={bubble.side === "right" ? styles.bubbleRight : styles.bubbleLeft} style={{ left: bubble.bubbleLeft, width: bubble.bubbleWidth, height: bubble.bubbleHeight }} />
              <p className={styles.message} style={{ left: bubble.bubbleLeft + 18, width: bubble.bubbleWidth - 36 }}>{bubble.text}</p>
              <p className={styles.time} style={{ left: bubble.side === "right" ? 486 : 20, top: bubble.bubbleHeight + 5 }}>{bubble.time}</p>
            </motion.div>
          ))}

          <motion.div className={styles.typing} initial={{ opacity: 0, scale: .92 }} animate={isInView ? { opacity: [0, 1, 1, 0], scale: [.92, 1.04, 1, 1] } : undefined} transition={{ duration: .75, delay: 6.1, times: [0, .2, .76, 1] }}>
            {[6.32, 6.42, 6.52].map((delay) => (
              <motion.span key={delay} initial={{ y: 0 }} animate={isInView ? { y: [0, -4, 0] } : undefined} transition={{ duration: .26, delay, ease: "easeInOut" }} />
            ))}
          </motion.div>

          <motion.div className={styles.ctaBar} initial={{ opacity: 0, y: 24 }} animate={isInView ? { opacity: 1, y: 0 } : undefined} transition={{ duration: .5, delay: 6.35, ease: "easeOut" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/journey/cta-bar.svg" alt="Bar" />
          </motion.div>
          <motion.div className={styles.ctaArrow} initial={{ opacity: 0, y: 24 }} animate={isInView ? { opacity: 1, y: 0 } : undefined} transition={{ duration: .5, delay: 6.35, ease: "easeOut" }}>
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
