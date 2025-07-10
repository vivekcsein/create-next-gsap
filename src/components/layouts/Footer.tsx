import { Mail } from "lucide-react";
import Link from "next/link";
import React from "react";

interface FooterProps {
  footerData: FooterData;
  isMobile?: boolean;
}

const Footer = ({ footerData }: FooterProps) => {
  const { footerlinks, copyright_message } = footerData;

  return (
    <footer className="bg-background">
      {/* Main Footer Content */}
      <div className="py-12 px-4 sm:px-8 md:px-12 lg:px-24 flex flex-col sm:flex-row justify-between items-start space-y-8 sm:space-y-0 gap-4">
        {footerlinks.map((footerlink, index) => (
          <div key={index} className=" sm:mb-0 mb-4">
            {footerlink.discription ? (
              <FooterDesc {...footerlink} />
            ) : footerlink.sublinks && footerlink.sublinks.length > 0 ? (
              <>
                <FooterLinkDisplay
                  links={footerlink.sublinks}
                  heading={footerlink.label}
                />
              </>
            ) : (
              <Link
                href={footerlink.href || "#"}
                className="hover:text-primary transition-colors text-muted-foreground text-sm"
              >
                {footerlink.label}
              </Link>
            )}
          </div>
        ))}
        <div className="mb-8 sm:mb-0   ">
          <FooterContactInfo />
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="px-6 py-6 border-border flex flex-col md:flex-row justify-between items-center">
        <p className="text-muted-foreground text-sm">{copyright_message}</p>
        <div className="flex space-x-6 text-sm text-muted-foreground mt-4 md:mt-0">
          <Link href="#" className="hover:text-primary transition-colors">
            Privacy Policy
          </Link>
          <Link href="#" className="hover:text-primary transition-colors">
            Terms of Service
          </Link>
          <Link href="#" className="hover:text-primary transition-colors">
            Cookie Policy
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

const FooterDesc = (link: extendedNavlink) => {
  return (
    <>
      <Link href="/" className="flex items-center mb-4">
        <h4>{link.label}</h4>
      </Link>
      <p className="text-muted-foreground mb-6 max-w-md">{link.discription}</p>
    </>
  );
};

const FooterContactInfo = () => {
  return (
    <div className="space-y-4">
      <h4>Contact</h4>
      <ul className="space-y-3 text-muted-foreground">
        <li className="flex items-center">
          <Mail className="h-4 w-4 mr-2 text-primary" />
          contact@sparkverse.com
        </li>
      </ul>
    </div>
  );
};

const FooterLinkDisplay = ({
  links,
  heading,
}: {
  links: extendedNavlink[];
  heading: string;
}) => {
  return (
    <ul className="space-y-1 w-full flex flex-col justify-baseline">
      <h4 className="mb-2">{heading}</h4>
      {links.map((link) => (
        <li key={link.id} className=" mb-2">
          <Link
            href={link.href || "#"}
            className="text-muted-foreground hover:text-primary transition-colors text-sm"
          >
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  );
};
