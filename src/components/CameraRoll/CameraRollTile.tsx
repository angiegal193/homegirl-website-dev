import Image from "next/image";
import type { CameraRollPhoto } from "@/data/cameraRoll";

interface CameraRollTileProps {
  photo: CameraRollPhoto;
  onSelect: (photo: CameraRollPhoto) => void;
  mobile?: boolean;
}

export default function CameraRollTile({ photo, onSelect, mobile = false }: CameraRollTileProps) {
  return (
    <button
      type="button"
      onClick={() => onSelect(photo)}
      className="group relative block h-full w-full overflow-hidden bg-neutral-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
      style={mobile
        ? {
            gridColumn: `span ${photo.featured ? 2 : 1}`,
            gridRow: `span ${photo.featured ? 2 : 1}`,
          }
        : {
            gridColumn: `${photo.col} / span ${photo.colSpan}`,
            gridRow: `${photo.row} / span ${photo.rowSpan}`,
          }}
      aria-label={`Open photo ${photo.position}`}
    >
      <Image
        src={photo.thumbSrc}
        alt={`Camera roll photo ${photo.position}`}
        fill
        sizes={photo.featured ? "404px" : "200px"}
        className="object-cover transition-transform duration-300 ease-out group-hover:scale-105"
      />
      {photo.featured && (
        <span
          aria-hidden
          className="absolute bottom-2 right-2 text-[22px] font-bold leading-none text-[#ff2d55]"
        >
          ♥
        </span>
      )}
    </button>
  );
}
