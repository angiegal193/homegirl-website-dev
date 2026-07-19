"use client";

import { useLayoutEffect, useRef, useState } from "react";
import HometimeChat from "@/components/HometimeChat/HometimeChat";
import CameraRoll from "@/components/CameraRoll/CameraRoll";
import styles from "./HometimeStage.module.css";

const WIDTH = 1567;
const HEIGHT = 912;

export default function HometimeStage() {
  const viewportRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  useLayoutEffect(() => {
    const el = viewportRef.current;
    if (!el) return;
    // Keep both the chat and camera roll inside the viewport. The shared
    // background still covers the full screen behind this contained stage.
    const update = () => setScale(Math.min(el.clientWidth / WIDTH, el.clientHeight / HEIGHT));
    update();
    const observer = new ResizeObserver(update);
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={viewportRef} className={styles.viewport}>
      <div className={styles.canvas} style={{ transform: `translate(-50%, -50%) scale(${scale})` }}>
        <div className={styles.content}>
          <div className={styles.chat}>
            <HometimeChat targetScale={0.88} />
          </div>
          <div className={styles.camera}>
            <CameraRoll />
          </div>
        </div>
      </div>
    </div>
  );
}
