"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { ctaArrowAnim, ctaCurvedTextAnim } from "./gettingReadyAnimations";

interface GettingReadyCtaProps {
  isInView: boolean;
}

/**
 * The curved "Journey" text + underline and the doodle arrow — this
 * page's CTA points to the *next* section (Journey), matching the
 * pattern established by the homepage's CTA pointing to Getting Ready.
 */
export default function GettingReadyCta({ isInView }: GettingReadyCtaProps) {
  return (
    <Link href="/journey" aria-label="Continue to Journey">
      <motion.div
        className="absolute h-[22px] w-[251px]"
        style={{ left: 1149, top: 743 }}
        initial={ctaArrowAnim.initial}
        animate={isInView ? ctaArrowAnim.animate : ctaArrowAnim.initial}
        transition={ctaArrowAnim.transition}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/getting-ready/cta-arrow.svg" alt="" className="block size-full" />
      </motion.div>

      <motion.div
        className="absolute"
        style={{ left: 1073, top: 674.29, width: 308.815, height: 96.71 }}
        initial={ctaCurvedTextAnim.initial}
        animate={isInView ? ctaCurvedTextAnim.animate : ctaCurvedTextAnim.initial}
        transition={ctaCurvedTextAnim.transition}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/getting-ready/cta-curved-text.svg" alt="Continue to Journey" className="block size-full" />
      </motion.div>
    </Link>
  );
}
