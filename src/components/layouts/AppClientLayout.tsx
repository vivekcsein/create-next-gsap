"use client";
import { AnimationProvider } from "../providers/AnimationProvider";
import ThemeProvider from "../providers/ThemeProvider";

interface AppClientLayoutProps {
  children: React.ReactNode;
}

const AppClientLayout = (props: AppClientLayoutProps) => {
  const { children } = props;
  return (
    <ThemeProvider>
      <AnimationProvider>{children}</AnimationProvider>
    </ThemeProvider>
  );
};

export default AppClientLayout;
