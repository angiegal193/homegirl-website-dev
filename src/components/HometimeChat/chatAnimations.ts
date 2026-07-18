import type { Easing } from "motion/react";

/**
 * Transcribed directly from Figma's motion/react codeSnippets for frame
 * 377:2 (timelineCohorts root, 14.5s single shared timeline, 24 nodes).
 * `repeat: Infinity` is stripped from every transition per spec — this
 * plays once, triggered by scroll-into-view, not on mount/loop.
 */

type PropTransition = {
  duration: number;
  times: number[];
  ease: Easing | Easing[];
};

export interface BubbleAnim {
  initial: { opacity: number; scaleX: number; scaleY: number; x: number; y: number };
  animate: { opacity: number[]; scaleX: number[]; scaleY: number[]; x: number[]; y: number[] };
  transition: {
    opacity: PropTransition;
    scaleX: PropTransition;
    scaleY: PropTransition;
    x: PropTransition;
    y: PropTransition;
  };
}

export interface IndicatorAnim {
  initial: { opacity: number; scaleX: number; scaleY: number; y: number };
  animate: { opacity: number[]; scaleX: number[]; scaleY: number[]; y: number[] };
  transition: {
    opacity: PropTransition;
    scaleX: PropTransition;
    scaleY: PropTransition;
    y: PropTransition;
  };
}

export interface DotAnim {
  initial: { opacity: number; y: number };
  animate: { opacity: number[]; y: number[] };
  transition: {
    opacity: PropTransition;
    y: PropTransition;
  };
}

const D = 14.5;
const EASE_SLIDE: Easing = [0.16, 1, 0.3, 1];

export const bubbleAnims: Record<
  | "loveYouSoMuch"
  | "hadSuchAFunNight"
  | "loveYoouuuuuu"
  | "letMeKnow"
  | "hommeee"
  | "kGonnaSlob"
  | "alsoSendPhotos"
  | "photoAttachment",
  BubbleAnim
