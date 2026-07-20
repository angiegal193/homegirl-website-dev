import Image from "next/image";
import Nav from "@/components/Nav/Nav";
import HometimeStage from "@/components/HometimeStage/HometimeStage";
import ResponsivePage from "@/components/ResponsivePage/ResponsivePage";

export default function HometimePage() {
  return (
    <ResponsivePage desktop={<main className="relative h-screen h-dvh overflow-hidden bg-black">
      <Image
        src="/homepage/background.png"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/35" />
      <Nav active="hometime" />
      <HometimeStage />
    </main>} />
  );
}
