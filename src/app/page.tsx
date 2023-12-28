import SwiperSlider from "../components/GSAP/slider/SwiperSlider";
import { sliderData } from "../libs/sliderData";
import ScrollerTrigger from "../components/GSAP/scrollTrigger/ScrollerTrigger";
import Tween from "../components/GSAP/basics/Tween";
import SplitAlphabet from "../components/GSAP/basics/SplitAlphabet";
import Scrambly from "@/components/GSAP/basics/Scrambly";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      {/* <Tween /> */}
      {/* <ScrollerTrigger triggerData={sliderData} />
      <SwiperSlider sliderData={sliderData} sliderAnimTime={400} /> */}
      <h1 id="hello" className="text-8xl w-full h-auto">
        Hello my dear You are Hacked
      </h1>
      <Scrambly selector={"#hello"} />
    </main>
  );
}