> = {
  loveYouSoMuch: {
    initial: { opacity: 0, scaleX: 0.96, scaleY: 0.96, x: 26, y: 14 },
    animate: { opacity: [0, 0, 1, 1], scaleX: [0.96, 0.96, 1, 1], scaleY: [0.96, 0.96, 1, 1], x: [26, 26, 0, 0], y: [14, 14, 0, 0] },
    transition: {
      opacity: { duration: D, times: [0, 0.0655, 0.1083, 1], ease: ["linear", EASE_SLIDE, "linear"] },
      scaleX: { duration: D, times: [0, 0.0655, 0.1083, 1], ease: ["linear", "easeOut", "linear"] },
      scaleY: { duration: D, times: [0, 0.0655, 0.1083, 1], ease: ["linear", "easeOut", "linear"] },
      x: { duration: D, times: [0, 0.0655, 0.1083, 1], ease: ["linear", EASE_SLIDE, "linear"] },
      y: { duration: D, times: [0, 0.0655, 0.1083, 1], ease: ["linear", EASE_SLIDE, "linear"] },
    },
  },
  hadSuchAFunNight: {
    initial: { opacity: 0, scaleX: 0.96, scaleY: 0.96, x: 26, y: 14 },
    animate: { opacity: [0, 0, 1, 1], scaleX: [0.96, 0.96, 1, 1], scaleY: [0.96, 0.96, 1, 1], x: [26, 26, 0, 0], y: [14, 14, 0, 0] },
    transition: {
      opacity: { duration: D, times: [0, 0.1207, 0.1634, 1], ease: ["linear", EASE_SLIDE, "linear"] },
      scaleX: { duration: D, times: [0, 0.1207, 0.1634, 1], ease: ["linear", "easeOut", "linear"] },
      scaleY: { duration: D, times: [0, 0.1207, 0.1634, 1], ease: ["linear", "easeOut", "linear"] },
      x: { duration: D, times: [0, 0.1207, 0.1634, 1], ease: ["linear", EASE_SLIDE, "linear"] },
      y: { duration: D, times: [0, 0.1207, 0.1634, 1], ease: ["linear", EASE_SLIDE, "linear"] },
    },
  },
  loveYoouuuuuu: {
    initial: { opacity: 0, scaleX: 0.96, scaleY: 0.96, x: -26, y: 14 },
    animate: { opacity: [0, 0, 1, 1], scaleX: [0.96, 0.96, 1, 1], scaleY: [0.96, 0.96, 1, 1], x: [-26, -26, 0, 0], y: [14, 14, 0, 0] },
    transition: {
      opacity: { duration: D, times: [0, 0.1828, 0.2255, 1], ease: ["linear", EASE_SLIDE, "linear"] },
      scaleX: { duration: D, times: [0, 0.1828, 0.2255, 1], ease: ["linear", "easeOut", "linear"] },
      scaleY: { duration: D, times: [0, 0.1828, 0.2255, 1], ease: ["linear", "easeOut", "linear"] },
      x: { duration: D, times: [0, 0.1828, 0.2255, 1], ease: ["linear", EASE_SLIDE, "linear"] },
      y: { duration: D, times: [0, 0.1828, 0.2255, 1], ease: ["linear", EASE_SLIDE, "linear"] },
    },
  },
  letMeKnow: {
    initial: { opacity: 0, scaleX: 0.96, scaleY: 0.96, x: -26, y: 14 },
    animate: { opacity: [0, 0, 1, 1], scaleX: [0.96, 0.96, 1, 1], scaleY: [0.96, 0.96, 1, 1], x: [-26, -26, 0, 0], y: [14, 14, 0, 0] },
    transition: {
      opacity: { duration: D, times: [0, 0.2448, 0.2876, 1], ease: ["linear", EASE_SLIDE, "linear"] },
      scaleX: { duration: D, times: [0, 0.2448, 0.2876, 1], ease: ["linear", "easeOut", "linear"] },
      scaleY: { duration: D, times: [0, 0.2448, 0.2876, 1], ease: ["linear", "easeOut", "linear"] },
      x: { duration: D, times: [0, 0.2448, 0.2876, 1], ease: ["linear", EASE_SLIDE, "linear"] },
      y: { duration: D, times: [0, 0.2448, 0.2876, 1], ease: ["linear", EASE_SLIDE, "linear"] },
    },
  },
  hommeee: {
    initial: { opacity: 0, scaleX: 0.96, scaleY: 0.96, x: 26, y: 14 },
    animate: { opacity: [0, 0, 1, 1], scaleX: [0.96, 0.96, 1, 1], scaleY: [0.96, 0.96, 1, 1], x: [26, 26, 0, 0], y: [14, 14, 0, 0] },
    transition: {
      opacity: { duration: D, times: [0, 0.3241, 0.3669, 1], ease: ["linear", EASE_SLIDE, "linear"] },
      scaleX: { duration: D, times: [0, 0.3241, 0.3669, 1], ease: ["linear", "easeOut", "linear"] },
      scaleY: { duration: D, times: [0, 0.3241, 0.3669, 1], ease: ["linear", "easeOut", "linear"] },
      x: { duration: D, times: [0, 0.3241, 0.3669, 1], ease: ["linear", EASE_SLIDE, "linear"] },
      y: { duration: D, times: [0, 0.3241, 0.3669, 1], ease: ["linear", EASE_SLIDE, "linear"] },
    },
  },
  kGonnaSlob: {
    initial: { opacity: 0, scaleX: 0.96, scaleY: 0.96, x: -26, y: 14 },
    animate: { opacity: [0, 0, 1, 1], scaleX: [0.96, 0.96, 1, 1], scaleY: [0.96, 0.96, 1, 1], x: [-26, -26, 0, 0], y: [14, 14, 0, 0] },
    transition: {
      opacity: { duration: D, times: [0, 0.4103, 0.4531, 1], ease: ["linear", EASE_SLIDE, "linear"] },
      scaleX: { duration: D, times: [0, 0.4103, 0.4531, 1], ease: ["linear", "easeOut", "linear"] },
      scaleY: { duration: D, times: [0, 0.4103, 0.4531, 1], ease: ["linear", "easeOut", "linear"] },
      x: { duration: D, times: [0, 0.4103, 0.4531, 1], ease: ["linear", EASE_SLIDE, "linear"] },
      y: { duration: D, times: [0, 0.4103, 0.4531, 1], ease: ["linear", EASE_SLIDE, "linear"] },
    },
  },
  alsoSendPhotos: {
    initial: { opacity: 0, scaleX: 0.96, scaleY: 0.96, x: -26, y: 14 },
    animate: { opacity: [0, 0, 1, 1], scaleX: [0.96, 0.96, 1, 1], scaleY: [0.96, 0.96, 1, 1], x: [-26, -26, 0, 0], y: [14, 14, 0, 0] },
    transition: {
      opacity: { duration: D, times: [0, 0.4793, 0.5221, 1], ease: ["linear", EASE_SLIDE, "linear"] },
      scaleX: { duration: D, times: [0, 0.4793, 0.5221, 1], ease: ["linear", "easeOut", "linear"] },
      scaleY: { duration: D, times: [0, 0.4793, 0.5221, 1], ease: ["linear", "easeOut", "linear"] },
      x: { duration: D, times: [0, 0.4793, 0.5221, 1], ease: ["linear", EASE_SLIDE, "linear"] },
      y: { duration: D, times: [0, 0.4793, 0.5221, 1], ease: ["linear", EASE_SLIDE, "linear"] },
    },
  },
  photoAttachment: {
    initial: { opacity: 0, scaleX: 0.96, scaleY: 0.96, x: 26, y: 30 },
    animate: { opacity: [0, 0, 1, 1], scaleX: [0.96, 0.96, 1, 1], scaleY: [0.96, 0.96, 1, 1], x: [26, 26, 0, 0], y: [30, 30, 0, 0] },
    transition: {
      opacity: { duration: D, times: [0, 0.5483, 0.6021, 1], ease: ["linear", EASE_SLIDE, "linear"] },
      scaleX: { duration: D, times: [0, 0.5483, 0.6021, 1], ease: ["linear", "easeOut", "linear"] },
      scaleY: { duration: D, times: [0, 0.5483, 0.6021, 1], ease: ["linear", "easeOut", "linear"] },
      x: { duration: D, times: [0, 0.5483, 0.6021, 1], ease: ["linear", EASE_SLIDE, "linear"] },
      y: { duration: D, times: [0, 0.5483, 0.6021, 1], ease: ["linear", EASE_SLIDE, "linear"] },
    },
  },
};

