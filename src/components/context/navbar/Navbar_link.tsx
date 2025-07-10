"use client";
import Link from "next/link";
import { LucideProps } from "lucide-react";
import { useIsMobile } from "@/libs/hooks/use-mobile";
import Lucid_svg from "@/components/ui/helper/Lucid_svg";
import { Badge } from "@/components/ui/shadcn/badge";
import React, { ForwardRefExoticComponent, RefAttributes } from "react";

interface Navbar_ItemProps {
  navlink: {
    id: number;
    label: string;
    href?: string;
    icon?:
      | ForwardRefExoticComponent<
          Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
        >
      | string;
    badge?: string | number;
  };
}
const Navbar_link = ({ navlink }: Navbar_ItemProps) => {
  const isMobile = useIsMobile();
  const { label, href, icon, badge } = navlink;

  return (
    <Link
      href={href ? href : "/"}
      className={` ${
        isMobile
          ? "w-full flex gap-5 py-[6px] my-1 px-4 "
          : "coolLink"
      }`}
    >
      <div className="w-full flex gap-2 text-nowrap ">
        {isMobile && icon ? (
          typeof icon === "string" ? (
            // If Icon is a string, use DynamicSVG and cast to the correct type
            <Lucid_svg iconName={icon} />
          ) : (
            // If Icon is a component, render it
            React.createElement(icon, { className: "w-5 h-5 mr-2" })
          )
        ) : null}
        <span className="text-nowrap">{label}</span>
      </div>
      {badge && (
        <Badge className="ml-auto h-5 w-5 rounded-full p-0 text-xs">
          {badge}
        </Badge>
      )}
    </Link>
  );
};

export default Navbar_link;
