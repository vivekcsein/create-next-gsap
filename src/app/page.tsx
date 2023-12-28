import SwiperSlider from "../components/Swiper/slider/SwiperSlider";
import { sliderData } from "../libs/sliderData";
import ScrollerTrigger from "../components/GSAP/scrollTrigger/ScrollerTrigger";
import Tween from "../components/GSAP/basics/Tween";
import SplitAlphabet from "../components/GSAP/basics/SplitAlphabet";
import Scrambly from "../components/GSAP/basics/Scrambly";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <div className="text-8xl w-full h-screen overflow-x-hidden">
        <h1 id="hello" className="text-left text-green-700">
          Hello my dear You are Hacked..
        </h1>
        <Scrambly selector={"#hello"} />
      </div>
      <ScrollerTrigger triggerData={sliderData} />
      <SwiperSlider sliderData={sliderData} sliderAnimTime={400} />
      {/* <Tween /> */}
    </main>
  );
}
