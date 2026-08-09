import { getLayoutData } from "@/packages/api/api.fetch";
import type { NavTab } from "@/types/navigation";
import Footer from "./Footer";
import Header from "./Header";

export interface LayoutData {
  header: {
    logo: {
      src: string;
      alt: string;
      href: string;
    };
    navigation: Array<NavTab>;
  };
  footer: {
    logo: string;
    copyright: string;
    links: Array<{
      id: string;
      label: string;
      description?: string;
      items: Array<{
        label: string;
        href: string;
      }>;
    }>;
  };
}

interface AppServerLayoutProps {
  children: React.ReactNode;
}

const AppServerLayout = async ({ children }: AppServerLayoutProps) => {
  const layoutData = (await getLayoutData()) as unknown as LayoutData;

  return (
    <>
      <Header layoutData={layoutData} />

      <main className="min-h-screen w-full">{children}</main>

      <Footer layoutData={layoutData} />
    </>
  );
};

export default AppServerLayout;
