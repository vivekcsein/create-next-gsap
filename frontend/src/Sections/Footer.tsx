import React from "react";
import "@/Styles/Sections/Footer.scss";
import Link from "next/link";

type FooterProps = {
  FooterData: FooterData;
};

type FooterData = {
  footer_logo: string;
  copyright_message: string;
  footer_Links: Array<footer_Links>;
};

type footer_Links = {
  id: number;
  title: string;
  links: Array<links>;
};

type links = {
  id: number;
  name: string;
  link: string;
};

const Footer = ({
  FooterData: { copyright_message, footer_Links },
}: FooterProps) => {
  const footerItem = () => {
    return footer_Links.map((item) => {
      return (
        <div className=" Footer_box">
          <h1>{item.title}</h1>
          <ul>
            {item.links.map((link) => {
              return (
                <li key={link.id} className="Footer_link">
                  <Link
                    href={link.link}
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    {link.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      );
    });
  };
  return (
    <div className="Footer">
      <div>{footerItem()}</div>
      <h1 className="copyright_message">{copyright_message}</h1>
    </div>
  );
};

export default Footer;
