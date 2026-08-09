import type { LayoutData } from "./AppServerLayout";

interface FooterProps {
  layoutData: LayoutData;
}
const Footer = ({ layoutData }: FooterProps) => {
  const _footerConfig = layoutData.footer;
  return <div>Footer</div>;
};

export default Footer;
