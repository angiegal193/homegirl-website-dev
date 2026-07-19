import type { Easing } from "motion/react";

/**
 * Transcribed from Figma frame 391:2 (getting-ready page), motion/react
 * codeSnippets. Two distinct behaviors, per spec:
 *
 * - Photo card motion (`cardAnims`) is a genuine ambient loop —
 *   `repeat: Infinity` is kept.
 * - Everything else (chat bubbles, typing indicator, CTA reveal, cutout
 *   polaroids) is an entrance-once reveal — `repeat: Infinity` is
 *   stripped, matching the Hometime chat rule: play once on
 *   scroll-into-view, hold the final state.
 */

const D = 6;

export interface CardAnim {
  initial: { rotate: number; scaleX: number; scaleY: number; x: number; y: number };
  animate: { rotate: number[]; scaleX: number[]; scaleY: number[]; x: number[]; y: number[] };
  transition: {
    rotate: { duration: number; times: number[]; ease: Easing; repeat: number };
    scaleX: { duration: number; times: number[]; ease: Easing; repeat: number };
    scaleY: { duration: number; times: number[]; ease: Easing; repeat: number };
    x: { duration: number; times: number[]; ease: Easing[]; repeat: number };
    y: { duration: number; times: number[]; ease: Easing[]; repeat: number };
  };
}

const LOOP: Easing[] = ["linear", "easeInOut", "easeInOut", "easeInOut"];

export const cardAnims: Record<
  "card01" | "card02" | "card03" | "card04" | "card05" | "card06" | "card07" | "card08",
  CardAnim
