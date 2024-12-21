import { Button } from "./button";
import { SidebarTrigger } from "./sidebar";

export default function Header() {
  return (
    <div className="flex w-full items-center bg-sidebar justify-between gap-4 py-1 px-2">
      <SidebarTrigger />
      <div className="flex gap-4">
        <Button variant={"link"}>Help</Button>
        <Button>Log In</Button>
      </div>
    </div>
  );
}
