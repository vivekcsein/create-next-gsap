"server only";
import React from "react";
import { icons } from "lucide-react";

const Lucid_svg = ({
  iconName,
  ...props
}: { iconName: string | undefined } & React.SVGProps<SVGSVGElement>) => {
  if (!iconName) return;
  // Retrieve the icon component from the 'icons' object
  const IconLogo = iconName as keyof typeof icons;
  const LucideIcon = icons[IconLogo];

  // Render the icon if it exists, otherwise handle the case (e.g., render nothing or a fallback)
  if (LucideIcon) {
    return <LucideIcon {...props} />;
  }
  return null; // Or a fallback icon/message
};

export default Lucid_svg;
