import Bar from "@/components/Bar/Bar";
import MobileBar from "@/components/MobileBar/MobileBar";
import ResponsivePage from "@/components/ResponsivePage/ResponsivePage";

export default function BarPage() {
  return <ResponsivePage desktop={<Bar />} mobile={<MobileBar />} />;
}
