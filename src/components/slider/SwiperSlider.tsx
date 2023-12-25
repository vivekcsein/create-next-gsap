"use client";
import React, { useEffect, useRef, useState } from "react";
// import { sliderData, sliderAnimTime } from "../../../libs/sliderData";
import SliderElement from "./SliderElement";
import { Swiper, SwiperSlide } from "swiper/react";
import gsap from "gsap";
import "swiper/css";
import "swiper/css/effect-creative";
import "swiper/css/navigation";

import { Autoplay, EffectCreative } from "swiper/modules";
import { Navigation } from "swiper/modules";
import SliderOverlay from "./SliderOverlay";

interface SwiperSlider {
  sliderData: sliderData;
  sliderAnimTime: number;
}

const SwiperSlider = ({ sliderData, sliderAnimTime }: SwiperSlider) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const elem_overlay = useRef<HTMLDivElement | null>(null);
  let tl: gsap.core.Timeline;
  let slide: gsap.core.Tween;
  // let elem_overlay: HTMLDivElement;

  const funAnim = (item: HTMLDivElement | null) => {
    tl = gsap.timeline({ repeat: 0 });
    slide = gsap.fromTo(
      item,
      {
        x: "100%",
        // scaleX: 1,
        duration: sliderAnimTime / 1000,
        ease: "power1.in",
      },
      {
        x: "200%",
        // scaleX: 0,
      }
    );
    tl.add("start");
    tl.add(slide, "start");
  };

  useEffect(() => {
    const elemSlide = document.getElementsByClassName(
      "SwiperSlides_overlay"
    )[0] as HTMLElement;
    // elem_overlay.current = elemSlide.querySelector(
    //   ".elem_overlay"
    // ) as HTMLDivElement;
  }, [currentSlide]);

  return (
    <Swiper
      grabCursor={true}
      speed={sliderAnimTime}
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
      loop={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      //slide start
      onSlideNextTransitionStart={() => {
        funAnim(elem_overlay?.current);
      }}
      onSlidePrevTransitionStart={() => {
        funAnim(elem_overlay?.current);
      }}
      //slide end
      onSlideNextTransitionEnd={(swiper) => {
        setCurrentSlide(swiper.realIndex);
      }}
      onSlidePrevTransitionEnd={(swiper) => {
        setCurrentSlide(swiper.realIndex);
      }}
      navigation={true}
      modules={[EffectCreative, Navigation, Autoplay]}
      className="swiperslider"
    >
      {sliderData.map((item, index) => {
        return (
          <SwiperSlide key={index}>
            <SliderElement item={item} />
          </SwiperSlide>
        );
      })}
      <div
        className="SwiperSlides_overlay"
        style={{
          width: "100%",
          height: "auto",
          position: "absolute",
          left: "-100%",
          top: "0",
          zIndex: "1",
        }}
      >
        <SliderOverlay
          item={sliderData[currentSlide]}
          refObject={elem_overlay}
        />
      </div>
    </Swiper>
  );
};

export default SwiperSlider;
