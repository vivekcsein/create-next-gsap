"use client";
import Link from "next/link";
import dynamic from "next/dynamic";
import Dropdown from "./Dropdown";
import "@/Styles/Components/Navbar.scss";
import {
  burgerIconNum,
  burgerIDFinder,
  burgerClassFinder,
} from "@/libs/constants";
// import BurgerIcon from "./BurgerIcon";
const BurgerIcon = dynamic(() => import("./BurgerIcon"), { ssr: false });

type element = HTMLElement | Element | null;
type navbarProps = {
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

let toggleArrow_text = "expand_more";
let burgerID: element;
let Navbar_ul: element;
let toggleArrow: Element;
let toggledropdown: any;
let button_info: any;
// const burgerIconNum = Math.floor(Math.random() * 4);

const Navbar = ({ navbar: { nav_Links } }: navbarProps) => {
  const dropdownClicked = (e: any) => {
    const classBurger = burgerClassFinder();
    if (window.getComputedStyle(classBurger).display === "block") {
      toggleArrow = document.getElementsByClassName("toggleArrow")[0];
      toggledropdown = document.getElementsByClassName("dropdown")[0];
      if (toggleArrow.innerHTML === "expand_more") {
        toggleArrow.innerHTML = "expand_less";
        toggledropdown.style.display = "flex";
      } else {
        toggleArrow.innerHTML = "expand_more";
        toggledropdown.style.display = "none";
      }
    }
  };

  const BurgerClick = () => {
    burgerID = burgerIDFinder();
    Navbar_ul = document.getElementsByClassName("Navbar_ul")[0];
    toggleArrow = document.getElementsByClassName("toggleArrow")[0];
    toggledropdown = document.getElementsByClassName("dropdown")[0];
    // button_info = document.getElementsByClassName("button_info")[0];

    burgerID?.classList.toggle("open");
    Navbar_ul?.classList.toggle("nav_hide");
    toggleArrow.innerHTML = "expand_more";
    toggledropdown.style.display = "none";
  };

  const navItem = (item: nav_Links) => {
    return (
      <div
        key={item.id}
        className="flex_center button_navbar"
        // onClick={dropdownClicked}
      >
        <Link href={item.href}>{`${item.label}`}</Link>
      </div>
    );
  };

  const NavItem_dropdown = (item: nav_Links) => {
    return (
      <>
        <div className="flex_center button_navbar" onClick={dropdownClicked}>
          {item.label}
          <span className="material-symbols-sharp toggleArrow ">
            {toggleArrow_text}
          </span>
          <span className="button_info">Click Here</span>
        </div>
        <div className="dropdown">
          <Dropdown dropdownData={item.details} />
        </div>
      </>
    );
  };

  return (
    <>
      <ul className="Navbar_ul">
        {nav_Links?.map((item) => {
          return (
            <li key={item.id}>
              {item.dropdown ? NavItem_dropdown(item) : navItem(item)}
            </li>
          );
        })}
      </ul>
      <div className="flex_center BurgerIcon">
        <BurgerIcon onClick={BurgerClick} />
      </div>
    </>
  );
};

export default Navbar;
