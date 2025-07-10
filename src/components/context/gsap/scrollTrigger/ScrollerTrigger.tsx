"use client";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useRef } from "react";
import ScrollerElement from "./ScrollerElement";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

type triggerData = Array<ScrollerElementType>;
export interface ScrollerElementType {
  id: string;
  className?: string;
  src?: string;
  alt?: string;
  color?: string;
  variant?: string;
  width?: number;
  height?: number;
}

type GsapScrollTriggerProps = {
  triggerData: triggerData;
  paddTop?: string;
  paddBot?: string;
};

const ScrollerTrigger = ({
  triggerData,
  paddTop = "0px",
  paddBot = "0px",
}: GsapScrollTriggerProps) => {
  const component = useRef(null);
  const slider = useRef(null);
  const scrollerWidth = (triggerData.length * 100).toString().concat("%");

  useGSAP(() => {
    const ctx = gsap.context(() => {
      const panels = gsap.utils.toArray(".scrollerElement");
      const scrollerNow = document.querySelector(".scroller") as HTMLDivElement;
      const offsetwidth = scrollerNow.offsetWidth;

      gsap.to(panels, {
        xPercent: -100 * (panels.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: slider.current,
          // markers: {
          //   startColor: "blue",
          //   endColor: "white",
          //   fontSize: "40px",
          //   indent: 20,
          // },
          pin: true,
          scrub: 1,
          snap: 1 / (panels.length - 1),
          end: () => `+=` + offsetwidth,
        },
      });
    }, component);
    return () => ctx.revert();
  });

  return (
    <div className="overflow-x-hidden" ref={component}>
      <div
        ref={slider}
        className="scroller"
        style={{
          width: scrollerWidth,
          height: "100vh",
          display: "flex",
          flexWrap: "nowrap",
          paddingTop: paddTop,
          paddingBottom: paddBot,
        }}
      >
        {triggerData.map((item, index) => {
          return <ScrollerElement key={index} item={item} />;
        })}
      </div>
    </div>
  );
};

export default ScrollerTrigger;
