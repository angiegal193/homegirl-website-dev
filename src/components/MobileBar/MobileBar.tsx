"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { useState } from "react";
import MobileLightbox, { type MobileLightboxImage } from "@/components/MobileLightbox/MobileLightbox";
import MobileStoryStage from "@/components/MobileStoryStage/MobileStoryStage";
import styles from "./MobileBar.module.css";

const photos = [
  { key: "hug", src: "/bar/Photo Card - Left Friends + Wrap.svg", full: "/bar/lightbox/bar-04.webp", alt: "Friends hugging", className: "hugPhoto", delay: .25 },
  { key: "wine", src: "/bar/thumb/bar-02.webp", full: "/bar/lightbox/bar-02.webp", alt: "Friends with wine glasses", className: "winePhoto", delay: .55 },
  { key: "bar", src: "/bar/Photo Card - Polaroid Friends + Wrap.svg", full: "/bar/lightbox/bar-01.webp", alt: "Friends at the bar", className: "barPhoto", delay: 1.15 },
] as const;

export default function MobileBar() {
  const reduceMotion = useReducedMotion();
  const [selected, setSelected] = useState<MobileLightboxImage | null>(null);

  return (
    <>
      <MobileStoryStage active="bar" label="Bar">
        <motion.img className={styles.newspaperTop} src="/bar/Torn Newspaper Strip - Horizontal.png" alt="" initial={reduceMotion ? false : { opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .45 }} />
        <motion.img className={styles.storyPage} src="/bar/Story Text Page.png" alt="" initial={reduceMotion ? false : { opacity: 0, x: -18 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: .45, delay: .35 }} />
        <motion.img className={styles.scrapRight} src="/bar/Torn Newspaper Scrap - Right.png" alt="" initial={reduceMotion ? false : { opacity: 0, x: 16 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: .45, delay: .7 }} />

        {photos.map((photo, index) => (
          <motion.button key={photo.key} type="button" className={`${styles.photo} ${styles[photo.className]}`} aria-label={`Enlarge ${photo.alt}`} onClick={() => setSelected({ src: photo.full, alt: photo.alt })}
            initial={reduceMotion ? false : { opacity: 0, x: index === 1 ? 18 : -18, y: 12, scale: .96 }} animate={{ opacity: 1, x: reduceMotion ? 0 : [0, index % 2 ? 2.5 : -2.8, 0], y: reduceMotion ? 0 : [0, index % 2 ? -2.5 : 2.4, 0], scale: 1 }}
            transition={{ opacity: { duration: .42, delay: photo.delay }, scale: { duration: .42, delay: photo.delay }, x: { duration: 5, repeat: Infinity, ease: "easeInOut" }, y: { duration: 5, repeat: Infinity, ease: "easeInOut" } }}>
            <img src={photo.src} alt="" />
            {photo.key === "wine" && <><img className={styles.wineWrap} src="/bar/top-right-wrap.png" alt="" /><img className={styles.winePaper} src="/bar/top-right-paper.png" alt="" /></>}
          </motion.button>
        ))}

        <motion.button type="button" className={`${styles.photo} ${styles.mirrorPhoto}`} aria-label="Enlarge mirror selfie" onClick={() => setSelected({ src: "/bar/mirror-selfie.jpg", alt: "Mirror selfie at the bar" })}
          initial={reduceMotion ? false : { opacity: 0, y: 20, scale: .96 }} animate={{ opacity: 1, y: reduceMotion ? 0 : [0, -2.5, 0], scale: 1 }} transition={{ opacity: { delay: .85 }, scale: { delay: .85 }, y: { duration: 5, repeat: Infinity, ease: "easeInOut" } }}>
          <img src="/bar/mirror-selfie.jpg" alt="" /><img className={styles.mirrorWrap} src="/bar/mirror-wrap.png" alt="" />
        </motion.button>

        <motion.img className={styles.handbag} src="/bar/Black Handbag.svg" alt="" animate={reduceMotion ? undefined : { x: [0, 3, 0], y: [0, -3, 0], rotate: [0, .8, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }} />
        <motion.img className={styles.date} src="/bar/Date Text - 19.10.25.png" alt="19.10.25" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: reduceMotion ? 0 : 1.2 }} />

        <motion.button type="button" className={styles.cutout} aria-label="Enlarge friends portrait" onClick={() => setSelected({ src: "/bar/lightbox/bar-03.webp", alt: "Friends dressed for the bar" })}
          initial={reduceMotion ? false : { opacity: 0, y: 24, scale: .96 }} animate={{ opacity: 1, y: reduceMotion ? 0 : [0, -3, 0], scale: 1 }} transition={{ opacity: { duration: .5, delay: 1.35 }, scale: { duration: .5, delay: 1.35 }, y: { duration: 5.6, repeat: Infinity, ease: "easeInOut" } }}>
          <img src="/bar/HOMEGIRL_OUTSIDE_0384 1.png" alt="" />
        </motion.button>

        <motion.div className={`${styles.message} ${styles.question}`} initial={reduceMotion ? false : { opacity: 0, y: 8, scale: .94 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ delay: reduceMotion ? 0 : 2.15 }}><span>Where are youuuu???? xxx</span><small>22:45</small></motion.div>
        <motion.div className={styles.typing} initial={{ opacity: 0 }} animate={reduceMotion ? { opacity: 0 } : { opacity: [0, 1, 1, 0] }} transition={{ duration: .85, delay: 2.85, times: [0, .15, .82, 1] }}>{[0, 1, 2].map((dot) => <motion.span key={dot} animate={{ y: [0, -3, 0] }} transition={{ duration: .35, delay: dot * .1, repeat: 2 }} />)}</motion.div>
        <motion.div className={`${styles.message} ${styles.reply}`} initial={reduceMotion ? false : { opacity: 0, y: 8, scale: .94 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ delay: reduceMotion ? 0 : 3.75 }}><span>bar xx</span><small>22:46</small></motion.div>

        <Link href="/takeaway" className={styles.cta} aria-label="Continue to Takeaway">
          <motion.img className={styles.ctaText} src="/bar/takeaway-curved-text.svg" alt="Takeaway" initial={reduceMotion ? false : { opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: reduceMotion ? 0 : 4.05 }} />
          <motion.img className={styles.underline} src="/bar/takeaway-underline.svg" alt="" initial={reduceMotion ? false : { opacity: 0, scaleX: 0 }} animate={{ opacity: 1, scaleX: 1 }} transition={{ delay: reduceMotion ? 0 : 4.18 }} />
          <motion.img className={styles.arrow} src="/bar/takeaway-arrow.svg" alt="" initial={reduceMotion ? false : { opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: reduceMotion ? 0 : 4.3 }} />
        </Link>
      </MobileStoryStage>
      <MobileLightbox image={selected} onClose={() => setSelected(null)} />
    </>
  );
}
