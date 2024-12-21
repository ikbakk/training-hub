import { SidebarProvider } from "~/components/ui/sidebar";
import type { Route } from "../+types/root";
import AppSidebar from "~/components/ui/app-sidebar";
import { Outlet } from "react-router";
import Header from "~/components/ui/app-header";

export default function MainLayout() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="w-full">
        <Header />
        <Outlet />
      </main>
    </SidebarProvider>
  );
}
