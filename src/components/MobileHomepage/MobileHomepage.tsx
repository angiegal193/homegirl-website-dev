"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { useLayoutEffect, useRef, useState } from "react";
import Nav from "@/components/Nav/Nav";
import styles from "./MobileHomepage.module.css";

const DESIGN_WIDTH = 390;
const DESIGN_HEIGHT = 844;

export default function MobileHomepage() {
  const rootRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const [stageScale, setStageScale] = useState(1);

  useLayoutEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const update = () => {
      setStageScale(
        Math.min(root.clientWidth / DESIGN_WIDTH, root.clientHeight / DESIGN_HEIGHT),
      );
    };

    update();
    const observer = new ResizeObserver(update);
    observer.observe(root);
    return () => observer.disconnect();
  }, []);

  return (
    <main ref={rootRef} className={styles.root}>
      <motion.div
        className={styles.backgroundWrap}
        initial={reduceMotion ? false : { opacity: 0, scale: 1.04 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: reduceMotion ? 0 : 0.65, ease: "easeOut" }}
      >
        <Image
          src="/homepage/background.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className={styles.background}
        />
      </motion.div>
      <div className={styles.shade} aria-hidden="true" />

      <Nav active="home" />

      <div
        className={styles.stage}
        style={{ transform: `translate(-50%, -50%) scale(${stageScale})` }}
      >
        <motion.div
          className={styles.title}
          initial={reduceMotion ? false : { opacity: 0, scale: 0.96, y: -20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{
            duration: reduceMotion ? 0 : 0.82,
            delay: reduceMotion ? 0 : 0.12,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <Image
            src="/homepage/homegirl-title.png"
            alt="homegirl x"
            width={1406}
            height={554}
            priority
          />
        </motion.div>

        <motion.article
          className={styles.story}
          initial={reduceMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: reduceMotion ? 0 : 0.9,
            delay: reduceMotion ? 0 : 0.2,
            ease: "easeOut",
          }}
        >
          <p>The one person who knows everything about you.</p>
          <p>And I mean everything.</p>
          <p>
            Your last situationship. How it started. How long it took you to reply to that one
            ambiguous message because you both spent 45 minutes crafting the perfect response. The
            eight-hour voice note analysis. Your cycle. Your cravings. The kiwi you should not eat
            because it made you feel sick once in 2019.
          </p>
          <p>
            They&apos;re the one you should never trust with directions, but somehow their confidence
            is so high you follow them anyway. Together, you can turn one random lyric into a full
            improvised ballad with harmonies. They ask why you haven&apos;t gone home yet, even though
            it&apos;s only been three weeks. They remember the friend who hurt you years ago, the one who
            made you feel weird for being yourself.
          </p>
          <p>Most of your best memories have them in them.</p>
          <p>
            The 50-minute walk in the middle of nowhere because your phone died and they refused to
            get an Uber. The night you both accidentally wore the same outfit and spent the evening
            pretending to be fraternal twins with different dads. The birthdays, festivals, house
            parties, brunches, bathroom pep talks, last-minute plans, post-date debriefs, dance floors,
            corner shop runs, and “how did we end up here?” nights.
          </p>
          <p>Because the function is just not the same without them.</p>
          <p>Your homegirl. Your ride or die.</p>
          <p>You know how it is.</p>
        </motion.article>

        <motion.div
          className={styles.cta}
          initial={reduceMotion ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: reduceMotion ? 0 : 0.55,
            delay: reduceMotion ? 0 : 1.75,
            ease: "easeOut",
          }}
        >
          <Link href="/getting-ready" aria-label="Continue to Getting Ready">
            <Image
              src="/homepage/getting-ready-cta.png"
              alt="Getting Ready"
              width={487}
              height={125}
              priority
            />
          </Link>
        </motion.div>
      </div>
    </main>
  );
}
