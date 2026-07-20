"use client";

import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import CameraRoll from "@/components/CameraRoll/CameraRoll";
import HometimeChat from "@/components/HometimeChat/HometimeChat";
import Nav from "@/components/Nav/Nav";
import styles from "./MobileHometime.module.css";

const CHAT_WIDTH = 516;
const CHAT_HEIGHT = 821;
const CAMERA_ROLL_REVEAL_MS = 9400;

export default function MobileHometime() {
  const rootRef = useRef<HTMLElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const reduceMotion = useReducedMotion();
  const [chatScale, setChatScale] = useState(390 / CHAT_WIDTH);
  const [cameraOpen, setCameraOpen] = useState(false);

  useLayoutEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const update = () => {
      const widthScale = root.clientWidth / CHAT_WIDTH;
      const heightScale = (root.clientHeight * 0.79) / CHAT_HEIGHT;
      setChatScale(Math.min(widthScale, heightScale));
    };

    update();
    const observer = new ResizeObserver(update);
    observer.observe(root);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const timer = window.setTimeout(
      () => setCameraOpen(true),
      reduceMotion ? 700 : CAMERA_ROLL_REVEAL_MS,
    );
    return () => window.clearTimeout(timer);
  }, [reduceMotion]);

  useEffect(() => {
    if (!cameraOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus({ preventScroll: true });

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setCameraOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [cameraOpen]);

  return (
    <main ref={rootRef} className={styles.root}>
      <Image
        src="/homepage/background.png"
        alt=""
        fill
        priority
        sizes="100vw"
        className={styles.background}
      />
      <div className={styles.shade} aria-hidden="true" />

      <Nav active="hometime" />

      <section className={styles.chat} aria-label="Hometime chat">
        <HometimeChat
          forceCanvas
          targetScale={chatScale}
          onPhotoClick={() => setCameraOpen(true)}
        />
      </section>

      <AnimatePresence>
        {cameraOpen && (
          <motion.div
            className={styles.overlay}
            role="dialog"
            aria-modal="true"
            aria-label="Camera roll"
            initial={reduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: reduceMotion ? 0 : 0.24, ease: "easeOut" }}
          >
            <button
              type="button"
              className={styles.backdrop}
              onClick={() => setCameraOpen(false)}
              aria-label="Close camera roll"
            />

            <motion.div
              className={styles.cameraPanel}
              initial={reduceMotion ? false : { opacity: 0, y: 56, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 32, scale: 0.98 }}
              transition={{ duration: reduceMotion ? 0 : 0.42, ease: [0.16, 1, 0.3, 1] }}
            >
              <CameraRoll variant="mobile" />
              <button
                ref={closeRef}
                type="button"
                className={styles.close}
                onClick={() => setCameraOpen(false)}
                aria-label="Close camera roll"
              >
                <span aria-hidden="true">×</span>
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
