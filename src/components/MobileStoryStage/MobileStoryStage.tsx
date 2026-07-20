"use client";

import Image from "next/image";
import type { ReactNode } from "react";
import { useLayoutEffect, useRef, useState } from "react";
import Nav, { type NavTab } from "@/components/Nav/Nav";
import styles from "./MobileStoryStage.module.css";

const DESIGN_WIDTH = 390;
const DESIGN_HEIGHT = 844;

interface MobileStoryStageProps {
  active: NavTab;
  children: ReactNode;
  label: string;
}

export default function MobileStoryStage({ active, children, label }: MobileStoryStageProps) {
  const rootRef = useRef<HTMLElement>(null);
  const [scale, setScale] = useState(1);

  useLayoutEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const update = () => setScale(Math.min(root.clientWidth / DESIGN_WIDTH, root.clientHeight / DESIGN_HEIGHT));
    update();
    const observer = new ResizeObserver(update);
    observer.observe(root);
    return () => observer.disconnect();
  }, []);

  return (
    <main ref={rootRef} className={styles.root} aria-label={label}>
      <Image src="/homepage/background.png" alt="" fill priority sizes="100vw" className={styles.background} />
      <div className={styles.shade} aria-hidden="true" />
      <Nav active={active} />
      <div className={styles.stage} style={{ transform: `translate(-50%, -50%) scale(${scale})` }}>
        {children}
      </div>
    </main>
  );
}
