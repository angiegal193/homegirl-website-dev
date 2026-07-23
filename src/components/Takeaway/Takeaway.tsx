"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion, useInView, useReducedMotion } from "motion/react";
import Nav from "@/components/Nav/Nav";
import styles from "./Takeaway.module.css";

const WIDTH = 1567;
const HEIGHT = 912;

export default function Takeaway() {
  const viewportRef = useRef<HTMLDivElement>(null);
  const revealRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string } | null>(null);
  const inView = useInView(revealRef, { once: true, amount: 0.2 });
  const reduceMotion = useReducedMotion();
  const shown = inView || reduceMotion;

  useLayoutEffect(() => {
    const element = viewportRef.current;
    if (!element) return;
    const update = () => setScale(Math.max(element.clientWidth / WIDTH, element.clientHeight / HEIGHT));
    update();
    const observer = new ResizeObserver(update);
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!selectedImage) return;
    const close = (event: KeyboardEvent) => event.key === "Escape" && setSelectedImage(null);
    document.addEventListener("keydown", close);
    return () => document.removeEventListener("keydown", close);
  }, [selectedImage]);

  const open = (src: string, alt: string) => setSelectedImage({ src, alt });

  return (
    <main className={styles.page}>
      <Nav active="takeaway" />
      <div ref={viewportRef} className={styles.viewport}>
        <div ref={revealRef} className={styles.canvas} style={{ transform: `translate(-50%, -50%) scale(${scale})` }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className={styles.background} src="/homepage/background.png" alt="" />

          <motion.button className={`${styles.photo} ${styles.leftPhoto}`} type="button" aria-label="Enlarge takeaway counter photo" onClick={() => open("/takeaway/lightbox/takeaway-01.webp", "Friends ordering takeaway")}
            initial={{ opacity: 0, x: -28, y: 14, rotate: -1.2, scale: .96 }} animate={shown ? { opacity: 1, x: 0, y: 0, rotate: [0, .336, 0], scale: 1 } : undefined}
            transition={{ opacity: { duration: .32, delay: .25 }, x: { duration: .42, delay: .25 }, y: { duration: .42, delay: .25 }, scale: { duration: .42, delay: .25 }, rotate: { duration: 8, delay: .8, times: [0, .825, 1], ease: "easeInOut", repeat: 0 } }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/takeaway/Standing Together Photo.svg" alt="" />
          </motion.button>

          <motion.button className={`${styles.photo} ${styles.rightPhoto}`} type="button" aria-label="Enlarge pizza street photo" onClick={() => open("/takeaway/lightbox/takeaway-03.webp", "Friends eating pizza outside")}
            initial={{ opacity: 0, x: 28, y: 16, rotate: -1.2, scale: .96 }} animate={shown ? { opacity: 1, x: 0, y: 0, rotate: [0, .336, 0], scale: 1 } : undefined}
            transition={{ opacity: { duration: .46, delay: 4.2 }, x: { duration: .62, delay: 4.2 }, y: { duration: .62, delay: 4.2 }, scale: { duration: .62, delay: 4.2 }, rotate: { duration: 8, delay: 4.82, times: [0, .825, 1], ease: "easeInOut", repeat: 0 } }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/takeaway/Pizza Street.svg" alt="" />
          </motion.button>

          <motion.button className={styles.cutout} type="button" aria-label="Enlarge pizza cutout photo" onClick={() => open("/takeaway/lightbox/takeaway-02.webp", "Friend eating pizza and chips")}
            animate={reduceMotion ? undefined : { x: [0, -6, 2.7, 0], y: [0, 7, -3.15, 0], rotate: [0, -.35, .1925, 0], scale: [1, 1.004, .998, 1] }}
            transition={{ duration: 6, times: [0, .378, .717, 1], ease: "easeInOut", repeat: 0 }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/takeaway/HOMEGIRL_OUTSIDE_0757.png" alt="" />
          </motion.button>

          <motion.div className={`${styles.message} ${styles.firstMessage}`} initial={{ opacity: 0, x: -28, y: 16, scale: .96 }} animate={shown ? { opacity: 1, x: 0, y: 0, scale: 1 } : undefined} transition={{ duration: .62, delay: 2.28, ease: "easeOut" }}>
            <span>bbq pizza n chips please x</span><small>01:03</small>
          </motion.div>
          <motion.div className={styles.typing} initial={{ opacity: 0, scale: .94 }} animate={shown ? { opacity: [0, 1, 1, 0], scale: [.94, 1, 1, .98] } : undefined} transition={{ duration: 1.2, delay: 1.05, times: [0, .15, .9, 1] }}>
            {[1.13, 1.27, 1.41].map((delay) => <motion.span key={delay} animate={shown ? { y: [0, -4, 0] } : undefined} transition={{ duration: .52, delay, ease: "easeInOut" }} />)}
          </motion.div>
          <motion.div className={`${styles.message} ${styles.secondMessage}`} initial={{ opacity: 0, x: -28, y: 16, scale: .96 }} animate={shown ? { opacity: 1, x: 0, y: 0, scale: 1 } : undefined} transition={{ duration: .62, delay: 3.28, ease: "easeOut" }}>
            <span>lemme know how much it was xx</span><small>01:04</small>
          </motion.div>

          <Link href="/hometime" className={styles.cta} aria-label="Continue to Hometime">
            <motion.img className={styles.ctaText} src="/takeaway/hometime-curved-text.svg" alt="Hometime" initial={{ opacity: 0, y: 22 }} animate={shown ? { opacity: 1, y: 0 } : undefined} transition={{ duration: .55, delay: 2.31, ease: "easeOut" }} />
            <motion.img className={styles.ctaUnderline} src="/takeaway/hometime-underline.svg" alt="" initial={{ opacity: 0, scaleX: 0 }} animate={shown ? { opacity: 1, scaleX: 1 } : undefined} transition={{ duration: .48, delay: 2.47, ease: "easeOut" }} />
            <motion.img className={styles.ctaArrow} src="/takeaway/hometime-arrow.svg" alt="" initial={{ opacity: 0, y: 22 }} animate={shown ? { opacity: 1, y: 0 } : undefined} transition={{ duration: .55, delay: 2.39, ease: "easeOut" }} />
          </Link>
        </div>
      </div>

      <AnimatePresence>{selectedImage && (
        <motion.div className={styles.lightbox} role="dialog" aria-modal="true" aria-label="Enlarged Takeaway photo" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSelectedImage(null)}>
          <motion.div className={styles.lightboxImageWrap} initial={{ opacity: 0, scale: .88, rotate: -1.5 }} animate={{ opacity: 1, scale: 1, rotate: 0 }} exit={{ opacity: 0, scale: .92 }} transition={{ duration: .35, ease: "easeOut" }} onClick={(event) => event.stopPropagation()}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={selectedImage.src} alt={selectedImage.alt} />
            <button type="button" className={styles.lightboxClose} onClick={() => setSelectedImage(null)} aria-label="Close enlarged Takeaway photo">×</button>
          </motion.div>
        </motion.div>
      )}</AnimatePresence>
    </main>
  );
}
