"use client";
import React, { useEffect } from "react";
import SplitType from "split-type";
import gsap from "gsap";
type ScramblyProps = {
  selector: string;
};

const Scrambly = ({ selector }: ScramblyProps) => {
  useEffect(() => {
    const item = document.querySelector(selector) as HTMLDivElement;
    let split = SplitType.create(item, { types: "chars" });

    split.chars?.forEach((elem, index) => {
      const tl = gsap.timeline({
        repeatRefresh: true,
        repeat: index * 5 + index,
      });
      tl.from(elem, {
        duration: 0.1,
        ease: "power3",
        rotateX: "random(-360, 360)",
        innerHTML:
          "random([a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,1,2,3,4,5,6,7,8,9,0)",
        color: "random([red, blue, green,yellow,purple])",
      });
    });
  }, []);

  return <></>;
};

export default Scrambly;
