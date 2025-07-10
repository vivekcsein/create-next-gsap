import React from "react";

interface Navbar_wrapperProps {
  children: React.ReactNode;
}
const Navbar_wrapper = ({ children }: Navbar_wrapperProps) => {
  return <div>{children}</div>;
};
export default Navbar_wrapper;
