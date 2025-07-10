"use client";
import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Animate_header = ({
  refObject,
}: {
  refObject: React.RefObject<HTMLDivElement | null>;
}) => {
  useEffect(() => {
    if (!refObject?.current) return;

    const tl = gsap.timeline({ paused: true });

    tl.addLabel("onLoading");
    tl.fromTo(
      refObject.current,
      {
        opacity: 0,
        y: -40,
      },
      {
        opacity: 1,
        y: 0,
        scaleY: 1,
        duration: 1,
      }
    );
    tl.play("onLoading");

    return () => {
      tl.scrollTrigger?.kill();
      tl.kill();
    };
  }, [refObject]);

  useEffect(() => {
    const tl = gsap.timeline({
      paused: true,

      scrollTrigger: {
        trigger: refObject.current,
        toggleActions: "onScroll none onScroll none",
        // markers: {
        //   startColor: "pink",
        //   endColor: "green",
        //   fontSize: "40px",
        //   indent: 20,
        // },
        // pin: true,
        scrub: 1,
        start: "top top",
        end: "bottom top",
      },
    });
    tl.addLabel("onScroll");
    tl.to(refObject.current, {
      height: "6vh",
    });

    return () => {
      tl.scrollTrigger?.kill();
      tl.kill();
    };
  }, [refObject]);

  return null;
};

export default Animate_header;
