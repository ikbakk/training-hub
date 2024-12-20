import { Button } from "./button";

export default function Header() {
  return (
    <div className="flex w-full items-center bg-sidebar justify-end gap-4 py-1 px-2">
      <Button variant={"link"}>Help</Button>
      <Button>Log In</Button>
    </div>
  );
}