> = {
  card01: {
    initial: { rotate: 0, scaleX: 1, scaleY: 1, x: 0, y: 0 },
    animate: { rotate: [0, 0.6, -0.33, 0], scaleX: [1, 1.006, 0.998, 1], scaleY: [1, 1.006, 0.998, 1], x: [0, -8, 3.6, 0], y: [0, 5, -2.25, 0] },
    transition: {
      rotate: { duration: D, times: [0, 0.3667, 0.7083, 1], ease: "easeInOut", repeat: Infinity },
      scaleX: { duration: D, times: [0, 0.3667, 0.7083, 1], ease: "easeInOut", repeat: Infinity },
      scaleY: { duration: D, times: [0, 0.3667, 0.7083, 1], ease: "easeInOut", repeat: Infinity },
      x: { duration: D, times: [0, 0.3667, 0.7083, 1], ease: ["easeInOut", "easeInOut", "easeInOut"], repeat: Infinity },
      y: { duration: D, times: [0, 0.3667, 0.7083, 1], ease: ["easeInOut", "easeInOut", "easeInOut"], repeat: Infinity },
    },
  },
  card02: {
    initial: { rotate: 0, scaleX: 1, scaleY: 1, x: 0, y: 0 },
    animate: { rotate: [0, -0.5, 0.275, 0], scaleX: [1, 1.004, 0.998, 1], scaleY: [1, 1.004, 0.998, 1], x: [0, 0, 6, -2.7, 0], y: [0, 0, -7, 3.15, 0] },
    transition: {
      rotate: { duration: D, times: [0, 0.3767, 0.715, 1], ease: "easeInOut", repeat: Infinity },
      scaleX: { duration: D, times: [0, 0.3767, 0.715, 1], ease: "easeInOut", repeat: Infinity },
      scaleY: { duration: D, times: [0, 0.3767, 0.715, 1], ease: "easeInOut", repeat: Infinity },
      x: { duration: D, times: [0, 0.0167, 0.3767, 0.715, 1], ease: LOOP, repeat: Infinity },
      y: { duration: D, times: [0, 0.0167, 0.3767, 0.715, 1], ease: LOOP, repeat: Infinity },
    },
  },
  card03: {
    initial: { rotate: 0, scaleX: 1, scaleY: 1, x: 0, y: 0 },
    animate: { rotate: [0, -0.4, 0.22, 0], scaleX: [1, 1.005, 0.998, 1], scaleY: [1, 1.005, 0.998, 1], x: [0, 0, 7, -3.15, 0], y: [0, 0, 6, -2.7, 0] },
    transition: {
      rotate: { duration: D, times: [0, 0.3717, 0.7117, 1], ease: "easeInOut", repeat: Infinity },
      scaleX: { duration: D, times: [0, 0.3717, 0.7117, 1], ease: "easeInOut", repeat: Infinity },
      scaleY: { duration: D, times: [0, 0.3717, 0.7117, 1], ease: "easeInOut", repeat: Infinity },
      x: { duration: D, times: [0, 0.0083, 0.3717, 0.7117, 1], ease: LOOP, repeat: Infinity },
      y: { duration: D, times: [0, 0.0083, 0.3717, 0.7117, 1], ease: LOOP, repeat: Infinity },
    },
  },
  card04: {
    initial: { rotate: 0, scaleX: 1, scaleY: 1, x: 0, y: 0 },
    animate: { rotate: [0, 0.7, -0.385, 0], scaleX: [1, 1.008, 0.998, 1], scaleY: [1, 1.008, 0.998, 1], x: [0, 0, -5, 2.25, 0], y: [0, 0, -8, 3.6, 0] },
    transition: {
      rotate: { duration: D, times: [0, 0.3883, 0.7233, 1], ease: "easeInOut", repeat: Infinity },
      scaleX: { duration: D, times: [0, 0.3883, 0.7233, 1], ease: "easeInOut", repeat: Infinity },
      scaleY: { duration: D, times: [0, 0.3883, 0.7233, 1], ease: "easeInOut", repeat: Infinity },
      x: { duration: D, times: [0, 0.0367, 0.3883, 0.7233, 1], ease: LOOP, repeat: Infinity },
      y: { duration: D, times: [0, 0.0367, 0.3883, 0.7233, 1], ease: LOOP, repeat: Infinity },
    },
  },
  card05: {
    initial: { rotate: 0, scaleX: 1, scaleY: 1, x: 0, y: 0 },
    animate: { rotate: [0, -0.55, 0.303, 0], scaleX: [1, 1.004, 0.998, 1], scaleY: [1, 1.004, 0.998, 1], x: [0, 0, 5, -2.25, 0], y: [0, 0, 5, -2.25, 0] },
    transition: {
      rotate: { duration: D, times: [0, 0.3833, 0.7183, 1], ease: "easeInOut", repeat: Infinity },
      scaleX: { duration: D, times: [0, 0.3833, 0.7183, 1], ease: "easeInOut", repeat: Infinity },
      scaleY: { duration: D, times: [0, 0.3833, 0.7183, 1], ease: "easeInOut", repeat: Infinity },
      x: { duration: D, times: [0, 0.0267, 0.3833, 0.7183, 1], ease: LOOP, repeat: Infinity },
      y: { duration: D, times: [0, 0.0267, 0.3833, 0.7183, 1], ease: LOOP, repeat: Infinity },
    },
  },
  card06: {
    initial: { rotate: 0, scaleX: 1, scaleY: 1, x: 0, y: 0 },
    animate: { rotate: [0, 0.5, -0.275, 0], scaleX: [1, 1.009, 0.998, 1], scaleY: [1, 1.009, 0.998, 1], x: [0, 0, -4, 1.8, 0], y: [0, 0, -9, 4.05, 0] },
    transition: {
      rotate: { duration: D, times: [0, 0.3967, 0.7283, 1], ease: "easeInOut", repeat: Infinity },
      scaleX: { duration: D, times: [0, 0.3967, 0.7283, 1], ease: "easeInOut", repeat: Infinity },
      scaleY: { duration: D, times: [0, 0.3967, 0.7283, 1], ease: "easeInOut", repeat: Infinity },
      x: { duration: D, times: [0, 0.05, 0.3967, 0.7283, 1], ease: LOOP, repeat: Infinity },
      y: { duration: D, times: [0, 0.05, 0.3967, 0.7283, 1], ease: LOOP, repeat: Infinity },
    },
  },
  card07: {
    initial: { rotate: 0, scaleX: 1, scaleY: 1, x: 0, y: 0 },
    animate: { rotate: [0, -0.45, 0.247, 0], scaleX: [1, 1.006, 0.998, 1], scaleY: [1, 1.006, 0.998, 1], x: [0, 0, 7, -3.15, 0], y: [0, 0, -5, 2.25, 0] },
    transition: {
      rotate: { duration: D, times: [0, 0.39, 0.725, 1], ease: "easeInOut", repeat: Infinity },
      scaleX: { duration: D, times: [0, 0.39, 0.725, 1], ease: "easeInOut", repeat: Infinity },
      scaleY: { duration: D, times: [0, 0.39, 0.725, 1], ease: "easeInOut", repeat: Infinity },
      x: { duration: D, times: [0, 0.04, 0.39, 0.725, 1], ease: LOOP, repeat: Infinity },
      y: { duration: D, times: [0, 0.04, 0.39, 0.725, 1], ease: LOOP, repeat: Infinity },
    },
  },
  card08: {
    initial: { rotate: 0, scaleX: 1, scaleY: 1, x: 0, y: 0 },
    animate: { rotate: [0, 0.35, -0.192, 0], scaleX: [1, 1.004, 0.998, 1], scaleY: [1, 1.004, 0.998, 1], x: [0, 0, -6, 2.7, 0], y: [0, 0, 7, -3.15, 0] },
    transition: {
      rotate: { duration: D, times: [0, 0.3783, 0.7167, 1], ease: "easeInOut", repeat: Infinity },
      scaleX: { duration: D, times: [0, 0.3783, 0.7167, 1], ease: "easeInOut", repeat: Infinity },
      scaleY: { duration: D, times: [0, 0.3783, 0.7167, 1], ease: "easeInOut", repeat: Infinity },
      x: { duration: D, times: [0, 0.02, 0.3783, 0.7167, 1], ease: LOOP, repeat: Infinity },
      y: { duration: D, times: [0, 0.02, 0.3783, 0.7167, 1], ease: LOOP, repeat: Infinity },
    },
  },
};