export const indicatorAnims: Record<
  "beforeLoveYouSoMuch" | "beforeHommeee" | "beforeKGonnaSlob" | "beforeAlsoSendPhotos",
  IndicatorAnim
> = {
  beforeLoveYouSoMuch: {
    initial: { opacity: 0, scaleX: 0.96, scaleY: 0.96, y: 6 },
    animate: { opacity: [0, 0, 1, 1, 0, 0], scaleX: [0.96, 0.96, 1, 1], scaleY: [0.96, 0.96, 1, 1], y: [6, 6, 0, 0] },
    transition: {
      opacity: { duration: D, times: [0, 0.0083, 0.0138, 0.0631, 0.0652, 1], ease: ["linear", "easeOut", "linear", "easeOut", "linear"] },
      scaleX: { duration: D, times: [0, 0.0083, 0.0138, 1], ease: ["linear", EASE_SLIDE, "linear"] },
      scaleY: { duration: D, times: [0, 0.0083, 0.0138, 1], ease: ["linear", EASE_SLIDE, "linear"] },
      y: { duration: D, times: [0, 0.0083, 0.0138, 1], ease: ["linear", EASE_SLIDE, "linear"] },
    },
  },
  beforeHommeee: {
    initial: { opacity: 0, scaleX: 0.96, scaleY: 0.96, y: 6 },
    animate: { opacity: [0, 0, 1, 1, 0, 0], scaleX: [0.96, 0.96, 1, 1], scaleY: [0.96, 0.96, 1, 1], y: [6, 6, 0, 0] },
    transition: {
      opacity: { duration: D, times: [0, 0.2634, 0.269, 0.3217, 0.3238, 1], ease: ["linear", "easeOut", "linear", "easeOut", "linear"] },
      scaleX: { duration: D, times: [0, 0.2634, 0.269, 1], ease: ["linear", EASE_SLIDE, "linear"] },
      scaleY: { duration: D, times: [0, 0.2634, 0.269, 1], ease: ["linear", EASE_SLIDE, "linear"] },
      y: { duration: D, times: [0, 0.2634, 0.269, 1], ease: ["linear", EASE_SLIDE, "linear"] },
    },
  },
  beforeKGonnaSlob: {
    initial: { opacity: 0, scaleX: 0.96, scaleY: 0.96, y: 6 },
    animate: { opacity: [0, 0, 1, 1, 0, 0], scaleX: [0.96, 0.96, 1, 1], scaleY: [0.96, 0.96, 1, 1], y: [6, 6, 0, 0] },
    transition: {
      opacity: { duration: D, times: [0, 0.3497, 0.3552, 0.4079, 0.41, 1], ease: ["linear", "easeOut", "linear", "easeOut", "linear"] },
      scaleX: { duration: D, times: [0, 0.3497, 0.3552, 1], ease: ["linear", EASE_SLIDE, "linear"] },
      scaleY: { duration: D, times: [0, 0.3497, 0.3552, 1], ease: ["linear", EASE_SLIDE, "linear"] },
      y: { duration: D, times: [0, 0.3497, 0.3552, 1], ease: ["linear", EASE_SLIDE, "linear"] },
    },
  },
  beforeAlsoSendPhotos: {
    initial: { opacity: 0, scaleX: 0.96, scaleY: 0.96, y: 6 },
    animate: { opacity: [0, 0, 1, 1, 0, 0], scaleX: [0.96, 0.96, 1, 1], scaleY: [0.96, 0.96, 1, 1], y: [6, 6, 0, 0] },
    transition: {
      opacity: { duration: D, times: [0, 0.4221, 0.4276, 0.4769, 0.479, 1], ease: ["linear", "easeOut", "linear", "easeOut", "linear"] },
      scaleX: { duration: D, times: [0, 0.4221, 0.4276, 1], ease: ["linear", EASE_SLIDE, "linear"] },
      scaleY: { duration: D, times: [0, 0.4221, 0.4276, 1], ease: ["linear", EASE_SLIDE, "linear"] },
      y: { duration: D, times: [0, 0.4221, 0.4276, 1], ease: ["linear", EASE_SLIDE, "linear"] },
    },
  },
};

