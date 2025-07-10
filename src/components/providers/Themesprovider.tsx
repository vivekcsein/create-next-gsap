"use client";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { useEffect, useState } from "react";

const Themesprovider = ({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div style={{ visibility: "hidden" }}>{children}</div>;
  }

  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
};

export default Themesprovider;
