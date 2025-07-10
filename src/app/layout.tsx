// File: src/app/layout.tsx created by the developer @vivekcsein
import "../styles/globals.css";
import type { Metadata } from "next";
import { poppins, roboto } from "@/libs/configs/config.styles";

//import all providers to wrap the app
import Fontsprovider from "@/components/providers/Fontsprovider";
import Themesprovider from "@/components/providers/Themesprovider";
import Layoutprovider from "@/components/providers/Layoutprovider";
import { AnimationProvider } from "@/components/providers/Animationprovider";

// call rootlayout API
import { getRootLayoutAPI } from "@/libs/api/api.fetch";

export const metadata: Metadata = {
  title: "Title",
  description: "%{description} | Title",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const rootLayoutJson: Promise<rootLayoutData> = getRootLayoutAPI();
  const rootLayoutData = await rootLayoutJson;

  return (
    <html lang="en">
      <body className={`${roboto.variable} ${poppins.variable} antialiased`}>
        <Themesprovider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Fontsprovider>
          <AnimationProvider>
            <Layoutprovider rootLayoutData={rootLayoutData}>
              {children}
            </Layoutprovider>
          </AnimationProvider>
          </Fontsprovider>
        </Themesprovider>
      </body>
    </html>
  );
}
