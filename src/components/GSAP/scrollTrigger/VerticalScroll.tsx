"use client";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useEffect } from "react";
import ScrollerElement from "./ScrollerElement";

gsap.registerPlugin(ScrollTrigger);
type VerticalScrollProps = {
  selector: string;
};

const VerticalScroll = ({ selector }: VerticalScrollProps) => {
  useEffect(() => {
    const item = document.querySelector(selector) as HTMLDivElement;
    const childs = Array.from(item.children);
    let tl = gsap.timeline({
      paused: true,
      scrollTrigger: {
        trigger: item,
        toggleActions: "play reset restart complete",
        // toggleActions: "play play resume complete",
        markers: {
          startColor: "blue",
          endColor: "white",
          fontSize: "40px",
          indent: 20,
        },
        // pin: true,
        // scrub: 1,
        start: "top 80%",
        end: "bottom 80%",
      },
    });
    tl.add("start")
      .to(childs[0], { duration: 2, x: 500, stagger: 0.1 }, "start")
      .to(childs[1], { duration: 1, y: 200 }, "+=1")
      .to(childs[2], { duration: 3, rotation: 360 }, "start");

    return () => {
      tl.kill();
    };
  }, []);
  return <></>;
};

export default VerticalScroll;
