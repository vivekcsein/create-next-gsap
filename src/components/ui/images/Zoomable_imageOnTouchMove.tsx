"use client";
import type React from "react";
import { useState, useRef } from "react";
import Image from "next/image";

interface ImageZoomProps {
  src: string;
  alt: string;
  width: number;
  height: number;
}

const Zoomable_imageOnTouchMove = ({
  src,
  alt,
  width,
  height,
}: ImageZoomProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const imageRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!imageRef.current) return;

    const rect = imageRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    setMousePosition({ x, y });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      ref={imageRef}
      className="relative overflow-hidden rounded-lg cursor-crosshair group"
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Image
        src={src || "/placeholder.svg"}
        alt={alt}
        width={width}
        height={height}
        className={`w-full h-auto object-cover rounded-lg shadow-md  aspect-square cursor-pointer transition-transform duration-300 ease-out ${
          isHovered ? "scale-150" : "scale-100"
        }`}
        style={{
          transformOrigin: isHovered
            ? `${mousePosition.x}% ${mousePosition.y}%`
            : "center",
        }}
      />
      <div
        className={`absolute inset-0 bg-black/20 transition-opacity duration-300 ${
          isHovered ? "opacity-100" : "opacity-0"
        }`}
      />
      <div
        className={`absolute w-4 h-4 border-2 border-white rounded-full pointer-events-none transition-opacity duration-300 ${
          isHovered ? "opacity-100" : "opacity-0"
        }`}
        style={{
          left: `${mousePosition.x}%`,
          top: `${mousePosition.y}%`,
          transform: "translate(-50%, -50%)",
          boxShadow: "0 0 0 1px rgba(0,0,0,0.3)",
        }}
      />
    </div>
  );
};

export default Zoomable_imageOnTouchMove;
