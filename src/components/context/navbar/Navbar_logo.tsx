import React from "react";
import Link from "next/link";
import Image from "next/image";

interface NavbarImgProps {
  image:
    | {
        src?: string; // Optional source URL for the image
        alt?: string; // Optional alt text for the image
        href?: string; // Optional link to navigate when the logo is clicked
      }
    | string;
  label?: string; // Optional label for the logo
}

const Navbar_logo = ({ image, label }: NavbarImgProps) => {
  let src: string | undefined;
  let alt: string = "Logo";
  let href: string = "/";
  const showLabel = !!label;

  if (typeof image === "object" && image !== null) {
    src = image.src;
    alt = image.alt || alt;
    href = image.href || href;
  } else if (typeof image === "string") {
    src = image;
  }

  return (
    <div className="flex items-center space-x-2">
      <Link className="Header__logo" href={href}>
        {src && <Image_component src={src} alt={alt} />}
        {showLabel && <h5>{label}</h5>}
      </Link>
    </div>
  );
};

export default Navbar_logo;

const Image_component = ({ src, alt }: { src: string; alt: string }) => (
  <Image src={src} alt={alt} width={100} height={100} loading="lazy" />
);
