import React from "react";
import Navbar_link from "./Navbar_link";
import Auth_signout from "../auth/Auth_signout";
import Border_shadow from "@/components/wrappers/Border_shadow";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/shadcn/avatar";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/shadcn/navigation-menu";
import {
  NavigationMenuContent,
  NavigationMenuTrigger,
} from "@/components/ui/custom/navigation-menu";

const Navbar_user = () => {
  return (
    <div>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="border-0" icon={false}>
              <Avatar>
                <AvatarImage src={"/placeholder.png"} alt="shadcn" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </NavigationMenuTrigger>
            <NavigationMenuContent className="transform -translate-x-2/5">
              <Border_shadow variant="offset-bottom-right">
                <ul className="flex gap-5 flex-col py-2 px-4 bg-background rounded-md">
                  <NavigationMenuItem>
                    <Navbar_link
                      navlink={{
                        id: 1,
                        label: "Dashboard",
                        href: "./dashboard",
                      }}
                    />
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <Auth_signout />
                  </NavigationMenuItem>
                </ul>
              </Border_shadow>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};

export default Navbar_user;
