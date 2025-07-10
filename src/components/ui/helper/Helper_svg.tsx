import { heartIcon, starIcon } from "@/libs/configs/config.images";
import React from "react";

export type type_readonly = "readonly";
export type type_readwrite = "readwrite";
export type svg_Rating = "Rating";
export type svg_Popup = "Popup";
export type svg_Default = "Default";

const primaryColor = "#DD00FF";
const bgColor = "transparent";

interface svgProps {
  variant?: svg_Rating | svg_Popup | svg_Default;
  color?: string;
  bgcolor?: string;
  show?: number;
  path?: string;
  size?: number;
  type?: type_readonly | type_readwrite;
}
interface svgDataProps {
  xSize: number;
  fillcolor: string;
  sidecolor: string;
  svgpath: string;
  svgsize: number;
  svgtype: type_readonly | type_readwrite;
}

const Helper_svg = ({
  variant,
  color,
  bgcolor,
  show,
  path,
  size,
  type,
}: svgProps) => {
  const svgData: svgDataProps = {
    xSize: show ? (show <= 0 ? 0 : show >= 100 ? 511 : (show * 512) / 100) : 0,
    fillcolor: color ? color : primaryColor,
    sidecolor: bgcolor ? bgcolor : bgColor,
    svgpath: path ? path : variant && variant == "Popup" ? heartIcon : starIcon,
    svgsize: size ? size : 256,
    svgtype: type ? type : "readonly",
  };
  const svg_variant = variant ? variant : "Default";

  switch (svg_variant) {
    case "Rating":
      return <SVG_Rating svgData={svgData} />;
    case "Popup":
      return <SVG_Popup svgData={svgData} />;

    case "Default":
      return <SVG_Rating svgData={svgData} />;

    default:
      <></>;
  }
};

export default Helper_svg;

type svg_RatingProps = {
  svgData: svgDataProps;
};

const SVG_Rating = ({ svgData }: svg_RatingProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      width={svgData.svgsize}
      height={svgData.svgsize}
      fill="none"
    >
      <path
        d={svgData.svgpath}
        fill={`url(#starsvg${svgData.xSize}${svgData.fillcolor})`}
        stroke={svgData.fillcolor}
        strokeWidth="10"
      />
      <defs>
        <linearGradient
          id={`starsvg${svgData.xSize}${svgData.fillcolor}`}
          x1={svgData.xSize}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor={svgData.fillcolor} />
          <stop stopColor={svgData.sidecolor} />
        </linearGradient>
      </defs>
    </svg>
  );
};

type svg_PopupProps = {
  svgData: svgDataProps;
};

const SVG_Popup = ({ svgData }: svg_PopupProps) => {
  const togglePopup = (target: EventTarget) => {
    const elem = target as HTMLDivElement;
    const child1 = elem.children[0] as HTMLElement;
    const child2 = elem.children[1] as HTMLElement;

    if (child2.style.opacity == "1") {
      child1.style.stroke = svgData.fillcolor;
      child2.style.opacity = "0";
      child2.style.transform = "scale(0.33)";
      child2.style.transition = " all 0.33s ease";
    } else {
      child1.style.stroke = "transparent";
      child2.style.opacity = "1";
      child2.style.transform = "none";
      child2.style.transition = "all 0.5s cubic-bezier(0.19, 2.41, 0.45, 0.94)";
    }
  };
  return (
    <>
      <svg
        viewBox="0 0 512 512"
        width={svgData.svgsize}
        height={svgData.svgsize}
        onClick={(e) => {
          e.preventDefault();
          togglePopup(e.currentTarget);
        }}
        style={{
          overflow: "visible",
        }}
      >
        <use
          xlinkHref={`#heartsvg${svgData.xSize}${svgData.fillcolor}`}
          style={{
            fill: "transparent",
            stroke: svgData.fillcolor,
            strokeWidth: 10,
            msTransition: " all 0.33s ease",
          }}
        />
        <use
          xlinkHref={`#heartsvg${svgData.xSize}${svgData.fillcolor}`}
          style={{
            fill: svgData.fillcolor,
            stroke: svgData.fillcolor,
            opacity: 0,
            transform: "scale(0.33)",
            transformOrigin: "center",
          }}
        />
      </svg>

      <svg
        viewBox="0 0 512 512"
        width={svgData.svgsize}
        height={svgData.svgsize}
        style={{ display: "none" }}
      >
        <defs>
          <path
            id={`heartsvg${svgData.xSize}${svgData.fillcolor}`}
            d={svgData.svgpath ? svgData.svgpath : heartIcon}
          />
        </defs>
      </svg>
    </>
  );
};
