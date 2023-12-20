"use client";
import React, { useEffect, useState } from "react";
import { sliderData, animationTime } from "../libs/constants";
import SliderElement from "./SliderElement";
import { Swiper, SwiperSlide } from "swiper/react";
import gsap from "gsap";
import "swiper/css";
import "swiper/css/effect-creative";

import { EffectCreative } from "swiper/modules";
import SwiperSlides_cross from "./SwiperSlides_cross";

const SwiperSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  let tl: gsap.core.Timeline;
  let slide: gsap.core.Tween;
  let elem_cross: HTMLDivElement;

  const handleSlideChange = (count: string) => {
    if (count === "next") {
      setCurrentSlide((prev) => {
        let nextIndex = prev + 1;
        if (nextIndex >= sliderData.length) {
          nextIndex = 0;
        }
        return nextIndex;
      });
    } else if (count === "prev") {
      setCurrentSlide((prev) => {
        let nextIndex = prev - 1;
        if (nextIndex < 0) {
          nextIndex = sliderData.length - 1;
        }
        return nextIndex;
      });
    }
  };

  const funAnim = (item: HTMLDivElement, count: string) => {
    tl = gsap.timeline({ repeat: 0 });
    slide = gsap.fromTo(
      item,
      { x: "100%", duration: animationTime / 1000, ease: "expo" },
      {
        x: "200%",
        onComplete: completeAnim,
        onCompleteParams: [count],
      }
    );
    tl.add("start");
    tl.add(slide, "start");
  };

  const completeAnim = (count: string) => {
    handleSlideChange(count);
  };

  useEffect(() => {
    const elemSlide = document.getElementsByClassName(
      "SwiperSlides_cross"
    )[0] as HTMLElement;
    elem_cross = elemSlide.querySelector(".elem_cross") as HTMLDivElement;
  }, [currentSlide]);

  return (
    <div className="container relative overflow-hidden">
      <Swiper
        grabCursor={true}
        speed={1000}
        effect={"creative"}
        creativeEffect={{
          prev: {
            translate: ["0%", 0, 0],
            scale: 1.2,
          },
          next: {
            translate: ["0%", 0, 0],
            scale: 1.2,
          },
        }}
        onSlideNextTransitionStart={() => {
          funAnim(elem_cross, "next");
        }}
        onSlidePrevTransitionStart={() => {
          funAnim(elem_cross, "prev");
        }}
        loop={true}
        modules={[EffectCreative]}
        style={{ width: "100%", height: "650px", overflow: "hidden" }}
      >
        {sliderData.map((item) => {
          return (
            <SwiperSlide key={item.id}>
              <SliderElement item={item} />
            </SwiperSlide>
          );
        })}
        <div
          className="SwiperSlides_cross"
          style={{
            width: "100%",
            height: "auto",
            position: "absolute",
            left: "-100%",
            top: "0",
            zIndex: "1",
          }}
        >
          <SwiperSlides_cross item={sliderData[currentSlide]} />
        </div>
      </Swiper>
    </div>
  );
};

export default SwiperSlider;
