import "@/Styles/globals.css";
import "@/Styles/Style.scss";
import "@/Styles/vars.scss";
import type { Metadata } from "next";
import { getMetaData } from "@/libs/metadata";
import { log } from "console";
import Header from "@/Sections/Header";

// import { Inter } from "next/font/google";

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Vivek CSE",
  description: "A portfolio of VIVEK",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const metadata = await getMetaData();
  const { HeaderData } = metadata.data;
  return (
    <html lang="en">
      <body>
        <Header HeaderData={HeaderData} />
        <div>{children}</div>
      </body>
    </html>
  );
}