// ---- Entrance-once elements (repeat stripped) ----

export interface BubbleAnim {
  initial: { opacity: number; scaleX: number; scaleY: number; y: number };
  animate: { opacity: number[]; scaleX: number[]; scaleY: number[]; y: number[] };
  transition: {
    opacity: { duration: number; times: number[]; ease: Easing[] };
    scaleX: { duration: number; times: number[]; ease: Easing[] };
    scaleY: { duration: number; times: number[]; ease: Easing[] };
    y: { duration: number; times: number[]; ease: Easing[] };
  };
}

const bubbleEase3: Easing[] = ["linear", "easeOut", "linear"];
const bubbleScaleEase: Easing[] = ["linear", "easeOut", "easeInOut", "linear"];

function bubbleAnim(t0: number, t1: number, t2: number): BubbleAnim {
  return {
    initial: { opacity: 0, scaleX: 0.95, scaleY: 0.95, y: 8 },
    animate: { opacity: [0, 0, 1, 1], scaleX: [0.95, 0.95, 1.035, 1, 1], scaleY: [0.95, 0.95, 1.035, 1, 1], y: [8, 8, 0, 0] },
    transition: {
      opacity: { duration: D, times: [0, t0, t1, 1], ease: bubbleEase3 },
      scaleX: { duration: D, times: [0, t0, t2, t1, 1], ease: bubbleScaleEase },
      scaleY: { duration: D, times: [0, t0, t2, t1, 1], ease: bubbleScaleEase },
      y: { duration: D, times: [0, t0, t1, 1], ease: bubbleEase3 },
    },
  };
}

