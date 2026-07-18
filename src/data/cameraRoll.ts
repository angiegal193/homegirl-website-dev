export interface CameraRollPhoto {
  /** 1-40, matches the Figma tile order (frame 308:4) */
  position: number;
  featured: boolean;
  thumbSrc: string;
  lightboxSrc: string;
  /** Grid placement, replicated pixel-for-pixel from the Figma collage layout */
  col: number;
  row: number;
  colSpan: number;
  rowSpan: number;
  /**
   * TODO: no caption copy was provided for any tile yet. Empty string is a
   * placeholder — the caption bar in the expand state will render blank
   * until these are filled in.
   */
  caption: string;
}

// position -> [hometime asset id, col, row, featured]
const LAYOUT: Array<[number, string, number, number, boolean]> = [
  [1, "23", 1, 1, true],
  [2, "24", 3, 1, false],
  [3, "22", 4, 1, false],
  [4, "21", 5, 1, false],
  [5, "20", 6, 1, false],
  [6, "19", 3, 2, false],
  [7, "02", 4, 2, false],
  [8, "13", 5, 2, true],
  [9, "04", 1, 3, false],
  [10, "40", 2, 3, false],
  [11, "03", 3, 3, false],
  [12, "11", 4, 3, false],
  [13, "14", 1, 4, false],
  [14, "12", 2, 4, true],
  [15, "15", 4, 4, false],
  [16, "16", 5, 4, false],
  [17, "05", 6, 4, false],
  [18, "06", 1, 5, false],
  [19, "07a", 4, 5, false],
  [20, "08", 5, 5, false],
  [21, "17", 6, 5, false],
  [22, "18", 1, 6, false],
  [23, "09", 2, 6, true],
  [24, "10", 4, 6, false],
  [25, "39", 5, 6, false],
  [26, "37", 6, 6, false],
  [27, "36", 1, 7, false],
  [28, "01", 4, 7, false],
  [29, "35", 5, 7, false],
  [30, "34", 6, 7, false],
  [31, "28", 1, 8, false],
  [32, "38", 2, 8, true],
  [33, "30", 4, 8, false],
  [34, "29", 5, 8, false],
  [35, "32", 6, 8, false],
  [36, "33", 1, 9, false],
  [37, "31", 4, 9, false],
  [38, "27", 5, 9, false],
  [39, "25", 6, 9, false],
  [40, "26", 1, 10, false],
];

export const cameraRollPhotos: CameraRollPhoto[] = LAYOUT.map(
  ([position, , col, row, featured]) => {
    const suffix = featured ? "-featured" : "";
    const name = `camera-roll-${String(position).padStart(2, "0")}${suffix}.webp`;
    return {
      position,
      featured,
      thumbSrc: `/camera-roll/thumb/${name}`,
      lightboxSrc: `/camera-roll/lightbox/${name}`,
      col,
      row,
      colSpan: featured ? 2 : 1,
      rowSpan: featured ? 2 : 1,
      caption: "",
    };
  }
);
