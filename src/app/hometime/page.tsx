import Nav from "@/components/Nav/Nav";
import HometimeChat from "@/components/HometimeChat/HometimeChat";
import CameraRoll from "@/components/CameraRoll/CameraRoll";

export default function HometimePage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-black">
      {/*
        TODO: Figma's background is a bokeh/selfie photo ("replace with
        high-res"). Using a dark gradient placeholder until a specific shot
        is picked — swap this div for an <Image> once confirmed.
      */}
      <div className="absolute inset-0 bg-gradient-to-br from-neutral-900 via-black to-neutral-900" />

      <Nav active="hometime" />

      <div className="relative mx-auto flex max-w-[1567px] flex-col items-start gap-16 px-[18px] pb-24 pt-[112px] lg:flex-row lg:gap-12">
        <HometimeChat />
        <div className="w-full lg:flex-1">
          <CameraRoll />
        </div>
      </div>
    </main>
  );
}
