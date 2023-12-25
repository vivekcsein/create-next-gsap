import Image from "next/image";
import React from "react";

interface SliderOverlayProps {
  item: sliderElement;
}

const SliderOverlay = ({ item }: SliderOverlayProps) => {
  return (
    <section
      className="elem_overlay"
      style={{ width: "100%", height: "auto", position: "absolute" }}
    >
      <Image
        width={item.imgWidth}
        height={item.imgHeight}
        alt={item.alt}
        src={item.imgSrc}
        style={{ width: "100%", height: "auto" }}
      />
    </section>
  );
};

export default SliderOverlay;
