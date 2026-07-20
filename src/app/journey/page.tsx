import Journey from "@/components/Journey/Journey";
import ResponsivePage from "@/components/ResponsivePage/ResponsivePage";
import MobileJourney from "@/components/MobileJourney/MobileJourney";

export default function JourneyPage() {
  return <ResponsivePage desktop={<Journey />} mobile={<MobileJourney />} />;
}
