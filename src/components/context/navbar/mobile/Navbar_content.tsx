import { ChevronRight } from "lucide-react";

import {
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubItem,
} from "@/components/ui/shadcn/sidebar";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/shadcn/collapsible";

import Lucid_svg from "@/components/ui/helper/Lucid_svg";
import Navbar_link from "../Navbar_link";
import { accountItems } from "@/libs/configs/config.data";
import Navbar_footer from "./Navbar_footer";
import Navbar_theme from "./Navbar_theme";
import Navbar_wrapper from "./Navbar_wrapper";

interface Navbar_sidebarProps {
  navlinks: extendedNavlink[];
  isAuthenticated?: boolean;
}
const Navbar_content = ({ navlinks, isAuthenticated }: Navbar_sidebarProps) => {
  return (
    <SidebarContent>
      <SidebarHeader className="h-6"> </SidebarHeader>

      {/* Main Navigation */}
      <SidebarGroup>
        {/* <SidebarGroupLabel>navbar</SidebarGroupLabel> */}
        <SidebarGroupContent>
          <SidebarMenu>
            {navlinks.map((link) => (
              <SidebarMenuItem key={link.label}>
                {link.sublinks ? (
                  <Collapsible className="group/collapsible">
                    <CollapsibleTrigger asChild>
                      <SidebarMenuButton>
                        <div className="px-2 flex gap-2">
                          <Lucid_svg iconName={link.icon} />
                          <span>{link.label}</span>
                        </div>
                        <ChevronRight className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-90" />
                      </SidebarMenuButton>
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <SidebarMenuSub className="animate">
                        {link.sublinks.map((link) => (
                          <SidebarMenuSubItem key={link.id}>
                            <Navbar_wrapper>
                              <Navbar_link
                                key={link.id}
                                navlink={{
                                  id: link.id,
                                  label: link.label,
                                  href: link.href,
                                  icon: link.icon,
                                }}
                              />
                            </Navbar_wrapper>
                          </SidebarMenuSubItem>
                        ))}
                      </SidebarMenuSub>
                    </CollapsibleContent>
                  </Collapsible>
                ) : (
                  <Navbar_wrapper>
                    <Navbar_link
                      key={link.id}
                      navlink={{
                        id: link.id,
                        label: link.label,
                        href: link.href,
                        icon: link.icon,
                      }}
                    />
                  </Navbar_wrapper>
                )}
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>

      {/* Account Section */}
      <SidebarGroup>
        <SidebarGroupLabel>Account</SidebarGroupLabel>
        <SidebarGroupContent>
          <SidebarMenu>
            {accountItems.map((link) => (
              <SidebarMenuItem key={link.label}>
                <Navbar_wrapper>
                  <Navbar_link
                    key={link.id}
                    navlink={{
                      id: link.id,
                      label: link.label,
                      href: link.href,
                      icon: link.icon,
                      badge: link.badge,
                    }}
                  />
                </Navbar_wrapper>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>
      <Navbar_theme />

      {isAuthenticated ? <Navbar_footer /> : null}
      <Navbar_footer />
    </SidebarContent>
  );
};

export default Navbar_content;
