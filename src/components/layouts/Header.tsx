import type { LayoutData } from "./AppServerLayout";

interface HeaderProps {
  layoutData: LayoutData;
}

const Header = ({ layoutData }: HeaderProps) => {
  const _headerConfig = layoutData.header;
  return <div>Header</div>;
};

export default Header;
