"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion, useInView, useReducedMotion } from "motion/react";
import Nav from "@/components/Nav/Nav";
import styles from "./Bar.module.css";

const WIDTH = 1440;
const HEIGHT = 810;

const photos = [
  { key: "left", label: "friends hugging", thumb: "/bar/Photo Card - Left Friends + Wrap.svg", full: "/bar/lightbox/bar-04.webp", className: "leftCard" },
  { key: "polaroid", label: "friends at the bar", thumb: "/bar/Photo Card - Polaroid Friends + Wrap.svg", full: "/bar/lightbox/bar-01.webp", className: "polaroidCard" },
  { key: "top", label: "friends holding wine glasses", thumb: "/bar/thumb/bar-02.webp", full: "/bar/lightbox/bar-02.webp", className: "topCard" },
] as const;

export default function Bar() {
  const viewportRef = useRef<HTMLDivElement>(null);
  const revealRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string } | null>(null);
  const isInView = useInView(revealRef, { once: true, amount: 0.2 });
  const reduceMotion = useReducedMotion();

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
    const onKeyDown = (event: KeyboardEvent) => event.key === "Escape" && setSelectedImage(null);
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [selectedImage]);

  const shown = isInView || reduceMotion;

  return (
    <main className={styles.page}>
      <Nav active="bar" />
      <div ref={viewportRef} className={styles.viewport}>
        <div ref={revealRef} className={styles.canvas} style={{ transform: `translate(-50%, -50%) scale(${scale})` }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className={styles.background} src="/homepage/background.png" alt="" />

          <motion.div
            className={styles.collage}
            animate={reduceMotion ? undefined : { x: [0, 4, -1.8, 0], y: [0, 3, -1.35, 0], rotate: [0, .15, -.0825, 0], scale: [1, 1.003, 1, 1] }}
            transition={{ duration: 4.5, times: [0, .222, .711, 1], ease: "easeInOut", repeat: Infinity }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className={styles.newspaperTop} src="/bar/Torn Newspaper Strip - Horizontal.png" alt="" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className={styles.paperLeft} src="/bar/Torn Text Fragment.png" alt="" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className={styles.scrapLeft} src="/bar/Torn Newspaper Scrap - Left.png" alt="" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className={styles.scrapRight} src="/bar/Torn Newspaper Scrap - Right.png" alt="" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className={styles.storyPage} src="/bar/Story Text Page.png" alt="" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className={styles.notes} src="/bar/Handwritten Notes - Black.png" alt="" />

            {photos.map((photo) => (
              <button key={photo.key} type="button" className={`${styles.photo} ${styles[photo.className]}`} aria-label={`Enlarge ${photo.label} photo`} onClick={() => setSelectedImage({ src: photo.full, alt: photo.label })}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={photo.thumb} alt="" />
                {photo.key === "top" && (
                  <>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img className={styles.topWrap} src="/bar/top-right-wrap.png" alt="" />
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img className={styles.topPaper} src="/bar/top-right-paper.png" alt="" />
                  </>
                )}
              </button>
            ))}

            <button type="button" className={`${styles.photo} ${styles.mirrorCard}`} aria-label="Enlarge mirror selfie photo" onClick={() => setSelectedImage({ src: "/bar/mirror-selfie.jpg", alt: "Mirror selfie at the bar" })}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img className={styles.mirrorPhoto} src="/bar/mirror-selfie.jpg" alt="" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img className={styles.mirrorWrap} src="/bar/mirror-wrap.png" alt="" />
            </button>

            {/* Props deliberately remain non-interactive. */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className={styles.martini} src="/bar/Martini Glass.svg" alt="" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className={styles.mojito} src="/bar/Mojito Cocktail.svg" alt="" />
          </motion.div>

          <motion.div className={styles.handbag} animate={reduceMotion ? undefined : { x: [0, 5, -2.25, 0], y: [0, -4, 1.8, 0], rotate: [0, .25, -.1375, 0], scale: [1, 1.008, 1, 1] }} transition={{ duration: 4.5, times: [0, .222, .711, 1], ease: "easeInOut", repeat: Infinity }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/bar/Black Handbag.svg" alt="" />
          </motion.div>

          <button type="button" className={styles.cutout} aria-label="Enlarge friends portrait" onClick={() => setSelectedImage({ src: "/bar/lightbox/bar-03.webp", alt: "Friends dressed for the bar" })}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/bar/HOMEGIRL_OUTSIDE_0384 1.png" alt="" />
          </button>

          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className={styles.date} src="/bar/Date Text - 19.10.25.png" alt="19.10.25" />

          <motion.div className={`${styles.message} ${styles.question}`} initial={{ opacity: 0, y: 14, scale: .94 }} animate={shown ? { opacity: 1, y: 0, scale: [.94, 1.045, 1] } : undefined} transition={{ duration: .38, delay: .35, ease: "easeOut" }}>
            <span>Where are youuuu???? xxx</span><small>22:45</small>
          </motion.div>

          <motion.div className={styles.typing} initial={{ opacity: 0, scale: .92 }} animate={shown ? { opacity: [0, 1, 1, 0], scale: [.92, 1.04, 1, 1] } : undefined} transition={{ duration: .85, delay: 1.35, times: [0, .165, .86, 1] }}>
            {[1.57, 1.67, 1.77].map((delay) => <motion.span key={delay} animate={shown ? { y: [0, -4, 0] } : undefined} transition={{ duration: .26, delay, ease: "easeInOut" }} />)}
          </motion.div>

          <motion.div className={`${styles.message} ${styles.reply}`} initial={{ opacity: 0, y: 12, scale: .94 }} animate={shown ? { opacity: 1, y: 0, scale: [.94, 1.045, 1] } : undefined} transition={{ duration: .36, delay: 2.28, ease: "easeOut" }}>
            <span>bar xx</span><small>22:46</small>
          </motion.div>

          <Link href="/takeaway" className={styles.cta} aria-label="Continue to Takeaway">
            <motion.span initial={{ opacity: 0, y: 22 }} animate={shown ? { opacity: 1, y: 0 } : undefined} transition={{ duration: .55, delay: 2.23, ease: "easeOut" }}>Takeaway</motion.span>
            <motion.img src="/bar/takeaway-arrow.svg" alt="" initial={{ opacity: 0, y: 22 }} animate={shown ? { opacity: 1, y: 0 } : undefined} transition={{ duration: .55, delay: 2.47, ease: "easeOut" }} />
          </Link>
        </div>
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div className={styles.lightbox} role="dialog" aria-modal="true" aria-label="Enlarged Bar photo" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSelectedImage(null)}>
            <motion.div className={styles.lightboxImageWrap} initial={{ opacity: 0, scale: .88, rotate: -1.5 }} animate={{ opacity: 1, scale: 1, rotate: 0 }} exit={{ opacity: 0, scale: .92 }} transition={{ duration: .35, ease: "easeOut" }} onClick={(event) => event.stopPropagation()}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={selectedImage.src} alt={selectedImage.alt} />
              <button type="button" className={styles.lightboxClose} onClick={() => setSelectedImage(null)} aria-label="Close enlarged Bar photo">×</button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
