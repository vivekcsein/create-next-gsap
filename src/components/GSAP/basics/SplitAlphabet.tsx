"use client";
import React, { useEffect } from "react";
import SplitType from "split-type";
import gsap from "gsap";
import { spliteffect } from "../basics/GSAPEffects";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
gsap.registerEffect(spliteffect);
type SplitAlphabetProps = {
  selector: string;
};
const SplitAlphabet = ({ selector }: SplitAlphabetProps) => {
  useEffect(() => {
    // let split = SplitText.create("h1", { type: "chars" });
    const item = document.querySelector(selector) as HTMLDivElement;
    let split = SplitType.create(item, { types: "chars" });
    // const tl = gsap.timeline({ paused: true });
    let tl = gsap.timeline({
      paused: true,
      scrollTrigger: {
        trigger: item,
        toggleActions: "restart reset restart reset",
        // markers: {
        //   startColor: "blue",
        //   endColor: "white",
        //   fontSize: "40px",
        //   indent: 20,
        // },
        pin: true,
        scrub: 1,
        start: "top top",
        end: "bottom top",
      },
    });
    tl.add("start")
      .from(
        item,
        {
          opacity: 0,
        },
        "start"
      )
      .to(
        item,
        {
          opacity: 1,
        },
        "start"
      )
      .scrambleSplit(split, "start")
      .fromTo(
        split.chars,
        {
          duration: 0.5,
          y: "random(-400, 400)",
          x: "random(-200, 200)",
          stagger: 1,
          rotateX: "random(-360, 360)",
          rotateY: "random(-360, 360)",
          rotateZ: "random(-360, 360)",
          // immediateRender: true,
        },
        {
          x: 0,
          y: 0,
          rotateX: 0,
          rotateY: 0,
          rotateZ: 10,
          color: "random([red, blue, green,yellow,purple])",
        },
        "start"
      );
    // .to(tag, {
    //   duration: 2,
    //   text: "thank you for waiting",
    //   delay: 1,
    // });

    tl.play();

    return () => {
      tl.kill();
    };
  }, []);
  return <></>;
};

export default SplitAlphabet;
