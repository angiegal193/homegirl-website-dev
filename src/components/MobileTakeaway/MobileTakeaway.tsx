"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { useState } from "react";
import MobileLightbox, { type MobileLightboxImage } from "@/components/MobileLightbox/MobileLightbox";
import MobileStoryStage from "@/components/MobileStoryStage/MobileStoryStage";
import styles from "./MobileTakeaway.module.css";

export default function MobileTakeaway() {
  const reduceMotion = useReducedMotion();
  const [selected, setSelected] = useState<MobileLightboxImage | null>(null);

  return (
    <>
      <MobileStoryStage active="takeaway" label="Takeaway">
        <motion.button type="button" className={`${styles.photo} ${styles.standing}`} aria-label="Enlarge friends ordering takeaway" onClick={() => setSelected({ src: "/takeaway/lightbox/takeaway-01.webp", alt: "Friends ordering takeaway" })} initial={reduceMotion ? false : { opacity: 0, x: -18, y: 10, scale: .96 }} animate={{ opacity: 1, x: reduceMotion ? 0 : [0, -2.5, 0], y: reduceMotion ? 0 : [0, 2.5, 0], scale: 1 }} transition={{ opacity: { duration: .42, delay: .25 }, scale: { duration: .42, delay: .25 }, x: { duration: 6, repeat: 0, ease: "easeInOut" }, y: { duration: 6, repeat: 0, ease: "easeInOut" } }}><img src="/takeaway/Standing Together Photo.svg" alt="" /></motion.button>

        <motion.button type="button" className={`${styles.photo} ${styles.pizza}`} aria-label="Enlarge pizza street photo" onClick={() => setSelected({ src: "/takeaway/lightbox/takeaway-03.webp", alt: "Friends eating pizza outside" })} initial={reduceMotion ? false : { opacity: 0, x: 18, y: 12, scale: .96 }} animate={{ opacity: 1, x: reduceMotion ? 0 : [0, 2.5, 0], y: reduceMotion ? 0 : [0, -2.5, 0], scale: 1 }} transition={{ opacity: { duration: .5, delay: reduceMotion ? 0 : 4.2 }, scale: { duration: .5, delay: reduceMotion ? 0 : 4.2 }, x: { duration: 6, repeat: 0, ease: "easeInOut" }, y: { duration: 6, repeat: 0, ease: "easeInOut" } }}><img src="/takeaway/Pizza Street.svg" alt="" /></motion.button>

        <motion.div className={styles.typing} initial={{ opacity: 0 }} animate={reduceMotion ? { opacity: 0 } : { opacity: [0, 1, 1, 0] }} transition={{ duration: 1.2, delay: 1.05, times: [0, .15, .88, 1] }}>{[0,1,2].map((dot) => <motion.span key={dot} animate={{ y: [0, -3, 0] }} transition={{ duration: .4, delay: dot * .1, repeat: 2 }} />)}</motion.div>
        <motion.div className={`${styles.message} ${styles.first}`} initial={reduceMotion ? false : { opacity: 0, x: -16, y: 8, scale: .95 }} animate={{ opacity: 1, x: 0, y: 0, scale: 1 }} transition={{ delay: reduceMotion ? 0 : 2.28, duration: .45 }}><span>bbq pizza n chips please x</span><small>01:03</small></motion.div>
        <motion.div className={`${styles.message} ${styles.second}`} initial={reduceMotion ? false : { opacity: 0, x: 16, y: 8, scale: .95 }} animate={{ opacity: 1, x: 0, y: 0, scale: 1 }} transition={{ delay: reduceMotion ? 0 : 3.28, duration: .45 }}><span>lemme know how much it was xx</span><small>01:04</small></motion.div>

        <motion.button type="button" className={styles.cutout} aria-label="Enlarge pizza cutout photo" onClick={() => setSelected({ src: "/takeaway/lightbox/takeaway-02.webp", alt: "Friend eating pizza and chips" })} initial={reduceMotion ? false : { opacity: 0, y: 24, scale: .96 }} animate={{ opacity: 1, y: reduceMotion ? 0 : [0, -3, 0], scale: 1 }} transition={{ opacity: { delay: .8, duration: .5 }, scale: { delay: .8, duration: .5 }, y: { duration: 6, repeat: 0, ease: "easeInOut" } }}><img src="/takeaway/HOMEGIRL_OUTSIDE_0757.png" alt="" /></motion.button>

        <Link href="/hometime" className={styles.cta} aria-label="Continue to Hometime">
          <motion.img className={styles.ctaText} src="/takeaway/hometime-curved-text.svg" alt="Hometime" initial={reduceMotion ? false : { opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: reduceMotion ? 0 : 5.25 }} />
          <motion.img className={styles.underline} src="/takeaway/hometime-underline.svg" alt="" initial={reduceMotion ? false : { opacity: 0, scaleX: 0 }} animate={{ opacity: 1, scaleX: 1 }} transition={{ delay: reduceMotion ? 0 : 5.4 }} />
          <motion.img className={styles.arrow} src="/takeaway/hometime-arrow.svg" alt="" initial={reduceMotion ? false : { opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: reduceMotion ? 0 : 5.52 }} />
        </Link>
      </MobileStoryStage>
      <MobileLightbox image={selected} onClose={() => setSelected(null)} />
    </>
  );
}
