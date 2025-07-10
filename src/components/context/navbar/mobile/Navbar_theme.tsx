import React, { useState } from "react";
import {
  SidebarMenuSub,
  SidebarMenuSubItem,
} from "@/components/ui/shadcn/sidebar";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/shadcn/collapsible";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/shadcn/button";
import Navbar_wrapper from "./Navbar_wrapper";

const setThemes = ["light", "dark", "system"];

const Navbar_theme = () => {
  const { setTheme, theme } = useTheme();
  const [open, setOpen] = useState(false);

  // Determine icon based on current theme
  const renderThemeIcon = () => {
    if (theme === "dark") {
      return (
        <span className=" flex ml-2 ">
          <Moon className="h-5 w-5 rotate-90 scale-0 transition-transform duration-300 dark:rotate-0 dark:scale-100" />
        </span>
      );
    }
    if (theme === "light") {
      return (
        <span className=" flex ml-2 ">
          <Sun className="h-5 w-5 rotate-0 scale-100 transition-transform duration-300 dark:-rotate-90 dark:scale-0" />
        </span>
      );
    }

    // fallback for unknown theme
    return (
      <span className=" flex ml-2 ">
        <Sun className=" h-5 w-5 rotate-0 scale-100 transition-transform duration-300 dark:-rotate-90 dark:hidden dark:scale-0" />
        <Moon className=" h-5 w-5 rotate-90 scale-0 transition-transform duration-300 dark:rotate-0 hidden dark:block dark:scale-100" />
      </span>
    );
  };

  return (
    <Collapsible
      open={open}
      onOpenChange={setOpen}
      className="group/collapsible"
    >
      <CollapsibleTrigger asChild>
        <button
          className="flex items-center w-full px-3 py-2 rounded-lg bg-transparent border-none cursor-pointer focus:outline-none transition-colors"
          aria-label="Toggle theme menu"
        >
          {renderThemeIcon()}
          <span className="text-base font-medium px-4">Themes</span>
        </button>
      </CollapsibleTrigger>
      <CollapsibleContent>
        <SidebarMenuSub className="animate">
          {setThemes.map((link) => (
            <SidebarMenuSubItem key={link}>
              <Navbar_wrapper>
                <Button
                  variant="empty"
                  className=" ml-5 text-left px-4 py-2"
                  onClick={() => {
                    setTheme(link);
                    setOpen(false);
                  }}
                >
                  {link.charAt(0).toUpperCase() + link.slice(1)}
                </Button>
              </Navbar_wrapper>
            </SidebarMenuSubItem>
          ))}
        </SidebarMenuSub>
      </CollapsibleContent>
    </Collapsible>
  );
};

export default Navbar_theme;
