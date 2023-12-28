import Image from "next/image";
import React from "react";
interface SliderElementProps {
  item: sliderElement;
}

const SliderElement = ({ item }: SliderElementProps) => {
  return (
    <section className="elem" style={{ width: "100%", height: "100%" }}>
      <Image
        width={item.imgWidth}
        height={item.imgHeight}
        alt={item.alt}
        src={item.imgSrc}
        loading="lazy"
        className={item.styleClass}
        style={{ width: "100%", height: "auto" }}
      />
    </section>
  );
};

export default SliderElement;
