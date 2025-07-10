"use client";

import React, { useRef } from "react";
import { useIsMobile } from "@/libs/hooks/use-mobile";
import Animate_header from "../animations/Animate_header";
import Header from "@/components/layouts/Header";
import Footer from "@/components/layouts/Footer";

const Layoutprovider = ({
  rootLayoutData,
  children,
}: {
  rootLayoutData: rootLayoutData;
  children: React.ReactNode;
}) => {
  const isMobile = useIsMobile();
  const headerRef = useRef<HTMLDivElement>(null);
  const { HeaderData, FooterData } = rootLayoutData;

  return (
    <>
      <Header
        isMobile={isMobile}
        headerData={HeaderData}
        refObject={headerRef}
        isAuthenticated={true}
      />
      <main className="flex-1 overflow-hidden min-h-screen">
        <div className="mx-auto p-6">{children}</div>
      </main>
      <Footer isMobile={isMobile} footerData={FooterData} />
      <Animate_header refObject={headerRef}></Animate_header>
    </>
  );
};

export default Layoutprovider;
