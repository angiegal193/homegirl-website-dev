"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { useState } from "react";
import MobileLightbox, { type MobileLightboxImage } from "@/components/MobileLightbox/MobileLightbox";
import MobileStoryStage from "@/components/MobileStoryStage/MobileStoryStage";
import styles from "./MobileGettingReady.module.css";

const cards = [
  { n: 3, x: -16, y: -16, w: 157, h: 159, z: 2 },
  { n: 2, x: 120, y: -7, w: 145, h: 146, z: 3 },
  { n: 5, x: 243, y: -15, w: 147, h: 149, z: 4 },
  { n: 1, x: -16, y: 107, w: 149, h: 152, z: 5 },
  { n: 4, x: 93, y: 99, w: 167, h: 169, z: 6 },
  { n: 7, x: 241, y: 116, w: 171, h: 173, z: 7 },
  { n: 6, x: 133, y: 250, w: 125, h: 126, z: 8 },
] as const;

const messages = [
  { text: "hey babe xx On my way! can't wait to see youuu xxx", time: "16:34", side: "right", top: 450, width: 245 },
  { text: "kk samsiees! xx", time: "16:35", side: "left", top: 506, width: 103 },
  { text: "urgh i don't know what to wear!", time: "16:35", side: "left", top: 550, width: 166 },
  { text: "dw we'll find something xx", time: "16:37", side: "right", top: 594, width: 162 },
  { text: "i forgot my curlers can i borrow yours? xx", time: "16:40", side: "right", top: 638, width: 210 },
  { text: "of course! xx", time: "16:40", side: "left", top: 693, width: 92 },
  { text: "here!!!! xxxx", time: "17:32", side: "right", top: 737, width: 92 },
] as const;

export default function MobileGettingReady() {
  const reduceMotion = useReducedMotion();
  const [selected, setSelected] = useState<MobileLightboxImage | null>(null);

  return (
    <>
      <MobileStoryStage active="getting-ready" label="Getting Ready">
        <div className={styles.collage}>
          {cards.map((card, index) => (
            <motion.button key={card.n} type="button" className={styles.card} style={{ left: card.x, top: card.y, width: card.w, height: card.h, zIndex: card.z }} aria-label={`Enlarge Getting Ready photo ${card.n}`} onClick={() => setSelected({ src: `/getting-ready-preview/lightbox/card-${String(card.n).padStart(2, "0")}.webp`, alt: `Getting Ready photo ${card.n}` })}
              animate={reduceMotion ? undefined : { x: [0, index % 2 ? 2.8 : -3.3, 0], y: [0, index % 2 ? -3 : 2.5, 0], rotate: [0, index % 2 ? -0.45 : 0.55, 0], scale: [1, 1.006, 1] }} transition={{ duration: 6.4, delay: index * -0.18, ease: "easeInOut", repeat: Infinity }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}<img src={`/getting-ready-preview/card-${String(card.n).padStart(2, "0")}.webp`} alt="" />
            </motion.button>
          ))}
          <motion.button type="button" className={`${styles.cutout} ${styles.cutoutLeft}`} aria-label="Enlarge friends laughing photo" onClick={() => setSelected({ src: "/getting-ready-preview/cutout-08.webp", alt: "Friends laughing while getting ready" })} initial={reduceMotion ? false : { opacity: 0, x: 8, y: -5, scale: .955 }} animate={{ opacity: 1, x: 0, y: 0, scale: 1 }} transition={{ duration: .42, delay: .9, ease: "easeOut" }}>{/* eslint-disable-next-line @next/next/no-img-element */}<img src="/getting-ready-preview/cutout-08.webp" alt="" /></motion.button>
          <motion.button type="button" className={`${styles.cutout} ${styles.cutoutRight}`} aria-label="Enlarge friends hugging photo" onClick={() => setSelected({ src: "/getting-ready-preview/cutout-11.webp", alt: "Friends hugging while getting ready" })} initial={reduceMotion ? false : { opacity: 0, x: -14, y: 12, scale: .955 }} animate={{ opacity: 1, x: 0, y: 0, scale: 1 }} transition={{ duration: .42, delay: 1.15, ease: "easeOut" }}>{/* eslint-disable-next-line @next/next/no-img-element */}<img src="/getting-ready-preview/cutout-11.webp" alt="" /></motion.button>
          {/* eslint-disable-next-line @next/next/no-img-element */}<img className={styles.eyeshadow} src="/getting-ready-preview/eyeshadow.svg" alt="" />
          {/* eslint-disable-next-line @next/next/no-img-element */}<img className={styles.lipstick} src="/getting-ready-preview/lipstick.svg" alt="" />
        </div>

        {messages.map((message, index) => (
          <motion.div key={message.text} className={`${styles.message} ${message.side === "right" ? styles.right : styles.left}`} style={{ top: message.top, width: message.width }} initial={reduceMotion ? false : { opacity: 0, y: 6, scale: .95 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ duration: .3, delay: reduceMotion ? 0 : .12 + index * .76, ease: "easeOut" }}>
            <span>{message.text}</span><small>{message.time}</small>
          </motion.div>
        ))}

        <Link href="/journey" className={styles.cta} aria-label="Continue to Journey">
          <motion.img src="/getting-ready/cta-curved-text.svg" alt="Journey" initial={reduceMotion ? false : { opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .55, delay: reduceMotion ? 0 : 5.35, ease: "easeOut" }} />
          <motion.img className={styles.arrow} src="/getting-ready/cta-arrow.svg" alt="" initial={reduceMotion ? false : { opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .55, delay: reduceMotion ? 0 : 5.48, ease: "easeOut" }} />
        </Link>
      </MobileStoryStage>
      <MobileLightbox image={selected} onClose={() => setSelected(null)} />
    </>
  );
}