export const bubbleAnims = {
  msg01: bubbleAnim(0.02, 0.06, 0.0367),
  msg02: bubbleAnim(0.1433, 0.1833, 0.16),
  msg03: bubbleAnim(0.27, 0.31, 0.2867),
  msg04: bubbleAnim(0.3967, 0.4367, 0.4133),
  msg05: bubbleAnim(0.5383, 0.5783, 0.555),
  msg06: bubbleAnim(0.6867, 0.7267, 0.7033),
  msg07: bubbleAnim(0.8367, 0.8767, 0.8533),
};

export interface IndicatorAnim {
  initial: { opacity: number; scaleX: number; scaleY: number };
  animate: { opacity: number[]; scaleX: number[]; scaleY: number[] };
  transition: {
    opacity: { duration: number; times: number[]; ease: Easing[] };
    scaleX: { duration: number; times: number[]; ease: Easing[] };
    scaleY: { duration: number; times: number[]; ease: Easing[] };
  };
}

export const indicatorAnim: IndicatorAnim = {
  initial: { opacity: 0, scaleX: 0.94, scaleY: 0.94 },
  animate: { opacity: [0, 0, 1, 1, 0, 0], scaleX: [0.94, 0.94, 1.035, 1, 1], scaleY: [0.94, 0.94, 1.035, 1, 1] },
  transition: {
    opacity: { duration: D, times: [0, 0.0833, 0.0967, 0.1217, 0.1333, 1], ease: ["linear", "easeOut", "linear", "easeOut", "linear"] },
    scaleX: { duration: D, times: [0, 0.0833, 0.1, 0.1133, 1], ease: ["linear", "easeOut", "easeInOut", "linear"] },
    scaleY: { duration: D, times: [0, 0.0833, 0.1, 0.1133, 1], ease: ["linear", "easeOut", "easeInOut", "linear"] },
  },
};

export interface DotAnim {
  initial: { y: number };
  animate: { y: number[] };
  transition: { y: { duration: number; times: number[]; ease: Easing[] } };
}

export const dotAnims: { dot1: DotAnim; dot2: DotAnim; dot3: DotAnim } = {
  dot1: {
    initial: { y: 0 },
    animate: { y: [0, 0, -3, 0, 0] },
    transition: { y: { duration: D, times: [0, 0.1017, 0.115, 0.1283, 1], ease: ["linear", "easeInOut", "easeInOut", "linear"] } },
  },
  dot2: {
    initial: { y: 0 },
    animate: { y: [0, 0, -3, -3, 0, 0] },
    transition: { y: { duration: D, times: [0, 0.1117, 0.1233, 0.1332, 0.1333, 1], ease: ["linear", "easeInOut", "linear", "linear", "linear"] } },
  },
  // Figma returned no explicit keyframes for dot3 — literal, not invented.
  dot3: {
    initial: { y: 0 },
    animate: { y: [0] },
    transition: { y: { duration: D, times: [0, 1], ease: ["linear"] } },
  },
};

export interface RevealAnim {
  initial: { opacity: number; y: number };
  animate: { opacity: number[]; y: number[] };
  transition: {
    opacity: { duration: number; times: number[]; ease: Easing[] };
    y: { duration: number; times: number[]; ease: Easing[] };
  };
}

function revealAnim(t0: number, t1: number): RevealAnim {
  return {
    initial: { opacity: 0, y: 22 },
    animate: { opacity: [0, 0, 1, 1], y: [22, 22, 0, 0] },
    transition: {
      opacity: { duration: D, times: [0, t0, t1, 1], ease: ["linear", "easeOut", "linear"] },
      y: { duration: D, times: [0, t0, t1, 1], ease: ["linear", "easeOut", "linear"] },
    },
  };
}

export const ctaArrowAnim = revealAnim(0.3183, 0.41);
export const ctaCurvedTextAnim = revealAnim(0.305, 0.3967);

