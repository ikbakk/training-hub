import { Home, Search, Settings, SlidersIcon, Video } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "./sidebar";
import { Link, NavLink } from "react-router";

// Menu items.
const items = [
  {
    title: "E-Learning",
    url: "#learningpath",
    icon: Home,
  },
  {
    title: "Videos",
    url: "#",
    icon: Video,
  },
  {
    title: "Webinars",
    url: "#",
    icon: SlidersIcon,
  },
  {
    title: "Search",
    url: "#",
    icon: Search,
  },
  {
    title: "Settings",
    url: "#",
    icon: Settings,
  },
];

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent className="p-4 gap-8">
        <Link to="/">
          <img src="images/logo.png" />
        </Link>
        <SidebarMenu>
          {items.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton asChild>
                <NavLink to={item.url}>
                  <item.icon />
                  <span>{item.title}</span>
                </NavLink>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
    </Sidebar>
  );
}
