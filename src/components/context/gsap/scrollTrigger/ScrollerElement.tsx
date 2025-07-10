import React from "react";
import Image from "next/image";
import type { ScrollerElementType } from "./ScrollerTrigger";
interface ScrollerElementProps {
  item: ScrollerElementType;
}
const ScrollerElement = ({ item }: ScrollerElementProps) => {
  return (
    <section
      className="scrollerElement"
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        boxSizing: "border-box",
        overflow: "hidden",
        backgroundColor: item.color ? item.color : "#00000000",
      }}
    >
      {item.src ? (
        <Image
          width={item.width || 512}
          height={item.height || 512}
          alt={item.alt ? item.alt : "img"}
          src={item.src}
          loading="lazy"
          className={item.className}
          style={{ width: "100%", height: "auto" }}
        />
      ) : item.variant ? (
        <h1>Hello</h1>
      ) : null}
    </section>
  );
};

export default ScrollerElement;
