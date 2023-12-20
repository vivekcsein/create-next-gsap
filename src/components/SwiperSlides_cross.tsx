import Image from "next/image";
import React from "react";

interface SliderElementProps {
  item: {
    id: String;
    styleClass: string;
    imgSrc: string;
    alt: string;
    color: string;
  };
}

const SwiperSlides_cross = ({ item }: SliderElementProps) => {
  return (
    <section
      className="elem_cross"
      style={{ width: "100%", height: "auto", position: "absolute" }}
    >
      <Image
        width={1440}
        height={650}
        alt={item.alt}
        src={item.imgSrc}
        style={{ width: "100%", height: "auto" }}
      />
    </section>
  );
};

export default SwiperSlides_cross;
