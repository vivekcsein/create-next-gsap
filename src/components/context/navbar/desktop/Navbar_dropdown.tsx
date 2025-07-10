import React from "react";
import Navbar_link from "../Navbar_link";
import Border_shadow from "@/components/wrappers/Border_shadow";

import {
  NavigationMenu,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuItem,
} from "@/components/ui/shadcn/navigation-menu";
import {
  NavigationMenuTrigger,
  NavigationMenuContent,
} from "@/components/ui/custom/navigation-menu";

const Navbar_dropdown = ({
  dropdownlinks,
  dropdownlabel,
}: {
  dropdownlinks: Array<navlink>;
  dropdownlabel: string;
}) => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="h-10 text-[14px]">
            {dropdownlabel}
          </NavigationMenuTrigger>
          <NavigationMenuContent className="transform -translate-x-1/5">
            <Border_shadow variant="offset-bottom-right">
              <div className="flex gap-5 flex-col py-2 px-4  bg-background rounded-md">
                {dropdownlinks.map((link) => {
                  return (
                    <NavigationMenuLink asChild key={link.href || link.label}>
                      <Navbar_link navlink={link} />
                    </NavigationMenuLink>
                  );
                })}
              </div>
            </Border_shadow>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default Navbar_dropdown;
