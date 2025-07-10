"use client";
import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { useAnimationContext } from "../providers/Animationprovider";

const Animate_text = () => {
  const targetRef = useRef<HTMLHeadingElement>(null);
  const target2Ref = useRef<HTMLHeadingElement>(null);
  const { resetAnimation, waveRipple, matrixStyle } = useAnimationContext();

  useGSAP(() => {
    if (targetRef.current) {
      waveRipple(targetRef.current);
    }
    if (target2Ref.current) {
      matrixStyle(target2Ref.current);
    }
    return {
      onEnter: () => {
        resetAnimation(targetRef.current as HTMLHeadingElement);
        resetAnimation(target2Ref.current as HTMLHeadingElement);
      },
    };
  });

  return (
    <>
      <div ref={targetRef} className="text-4xl gradient-text">
        Hello World I love you
      </div>
      <div ref={target2Ref} className="text-4xl gradient-text">
        I love you baby
      </div>
    </>
  );
};

export default Animate_text;