const EASE_BOUNCE: Easing = [0.5, 0, 0.5, 1];

export const dotAnims: Record<
  | "loveYouSoMuchDot1"
  | "loveYouSoMuchDot2"
  | "loveYouSoMuchDot3"
  | "hommeeeDot1"
  | "hommeeeDot2"
  | "hommeeeDot3"
  | "kGonnaSlobDot1"
  | "kGonnaSlobDot2"
  | "kGonnaSlobDot3"
  | "alsoSendPhotosDot1"
  | "alsoSendPhotosDot2"
  | "alsoSendPhotosDot3",
  DotAnim
> = {
  loveYouSoMuchDot1: {
    initial: { opacity: 0.35, y: 0 },
    animate: { opacity: [0.35, 0.35, 1, 0.35, 0.35, 0, 1, 1], y: [0, 0, -2.5, 0, 0, -2.5, -2.5] },
    transition: {
      opacity: { duration: D, times: [0, 0.0138, 0.029, 0.0538, 0.0631, 0.0652, 0.0786, 1], ease: ["linear", "easeOut", "easeOut", "linear", EASE_BOUNCE, "easeOut", "linear"] },
      y: { duration: D, times: [0, 0.0138, 0.029, 0.0538, 0.0652, 0.0786, 1], ease: ["linear", "easeOut", "easeOut", "linear", "easeOut", "linear"] },
    },
  },
  loveYouSoMuchDot2: {
    initial: { opacity: 0.35, y: 0 },
    animate: { opacity: [0.35, 0.35, 1, 0.35, 0.35, 0, 1, 1], y: [0, 0, -2.5, 0, 0, -2.5, -2.5] },
    transition: {
      opacity: { duration: D, times: [0, 0.0138, 0.0372, 0.0621, 0.0631, 0.0652, 0.0869, 1], ease: ["linear", "easeOut", "easeOut", "linear", EASE_BOUNCE, "easeOut", "linear"] },
      y: { duration: D, times: [0, 0.0138, 0.0372, 0.0621, 0.0652, 0.0869, 1], ease: ["linear", "easeOut", "easeOut", "linear", "easeOut", "linear"] },
    },
  },
  loveYouSoMuchDot3: {
    initial: { opacity: 0.35, y: 0 },
    animate: { opacity: [0.35, 0.35, 1, 0.35, 0, 0.35, 1, 1], y: [0, 0, -2.5, 0, 0, -2.5, -2.5] },
    transition: {
      opacity: { duration: D, times: [0, 0.0138, 0.0455, 0.0631, 0.0652, 0.0703, 0.0952, 1], ease: ["linear", "easeOut", EASE_BOUNCE, EASE_BOUNCE, "easeOut", "easeOut", "linear"] },
      y: { duration: D, times: [0, 0.0138, 0.0455, 0.0631, 0.0703, 0.0952, 1], ease: ["linear", "easeOut", EASE_BOUNCE, "linear", "easeOut", "linear"] },
    },
  },
  hommeeeDot1: {
    initial: { opacity: 0.35, y: 0 },
    animate: { opacity: [0.35, 0.35, 1, 0.35, 0.35, 0, 1, 1], y: [0, 0, -2.5, 0, 0, -2.5, -2.5] },
    transition: {
      opacity: { duration: D, times: [0, 0.269, 0.2841, 0.309, 0.3217, 0.3238, 0.3338, 1], ease: ["linear", "easeOut", "easeOut", "linear", EASE_BOUNCE, "easeOut", "linear"] },
      y: { duration: D, times: [0, 0.269, 0.2841, 0.309, 0.3238, 0.3338, 1], ease: ["linear", "easeOut", "easeOut", "linear", "easeOut", "linear"] },
    },
  },
  hommeeeDot2: {
    initial: { opacity: 0.35, y: 0 },
    animate: { opacity: [0.35, 0.35, 1, 0.35, 0.35, 0, 1, 1], y: [0, 0, -2.5, 0, 0, -2.5, -2.5] },
    transition: {
      opacity: { duration: D, times: [0, 0.269, 0.2924, 0.3172, 0.3217, 0.3238, 0.3421, 1], ease: ["linear", "easeOut", "easeOut", "linear", EASE_BOUNCE, "easeOut", "linear"] },
      y: { duration: D, times: [0, 0.269, 0.2924, 0.3172, 0.3238, 0.3421, 1], ease: ["linear", "easeOut", "easeOut", "linear", "easeOut", "linear"] },
    },
  },
  hommeeeDot3: {
    initial: { opacity: 0.35, y: 0 },
    animate: { opacity: [0.35, 0.35, 1, 0.35, 0, 0.35, 1, 1], y: [0, 0, -2.5, 0, 0, -2.5, -2.5] },
    transition: {
      opacity: { duration: D, times: [0, 0.269, 0.3007, 0.3217, 0.3238, 0.3255, 0.3503, 1], ease: ["linear", "easeOut", EASE_BOUNCE, EASE_BOUNCE, "easeOut", "easeOut", "linear"] },
      y: { duration: D, times: [0, 0.269, 0.3007, 0.3217, 0.3255, 0.3503, 1], ease: ["linear", "easeOut", EASE_BOUNCE, "linear", "easeOut", "linear"] },
    },
  },
  kGonnaSlobDot1: {
    initial: { opacity: 0.35, y: 0 },
    animate: { opacity: [0.35, 0.35, 1, 0.35, 0.35, 0, 1, 1], y: [0, 0, -2.5, 0, 0, -2.5, -2.5] },
    transition: {
      opacity: { duration: D, times: [0, 0.3552, 0.3703, 0.3952, 0.4079, 0.41, 0.42, 1], ease: ["linear", "easeOut", "easeOut", "linear", EASE_BOUNCE, "easeOut", "linear"] },
      y: { duration: D, times: [0, 0.3552, 0.3703, 0.3952, 0.41, 0.42, 1], ease: ["linear", "easeOut", "easeOut", "linear", "easeOut", "linear"] },
    },
  },
  kGonnaSlobDot2: {
    initial: { opacity: 0.35, y: 0 },
    animate: { opacity: [0.35, 0.35, 1, 0.35, 0.35, 0, 1, 1], y: [0, 0, -2.5, 0, 0, -2.5, -2.5] },
    transition: {
      opacity: { duration: D, times: [0, 0.3552, 0.3786, 0.4034, 0.4079, 0.41, 0.4283, 1], ease: ["linear", "easeOut", "easeOut", "linear", EASE_BOUNCE, "easeOut", "linear"] },
      y: { duration: D, times: [0, 0.3552, 0.3786, 0.4034, 0.41, 0.4283, 1], ease: ["linear", "easeOut", "easeOut", "linear", "easeOut", "linear"] },
    },
  },
  kGonnaSlobDot3: {
    initial: { opacity: 0.35, y: 0 },
    animate: { opacity: [0.35, 0.35, 1, 0.35, 0, 0.35, 1, 1], y: [0, 0, -2.5, 0, 0, -2.5, -2.5] },
    transition: {
      opacity: { duration: D, times: [0, 0.3552, 0.3869, 0.4079, 0.41, 0.4117, 0.4366, 1], ease: ["linear", "easeOut", EASE_BOUNCE, EASE_BOUNCE, "easeOut", "easeOut", "linear"] },
      y: { duration: D, times: [0, 0.3552, 0.3869, 0.4079, 0.4117, 0.4366, 1], ease: ["linear", "easeOut", EASE_BOUNCE, "linear", "easeOut", "linear"] },
    },
  },
  alsoSendPhotosDot1: {
    initial: { opacity: 0.35, y: 0 },
    animate: { opacity: [0.35, 0.35, 1, 0.35, 0.35, 0, 1, 1], y: [0, 0, -2.5, 0, 0, -2.5, -2.5] },
    transition: {
      opacity: { duration: D, times: [0, 0.4276, 0.4428, 0.4676, 0.4769, 0.479, 0.4924, 1], ease: ["linear", "easeOut", "easeOut", "linear", EASE_BOUNCE, "easeOut", "linear"] },
      y: { duration: D, times: [0, 0.4276, 0.4428, 0.4676, 0.479, 0.4924, 1], ease: ["linear", "easeOut", "easeOut", "linear", "easeOut", "linear"] },
    },
  },
  alsoSendPhotosDot2: {
    initial: { opacity: 0.35, y: 0 },
    animate: { opacity: [0.35, 0.35, 1, 0.35, 0.35, 0, 1, 1], y: [0, 0, -2.5, 0, 0, -2.5, -2.5] },
    transition: {
      opacity: { duration: D, times: [0, 0.4276, 0.451, 0.4759, 0.4769, 0.479, 0.5007, 1], ease: ["linear", "easeOut", "easeOut", "linear", EASE_BOUNCE, "easeOut", "linear"] },
      y: { duration: D, times: [0, 0.4276, 0.451, 0.4759, 0.479, 0.5007, 1], ease: ["linear", "easeOut", "easeOut", "linear", "easeOut", "linear"] },
    },
  },
  alsoSendPhotosDot3: {
    initial: { opacity: 0.35, y: 0 },
    animate: { opacity: [0.35, 0.35, 1, 0.35, 0, 0.35, 1, 1], y: [0, 0, -2.5, 0, 0, -2.5, -2.5] },
    transition: {
      opacity: { duration: D, times: [0, 0.4276, 0.4593, 0.4769, 0.479, 0.4841, 0.509, 1], ease: ["linear", "easeOut", EASE_BOUNCE, EASE_BOUNCE, "easeOut", "easeOut", "linear"] },
      y: { duration: D, times: [0, 0.4276, 0.4593, 0.4769, 0.4841, 0.509, 1], ease: ["linear", "easeOut", EASE_BOUNCE, "linear", "easeOut", "linear"] },
    },
  },
};
