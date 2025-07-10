// import Scrambly from "@/components/context/gsap/basics/Scrambly";
// import SplitAlphabet from "@/components/context/gsap/basics/SplitAlphabet";
// import Tween from "@/components/context/gsap/basics/Tween";
// import Animate_text from "@/components/animations/Animate_text";

import ScrollerTrigger from "@/components/context/gsap/scrollTrigger/ScrollerTrigger";
import { triggerData } from "@/libs/configs/config.gsap";

const GsapPage = () => {
  return (
    <div>
      <ScrollerTrigger
        triggerData={triggerData}
        // paddTop="100px"
        // paddBot="100px"
      />
      {/* <Tween /> */}
      {/* <Animate_text /> */}
      {/* <div className="lion">Hello i am lion</div> */}
      {/* <Scrambly selector=".lion" /> */}
      {/* <SplitAlphabet selector=".lion" /> */}
    </div>
  );
};

export default GsapPage;
