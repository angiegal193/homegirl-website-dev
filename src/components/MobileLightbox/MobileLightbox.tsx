"use client";

import { AnimatePresence, motion } from "motion/react";
import styles from "./MobileLightbox.module.css";

export interface MobileLightboxImage {
  src: string;
  alt: string;
}

export default function MobileLightbox({ image, onClose }: { image: MobileLightboxImage | null; onClose: () => void }) {
  return (
    <AnimatePresence>
      {image && (
        <motion.div className={styles.lightbox} role="dialog" aria-modal="true" aria-label="Enlarged photo" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose}>
          <motion.div className={styles.imageWrap} initial={{ opacity: 0, scale: 0.88, rotate: -1.5 }} animate={{ opacity: 1, scale: 1, rotate: 0 }} exit={{ opacity: 0, scale: 0.92 }} transition={{ duration: 0.32, ease: "easeOut" }} onClick={(event) => event.stopPropagation()}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={image.src} alt={image.alt} />
            <button type="button" className={styles.close} onClick={onClose} aria-label="Close enlarged photo">×</button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
