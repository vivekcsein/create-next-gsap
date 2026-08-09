import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import "@/styles/globals.css";
import Script from "next/script";
import AppClientLayout from "@/components/layouts/AppClientLayout";
import AppServerLayout from "@/components/layouts/AppServerLayout";
import { cn } from "@/packages/utils/cn";
import { themeInitScript } from "@/packages/utils/theme";

const figtree = Figtree({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Create Next GSAP",
  description: "A top 1% animation and creativity for next.js projects",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={cn("h-full", "antialiased", "font-sans", figtree.variable)}
    >
      <head>
        {/* Runs before hydration so the correct .dark class is applied
            before first paint — prevents a flash of the wrong theme. */}
        <Script id="theme-init" strategy="beforeInteractive">
          {themeInitScript}
        </Script>
      </head>
      <body suppressHydrationWarning={true}>
        <AppClientLayout>
          <AppServerLayout>{children}</AppServerLayout>
        </AppClientLayout>
      </body>
    </html>
  );
}
