"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { useState } from "react";
import MobileLightbox, { type MobileLightboxImage } from "@/components/MobileLightbox/MobileLightbox";
import MobileStoryStage from "@/components/MobileStoryStage/MobileStoryStage";
import styles from "./MobileJourney.module.css";

const photos = [
  { key: "dalston", label: "Dalston Junction", left: 173, top: 27, width: 143, height: 145, rotate: 10, delay: 1.9 },
  { key: "oxford", label: "Oxford Circus", left: 115, top: 295, width: 180, height: 181, rotate: 27, delay: 3.2 },
  { key: "soho", label: "Soho", left: 145, top: 545, width: 152, height: 153, rotate: 13, delay: 5.4 },
] as const;

export default function MobileJourney() {
  const reduceMotion = useReducedMotion();
  const [selected, setSelected] = useState<MobileLightboxImage | null>(null);
  return (
    <>
      <MobileStoryStage active="journey" label="Journey">
        <svg className={styles.orangeRoute} viewBox="0 0 595.397 634.087" preserveAspectRatio="none" aria-hidden="true"><motion.path d="M169.672 5.69139C214.172 3.35806 308.472 21.3914 329.672 112.191C356.172 225.691 222.672 429.191 69.1717 472.191C-84.3283 515.191 73.1717 670.691 190.672 617.691C308.172 564.691 213.672 388.191 367.172 409.691C520.672 431.191 536.172 381.191 593.672 400.191" fill="none" stroke="#ee7623" strokeWidth="11" pathLength="1" initial={{ pathLength: reduceMotion ? 1 : 0 }} animate={{ pathLength: 1 }} transition={{ duration: reduceMotion ? 0 : 1.3, delay: reduceMotion ? 0 : 1.85, ease: "easeInOut" }} /></svg>
        <div className={styles.redRouteWrap}><svg viewBox="0 0 715 373" preserveAspectRatio="none" aria-hidden="true"><motion.path d="M11.1507 306.838C-4.11495 336.676 2.3146 388.729 150.158 358.239C334.962 320.125 277.312 294.25 312.872 266.976C348.432 239.703 345.199 231.66 257.916 170.819C170.632 109.977 397.462 -58.9106 440.565 31.6524C483.668 122.215 269.769 193.197 542.935 142.146C816.1 91.0953 700.8 -9.60792 567.719 11.0222" fill="none" stroke="#dc241f" strokeWidth="11" pathLength="1" initial={{ pathLength: reduceMotion ? 1 : 0 }} animate={{ pathLength: 1 }} transition={{ duration: reduceMotion ? 0 : 1.25, delay: reduceMotion ? 0 : 4.1, ease: "easeInOut" }} /></svg></div>

        <motion.p className={`${styles.label} ${styles.dalstonLabel}`} initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: reduceMotion ? 0 : .15 }}>Dalston Junction</motion.p>
        <motion.p className={`${styles.label} ${styles.oxfordLabel}`} initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: reduceMotion ? 0 : 3.12 }}>Oxford Circus</motion.p>
        <motion.p className={`${styles.label} ${styles.sohoLabel}`} initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: reduceMotion ? 0 : 5.32 }}>Soho</motion.p>
        <motion.span className={`${styles.dot} ${styles.dot1}`} initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: reduceMotion ? 0 : 1.85 }} />
        <motion.span className={`${styles.dot} ${styles.dot2}`} initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: reduceMotion ? 0 : 3.17 }} />
        <motion.span className={`${styles.dot} ${styles.dot3}`} initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: reduceMotion ? 0 : 4.1 }} />
        <motion.span className={`${styles.dot} ${styles.dot4}`} initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: reduceMotion ? 0 : 5.37 }} />

        {photos.map((photo, index) => <motion.button key={photo.key} type="button" className={styles.photo} style={{ left: photo.left, top: photo.top, width: photo.width, height: photo.height, rotate: `${photo.rotate}deg` }} aria-label={`Enlarge ${photo.label} photo`} onClick={() => setSelected({ src: `/journey/${photo.key}.webp`, alt: `${photo.label} journey photo` })} initial={reduceMotion ? false : { opacity: 0 }} animate={{ opacity: 1, x: reduceMotion ? 0 : [0, index % 2 ? 2 : -2, 0], y: reduceMotion ? 0 : [0, index % 2 ? -3 : 3, 0] }} transition={{ opacity: { duration: .35, delay: reduceMotion ? 0 : photo.delay }, x: { duration: 6, repeat: Infinity, ease: "easeInOut" }, y: { duration: 6, repeat: Infinity, ease: "easeInOut" } }}>{/* eslint-disable-next-line @next/next/no-img-element */}<img src={`/journey/${photo.key}.webp`} alt="" /></motion.button>)}

        <motion.div className={`${styles.chat} ${styles.chat1}`} initial={{ opacity: 0, y: 6, scale: .95 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ delay: reduceMotion ? 0 : 2.35 }}><span>he&apos;s so so so checking you out xx eeeekkk</span><small>19:47</small></motion.div>
        <motion.div className={`${styles.chat} ${styles.chat2}`} initial={{ opacity: 0, y: 6, scale: .95 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ delay: reduceMotion ? 0 : 2.9 }}><span>he&apos;s actually gorg! i wonder where he&apos;s going....</span><small>19:47</small></motion.div>
        <motion.div className={`${styles.chat} ${styles.chat3}`} initial={{ opacity: 0, y: 6, scale: .95 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ delay: reduceMotion ? 0 : 6.9 }}><span>we gotta go chica, give him your ig, it&apos;s the next stop xxx</span><small>19:47</small></motion.div>

        <Link href="/bar" className={styles.cta} aria-label="Continue to Bar"><motion.img src="/journey/cta-bar.svg" alt="Bar" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: reduceMotion ? 0 : 6.35, duration: .5 }} /><motion.img className={styles.ctaArrow} src="/journey/cta-arrow.svg" alt="" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: reduceMotion ? 0 : 6.45, duration: .5 }} /></Link>
      </MobileStoryStage>
      <MobileLightbox image={selected} onClose={() => setSelected(null)} />
    </>
  );
}
