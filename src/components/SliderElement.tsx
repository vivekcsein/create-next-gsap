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

const SliderElement = ({ item }: SliderElementProps) => {
  return (
    <section className="elem">
      <Image
        width={1440}
        height={650}
        alt={item.alt}
        src={item.imgSrc}
        className={item.styleClass}
        style={{ width: "100%", height: "auto" }}
      />
    </section>
  );
};

export default SliderElement;
