"use client";

import { gsap } from "gsap";
import { createContext, useContext, useRef, ReactNode } from "react";
import { Animation_store } from "@/libs/configs/config.animation";

gsap.registerPlugin();

type AnimFn = (
  el: HTMLElement,
  tlRef: React.RefObject<gsap.core.Timeline | null>
) => void;

export const animMap = {
  slideAnimation: Animation_store.slideAnimation_v1 as AnimFn,
  fadeAnimation: Animation_store.fadeAnimation_v1 as AnimFn,
  scaleAnimation: Animation_store.scaleAnimation_v1 as AnimFn,
  slideUpwords: Animation_store.slideUpwords_v1 as AnimFn,
  scaleBounceWords: Animation_store.scaleBounceWords_v1 as AnimFn,
  rotateFlipWords: Animation_store.rotateFlipWords_v1 as AnimFn,
  slideAlternateWords: Animation_store.slideAlternateWords_v1 as AnimFn,
  pushUpWords: Animation_store.pushUpWords_v1 as AnimFn,
  fadeCascadeWords: Animation_store.fadeCascadeWords_v1 as AnimFn,
  layeredSlideReveal: Animation_store.layeredSlideReveal_v1 as AnimFn,
  scrambleGlitch: Animation_store.scrambleGlitch_v1 as AnimFn,
  scatterExplode: Animation_store.scatterExplode_v1 as AnimFn,
  waveRipple: Animation_store.waveRipple_v1 as AnimFn,
  typewriterBounce: Animation_store.typewriterBounce_v1 as AnimFn,
  matrixStyle: Animation_store.matrixStyle_v1 as AnimFn,
};

type animMapType = {
  slideAnimation(el: HTMLElement): void;
  fadeAnimation(el: HTMLElement): void;
  scaleAnimation(el: HTMLElement): void;
  slideUpwords(el: HTMLElement): void;
  scaleBounceWords(el: HTMLElement): void;
  rotateFlipWords(el: HTMLElement): void;
  slideAlternateWords(el: HTMLElement): void;
  pushUpWords(el: HTMLElement): void;
  fadeCascadeWords(el: HTMLElement): void;
  layeredSlideReveal(el: HTMLElement): void;
  scrambleGlitch(el: HTMLElement): void;
  scatterExplode(el: HTMLElement): void;
  waveRipple(el: HTMLElement): void;
  typewriterBounce(el: HTMLElement): void;
  matrixStyle(el: HTMLElement): void;
};

interface AnimationContextType extends animMapType {
  resetAnimation(el: HTMLElement): void;
}

const AnimationContext = createContext<AnimationContextType>(undefined!);

export const useAnimationContext = () => {
  const ctx = useContext(AnimationContext);
  if (!ctx)
    throw new Error("useAnimationContext must be inside AnimationProvider");
  return ctx;
};

export const AnimationProvider = ({ children }: { children: ReactNode }) => {
  const tlRef = useRef<gsap.core.Timeline | null>(null);

  const resetAnimation = (el: HTMLElement) => {
    gsap.killTweensOf(el);
    gsap.set(el, { opacity: 1, scale: 1, x: 0, y: 0 });
  };

  const value: AnimationContextType = {
    resetAnimation,
    ...(Object.fromEntries(
      Object.entries(animMap).map(([key, fn]) => [
        key,
        (el: HTMLElement) => fn(el, tlRef),
      ])
    ) as animMapType),
  };

  return (
    <AnimationContext.Provider value={value}>
      {children}
    </AnimationContext.Provider>
  );
};