export interface CutoutAnim {
  initial: { opacity: number; rotate: number; scaleX: number; scaleY: number; x: number; y: number };
  animate: { opacity: number[]; rotate: number[]; scaleX: number[]; scaleY: number[]; x: number[]; y: number[] };
  transition: {
    opacity: { duration: number; times: number[]; ease: Easing[] };
    rotate: { duration: number; times: number[]; ease: Easing[] };
    scaleX: { duration: number; times: number[]; ease: Easing[] };
    scaleY: { duration: number; times: number[]; ease: Easing[] };
    x: { duration: number; times: number[]; ease: Easing[] };
    y: { duration: number; times: number[]; ease: Easing[] };
  };
}

export const cutout01Anim: CutoutAnim = {
  initial: { opacity: 0, rotate: 0.8, scaleX: 0.955, scaleY: 0.955, x: -14, y: 12 },
  animate: {
    opacity: [0, 0, 1, 1],
    rotate: [0.8, 0.8, 0, -0.36, 0],
    scaleX: [0.955, 0.955, 1.035, 1, 1.006, 1],
    scaleY: [0.955, 0.955, 1.035, 1, 1.006, 1],
    x: [-14, -14, 0, 5, -2.25, 0],
    y: [12, 12, 0, -4, 1.8, 0],
  },
  transition: {
    opacity: { duration: D, times: [0, 0.175, 0.235, 1], ease: ["linear", "easeOut", "linear"] },
    rotate: { duration: D, times: [0, 0.175, 0.235, 0.6167, 1], ease: ["linear", "easeOut", "easeInOut", "easeInOut"] },
    scaleX: { duration: D, times: [0, 0.175, 0.205, 0.235, 0.6167, 1], ease: ["linear", "easeOut", "easeInOut", "easeInOut", "easeInOut"] },
    scaleY: { duration: D, times: [0, 0.175, 0.205, 0.235, 0.6167, 1], ease: ["linear", "easeOut", "easeInOut", "easeInOut", "easeInOut"] },
    x: { duration: D, times: [0, 0.175, 0.235, 0.6167, 0.85, 1], ease: ["linear", "easeOut", "easeInOut", "easeInOut", "easeInOut"] },
    y: { duration: D, times: [0, 0.175, 0.235, 0.6167, 0.85, 1], ease: ["linear", "easeOut", "easeInOut", "easeInOut", "easeInOut"] },
  },
};

export const cutout02Anim: CutoutAnim = {
  initial: { opacity: 0, rotate: 12.363, scaleX: 0.955, scaleY: 0.955, x: 14, y: -10 },
  animate: {
    opacity: [0, 0, 1, 1],
    rotate: [12.363, 12.363, 13.013, 13.305, 13.013],
    scaleX: [0.955, 0.955, 1.035, 1, 1.006, 1],
    scaleY: [0.955, 0.955, 1.035, 1, 1.006, 1],
    x: [14, 14, 0, -4, 1.8, 0],
    y: [-10, -10, 0, 5, -2.25, 0],
  },
  transition: {
    opacity: { duration: D, times: [0, 0.225, 0.285, 1], ease: ["linear", "easeOut", "linear"] },
    rotate: { duration: D, times: [0, 0.225, 0.285, 0.6167, 1], ease: ["linear", "easeOut", "easeInOut", "easeInOut"] },
    scaleX: { duration: D, times: [0, 0.225, 0.255, 0.285, 0.6167, 1], ease: ["linear", "easeOut", "easeInOut", "easeInOut", "easeInOut"] },
    scaleY: { duration: D, times: [0, 0.225, 0.255, 0.285, 0.6167, 1], ease: ["linear", "easeOut", "easeInOut", "easeInOut", "easeInOut"] },
    x: { duration: D, times: [0, 0.225, 0.285, 0.6167, 0.85, 1], ease: ["linear", "easeOut", "easeInOut", "easeInOut", "easeInOut"] },
    y: { duration: D, times: [0, 0.225, 0.285, 0.6167, 0.85, 1], ease: ["linear", "easeOut", "easeInOut", "easeInOut", "easeInOut"] },
  },
};
