/**
 * Purely decorative phone-mockup chrome, copied from Figma frame 308:4
 * (node 308:11). Values are hardcoded on purpose — this sells the "camera
 * roll" framing visually but must never look like it's trying to be a real,
 * live status bar (no clock, no actual signal/battery state).
 */
export default function CameraRollStatusBar() {
  return (
    <div className="flex items-center justify-between px-[26px] pb-2 pt-4 text-white">
      <span className="text-[16px] font-semibold leading-none">16:47</span>

      <div className="flex items-center gap-[6px]">
        <div className="flex items-end gap-[3px]">
          <span className="h-3 w-1 rounded-sm bg-white" />
          <span className="h-4 w-1 rounded-sm bg-white" />
          <span className="h-5 w-1 rounded-sm bg-white" />
          <span className="h-6 w-1 rounded-sm bg-white/35" />
        </div>

        <svg
          width="16"
          height="12"
          viewBox="0 0 16 12"
          fill="none"
          aria-hidden
          className="mx-1"
        >
          <path
            d="M8 10.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"
            fill="white"
          />
          <path
            d="M5.1 7.4a4.1 4.1 0 0 1 5.8 0"
            stroke="white"
            strokeWidth="1.3"
            strokeLinecap="round"
          />
          <path
            d="M2.6 4.9a7.6 7.6 0 0 1 10.8 0"
            stroke="white"
            strokeOpacity="0.55"
            strokeWidth="1.3"
            strokeLinecap="round"
          />
        </svg>

        <div className="relative h-[14px] w-[30px] rounded-[4px] border-[1.5px] border-white/70">
          <div className="absolute left-[2px] top-[2px] h-[8px] w-[18px] rounded-[2px] bg-white" />
        </div>
        <span className="h-[6px] w-[3px] rounded-[1px] bg-white/55" />
      </div>
    </div>
  );
}
