"use client";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useEffect, useLayoutEffect } from "react";
import { fade, scrollTriggerTimeline } from "./GSAPEffects";
import SplitAlphabet from "./SplitAlphabet";
import VerticalScroll from "../scrollTrigger/VerticalScroll";
const Tween = () => {
  gsap.registerPlugin(ScrollTrigger);
  gsap.registerEffect(fade);
  useEffect(() => {
    // const tl = gsap.timeline({ paused: true });
    const tl = gsap.timeline({
      paused: true,
      repeat: -1,
      repeatDelay: 1,
      yoyo: true,
    });
    const parent = document.querySelector(".Tween_Boxes") as HTMLDivElement;
    const childs = Array.from(parent.children);
    // tl.add("start")
    //   .to(childs[0], { duration: 2, x: 100, stagger: 0.1 }, "start")
    //   .to(childs[1], { duration: 1, y: 200 }, "+=10")
    //   .to(childs[2], { duration: 3, rotation: 360 }, "start");

    // const scrolling = scrollTriggerTimeline(child[0]);

    tl.to(childs[0], { duration: 2, x: 100, stagger: 0.1 }, ">")
      .to(childs[1], { duration: 1, y: 200 }, "+=1")
      .to(childs[2], { duration: 3, rotation: 360 }, "start");

    // const pin = gsap.to(childs[0], { duration: 2, x: 500 });
    // tl.add(pin);
    // tl.to(childs[0], { duration: 2, x: 500 })
    //   .to(childs[1], { duration: 2, x: 500 })
    //   .to(childs[2], { duration: 2, x: 500 });
    //sequenced one-after-the-other
    //notice that there's no semicolon!
    // tl.to(childs[0], { duration: 2, x: 500 })
    //   .addLabel("child1", 1)
    //   .fade(childs[1], { duration: 2, y: 100, x: 200 }, "+=2")
    //   .to(childs[2], { duration: 3, rotation: 360 });
    //scrolled into view and then trigger the animation

    // tl.restart();
    // tl.play();
    // tl.play("child1");
    // tl.timeScale(1).play();
    // tl.

    //assumes that an effect named "explode" has already been registered

    // gsap.effects.fade(childs[0]);
    // console.log(gsap.effects);

    //parent on scrolltrigger

    // let ctx = gsap.context(() => {
    //   const offsetwidth = parent.offsetWidth;

    //   gsap.to(parent, {
    //     scrollTrigger: {
    //       trigger: parent,
    //       toggleActions: "play none none reverse",
    //       markers: {
    //         startColor: "blue",
    //         endColor: "white",
    //         fontSize: "40px",
    //         indent: 20,
    //       },
    //       pin: true,
    //       scrub: 1,
    //       start: "bottom center",
    //       end: () => `+=` + offsetwidth,
    //     },
    //   });
    // }, parent);

    // gsap.to("#tag", {
    //   duration: 2,
    //   innerHTML: "thank you for waiting",
    //   delay: 1,
    // });

    // return () => {
    //   tl.kill();
    // };
  }, []);

  return (
    <>
      <div className="fullscreenn">
        <h1 className="text-9xl text-blue-700 text-center  w-full bg-red-400 opacity-0 textgsap">
          Hello Vivek
        </h1>
      </div>
      <div className="Tween_Boxes">
        <div></div>
        <div></div>
        <div></div>
      </div>
      <SplitAlphabet selector={".textgsap"} />
      <VerticalScroll selector={".Tween_Boxes"} />
    </>
  );
};

export default Tween;
