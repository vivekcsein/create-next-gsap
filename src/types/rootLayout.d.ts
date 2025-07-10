type rootLayout = {
  rootLayoutData: rootLayoutData;
};
type rootLayoutData = {
  HeaderData: HeaderData;
  FooterData: FooterData;
};
//header data type
type HeaderData = {
  header_logo: image | string;
  navbarlinks: Array<extendedNavlink>;
};

//footer data type
type FooterData = {
  footer_logo: image | string;
  copyright_message: string;
  footerlinks: Array<extendedNavlink>;
};

interface navlink {
  id: number;
  label: string;
  href?: string;
  icon?: string;
}

interface extendedNavlink extends navlink {
  discription?: string;
  sublinks?: Array<navlink>;
}

type image = {
  src: string;
  alt: string;
  href: string;
};
