import React from "react";
import { Button } from "@/components/ui/shadcn/button";
import { Menu } from "lucide-react";
import { DialogTitle } from "@radix-ui/react-dialog";
import { SidebarProvider } from "@/components/ui/shadcn/sidebar";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTrigger,
} from "@/components/ui/shadcn/sheet";
import Navbar_content from "./Navbar_content";

interface Navbar_mobileProps {
  navlinks: navlink[];
  isAuthenticated?: boolean;
}

const Navbar_mobile = ({ navlinks, isAuthenticated }: Navbar_mobileProps) => {
  return (
    <Sheet defaultOpen={false}>
      <SheetTrigger asChild>
        <Button variant="empty" size="icon" className="md:hidden">
          <Menu className="h-5 w-5" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left">
        <SidebarProvider defaultOpen={false}>
          <Navbar_content
            navlinks={navlinks}
            isAuthenticated={isAuthenticated}
          />
        </SidebarProvider>
        <SheetDescription />
        <DialogTitle />
      </SheetContent>
    </Sheet>
  );
};

export default Navbar_mobile;
