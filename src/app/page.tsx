// import ScrollerTrigger from "@/components/scrollTrigger/ScrollerTrigger";
import SwiperSlider from "@/components/slider/SwiperSlider";
import { sliderData } from "@/libs/sliderData";
import ScrollerTrigger from "@/components/scrollTrigger/ScrollerTrigger";

export default function Home() {
  return (
    <main>
      <ScrollerTrigger triggerData={sliderData} />
      <SwiperSlider sliderData={sliderData} sliderAnimTime={400} />
    </main>
  );
}
