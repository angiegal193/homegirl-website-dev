import GettingReadyPreview from "@/components/GettingReadyPreview/GettingReadyPreview";
import ResponsivePage from "@/components/ResponsivePage/ResponsivePage";
import MobileGettingReady from "@/components/MobileGettingReady/MobileGettingReady";

export default function GettingReadyPage() {
  return <ResponsivePage desktop={<GettingReadyPreview />} mobile={<MobileGettingReady />} />;
}
