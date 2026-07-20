import GettingReadyPreview from "@/components/GettingReadyPreview/GettingReadyPreview";
import ResponsivePage from "@/components/ResponsivePage/ResponsivePage";

export default function GettingReadyPage() {
  return <ResponsivePage desktop={<GettingReadyPreview />} />;
}
