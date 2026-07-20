import MobileTakeaway from "@/components/MobileTakeaway/MobileTakeaway";
import Takeaway from "@/components/Takeaway/Takeaway";
import ResponsivePage from "@/components/ResponsivePage/ResponsivePage";

export default function TakeawayPage() {
  return <ResponsivePage desktop={<Takeaway />} mobile={<MobileTakeaway />} />;
}
