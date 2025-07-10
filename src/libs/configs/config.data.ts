import { LayoutDashboard, ShoppingCart } from "lucide-react";

// Main navigation items
export const accountItems = [
  {
    id: 0,
    label: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    id: 1,
    label: "Cart",
    href: "/cart",
    icon: ShoppingCart,
    badge: "0",
  },
];
