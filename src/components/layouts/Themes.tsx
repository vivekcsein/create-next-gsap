"use client";

import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import Border_shadow from "../wrappers/Border_shadow";
import {
  NavigationMenuTrigger,
  NavigationMenuContent,
} from "@/components/ui/custom/navigation-menu";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/shadcn/navigation-menu";

const Themes = () => {
  const { setTheme } = useTheme();

  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger icon={false} className="pr-3">
            {/* Sun Icon */}
            <Sun className="absolute inset-0 m-auto h-4 w-4 rotate-0 scale-100 transition-transform duration-300 dark:-rotate-90 dark:scale-0" />
            {/* Moon Icon */}
            <Moon className="absolute inset-0 m-auto h-4 w-4 rotate-90 scale-0 transition-transform duration-300 dark:rotate-0 dark:scale-100" />
          </NavigationMenuTrigger>
          <NavigationMenuContent className="transform -translate-x-1/4 mt-1">
            <Border_shadow variant="offset-top-right" size="small">
              <ul className="flex flex-col gap-5 py-2 px-4 bg-background rounded-md">
                <NavigationMenuItem
                  onClick={() => setTheme("light")}
                  className="coolLink cursor-pointer"
                >
                  Light
                </NavigationMenuItem>
                <NavigationMenuItem
                  onClick={() => setTheme("dark")}
                  className="coolLink cursor-pointer"
                >
                  Dark
                </NavigationMenuItem>
                <NavigationMenuItem
                  onClick={() => setTheme("system")}
                  className="coolLink cursor-pointer"
                >
                  System
                </NavigationMenuItem>
              </ul>
            </Border_shadow>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default Themes;
