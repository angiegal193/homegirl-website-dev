"use client";

import { motion } from "motion/react";
import { cardAnims } from "./gettingReadyAnimations";

interface CardSpec {
  key: keyof typeof cardAnims;
  x: number;
  y: number;
  width: number;
  height: number;
  mask: string;
  photo: string;
  texture: string;
}

// Positions transcribed from Figma frame 391:2 metadata (each card's
// "subtle motion" wrapper bounds, in the shared ~1440x830 page canvas).
const CARDS: CardSpec[] = [
  { key: "card01", x: -48.9, y: 210.05, width: 320.8, height: 325.58, mask: "/getting-ready/card01-mask.svg", photo: "/getting-ready/card01-photo.webp", texture: "/getting-ready/texture-shared.png" },
  { key: "card02", x: 243.38, y: -36, width: 319.33, height: 332.63, mask: "/getting-ready/card02-mask.svg", photo: "/getting-ready/card02-photo.webp", texture: "/getting-ready/texture-shared.png" },
  { key: "card03", x: -48.9, y: -54.78, width: 337.62, height: 341.45, mask: "/getting-ready/card03-mask.svg", photo: "/getting-ready/card03-photo.webp", texture: "/getting-ready/texture-shared.png" },
  { key: "card04", x: 184.58, y: 191.63, width: 358.37, height: 362.45, mask: "/getting-ready/card04-mask.svg", photo: "/getting-ready/card04-photo.webp", texture: "/getting-ready/texture-shared.png" },
  { key: "card05", x: 507.5, y: -52.8, width: 316.44, height: 320.02, mask: "/getting-ready/card05-mask.svg", photo: "/getting-ready/card05-photo.webp", texture: "/getting-ready/texture-shared.png" },
  { key: "card06", x: 351.6, y: 523.72, width: 268.9, height: 271.0, mask: "/getting-ready/card06-mask.svg", photo: "/getting-ready/card06-photo.webp", texture: "/getting-ready/card06-texture.svg" },
  { key: "card07", x: 503.2, y: 229.67, width: 368.3, height: 371.16, mask: "/getting-ready/card07-mask.svg", photo: "/getting-ready/card07-photo.webp", texture: "/getting-ready/texture-shared.png" },
  { key: "card08", x: 591.18, y: 519.5, width: 339.72, height: 343.58, mask: "/getting-ready/card08-mask.svg", photo: "/getting-ready/card08-photo.webp", texture: "/getting-ready/texture-shared.png" },
];

/**
 * The 8 masked/rotated photo collage cards. Their subtle motion plays once
 * with the rest of the page and then holds its final state.
 */
export default function PhotoCollage() {
  return (
    <>
      {CARDS.map((card) => {
        const anim = cardAnims[card.key];
        return (
          <motion.div
            key={card.key}
            className="absolute"
            style={{ left: card.x, top: card.y, width: card.width, height: card.height }}
            initial={anim.initial}
            animate={anim.animate}
            transition={anim.transition}
          >
            <div
              className="relative size-full"
              style={{
                maskImage: `url("${card.mask}")`,
                maskSize: "100% 100%",
                maskRepeat: "no-repeat",
                WebkitMaskImage: `url("${card.mask}")`,
                WebkitMaskSize: "100% 100%",
                WebkitMaskRepeat: "no-repeat",
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={card.photo} alt="" className="absolute inset-0 size-full object-cover" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={card.texture} alt="" className="absolute inset-0 size-full object-cover opacity-90 mix-blend-overlay" />
            </div>
          </motion.div>
        );
      })}
    </>
  );
}
