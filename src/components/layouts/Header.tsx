import React from "react";
import "@/styles/css/Header.css";
import Navbar_logo from "../context/navbar/Navbar_logo";
import Navbar_desktop from "../context/navbar/desktop/Navbar_desktop";
import Navbar_mobile from "../context/navbar/mobile/Navbar_mobile";

interface HeaderProps {
  isMobile: boolean;
  headerData: HeaderData;
  refObject: React.RefObject<HTMLDivElement | null>;
  isAuthenticated?: boolean;
}

const Header = ({
  refObject,
  isMobile,
  headerData,
  isAuthenticated,
}: HeaderProps) => {
  // Check if logo data is provided and set default values
  const logo = "";
  // typeof headerData.header_logo === "object" &&
  // headerData.header_logo !== null
  //   ? {
  //       // Destructure the logo object and provide defaults
  //       src: headerData.header_logo.src,
  //       alt: headerData.header_logo.alt,
  //       href: headerData.header_logo.href,
  //     }
  //   : {
  //       src: "/images/logo.png",
  //       alt: "Logo",
  //       href: "/",
  //     };

  return (
    <header className="Header" ref={refObject}>
      {isMobile ? (
        // Phone version
        // Phone version
        // Phone version
        <div className="Header__phone">
          <Navbar_mobile
            navlinks={headerData.navbarlinks}
            isAuthenticated={isAuthenticated || false}
          />
        </div>
      ) : (
        // Desktop version
        // Desktop version
        // Desktop version
        <div className="Header__desktop">
          <Navbar_logo image={logo} label={"GSAP"} />
          <Navbar_desktop
            navbarlinks={headerData.navbarlinks}
            isAuthenticated={isAuthenticated || false}
          />
        </div>
      )}
    </header>
  );
};

export default Header;
