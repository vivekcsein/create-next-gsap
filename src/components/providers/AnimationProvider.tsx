"use client";

import { gsap } from "gsap";
import { createContext, type ReactNode, useContext, useRef } from "react";
import { AnimationStore } from "@/packages/configs/config.animation";

gsap.registerPlugin();

type AnimFn = (
  el: HTMLElement,
  tlRef: React.RefObject<gsap.core.Timeline | null>,
) => void;

export const animMap = {
  slideAnimation: AnimationStore.slideAnimation_v1 as AnimFn,
  fadeAnimation: AnimationStore.fadeAnimation_v1 as AnimFn,
  scaleAnimation: AnimationStore.scaleAnimation_v1 as AnimFn,
  slideUpwords: AnimationStore.slideUpwords_v1 as AnimFn,
  scaleBounceWords: AnimationStore.scaleBounceWords_v1 as AnimFn,
  rotateFlipWords: AnimationStore.rotateFlipWords_v1 as AnimFn,
  slideAlternateWords: AnimationStore.slideAlternateWords_v1 as AnimFn,
  pushUpWords: AnimationStore.pushUpWords_v1 as AnimFn,
  fadeCascadeWords: AnimationStore.fadeCascadeWords_v1 as AnimFn,
  layeredSlideReveal: AnimationStore.layeredSlideReveal_v1 as AnimFn,
  scrambleGlitch: AnimationStore.scrambleGlitch_v1 as AnimFn,
  scatterExplode: AnimationStore.scatterExplode_v1 as AnimFn,
  waveRipple: AnimationStore.waveRipple_v1 as AnimFn,
  typewriterBounce: AnimationStore.typewriterBounce_v1 as AnimFn,
  matrixStyle: AnimationStore.matrixStyle_v1 as AnimFn,
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

// biome-ignore lint/style/noNonNullAssertion: <>
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
      ]),
    ) as animMapType),
  };

  return (
    <AnimationContext.Provider value={value}>
      {children}
    </AnimationContext.Provider>
  );
};
