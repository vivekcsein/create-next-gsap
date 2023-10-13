"use client";
import React from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import "@/Styles/Sections/Header.scss";

type HeaderProps = {
  HeaderData: HeaderData;
};

type HeaderData = {
  header_Logo: {
    src: string;
    alt: string;
  };
  navbar: navbar;
};

type navbar = {
  nav_Links: Array<nav_Links>;
  products_DropDown?: Array<details> | undefined;
};

type nav_Links = {
  id: number;
  href: string;
  label: string;
  dropdown: boolean;
  details?: Array<details> | undefined;
};

type details = {
  id: number;
  href: string;
  label: string;
};

const Header = ({ HeaderData: { header_Logo, navbar } }: HeaderProps) => {
  return (
    <>
      <header className="Header">
        <div className="Header_logo flex_center">
          <Image
            src={`/${header_Logo.src}`}
            width={250}
            height={5}
            alt={header_Logo.alt}
          />
        </div>
        <nav className="Navbar">
          <Navbar navbar={navbar} />
        </nav>
      </header>
    </>
  );
};

export default Header;
