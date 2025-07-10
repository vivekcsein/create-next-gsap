import Navbar_user from "../Navbar_user";
import Navbar_auth from "../Navbar_auth";
import Navbar_link from "../Navbar_link";
import Navbar_dropdown from "./Navbar_dropdown";
import Themes from "@/components/layouts/Themes";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/shadcn/navigation-menu";

const Navbar_desktop = ({
  navbarlinks,
  isAuthenticated,
}: {
  navbarlinks: extendedNavlink[];
  isAuthenticated?: boolean;
}) => {
  return (
    <nav>
      <NavigationMenu>
        <NavigationMenuList className="flex gap-5">
          {navbarlinks.map((links) => {
            return links.sublinks ? (
              <NavigationMenuItem key={links.id} className="center">
                <Navbar_dropdown
                  dropdownlinks={links.sublinks}
                  dropdownlabel={links.label}
                />
              </NavigationMenuItem>
            ) : (
              <NavigationMenuItem key={links.id} className="center">
                <NavigationMenuLink asChild>
                  <Navbar_link navlink={links} />
                </NavigationMenuLink>
              </NavigationMenuItem>
            );
          })}
          <NavigationMenuItem className="center">
            <Themes />
          </NavigationMenuItem>
          <NavigationMenuItem className="center mr-5">
            {isAuthenticated ? <Navbar_user /> : <Navbar_auth />}
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </nav>
  );
};

export default Navbar_desktop;
