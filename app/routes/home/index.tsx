import type { Route } from "./+types";
import ReactPlayer from "react-player/youtube";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Transform Training" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-background">
      <div className="flex w-full items-center gap-4 p-4">
        <div>
          <h1 className="scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-4xl">
            Welcome to the RAYVN Transform Training
          </h1>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            RAYVN is an easy-to-use solution for emergency preparedness and
            critical event management. To get you up and running quickly, we
            have created our RAYVN Learning Hub. Here you will find e-learning
            modules for self-paced education, webinars with industry experts in
            emergency preparedness and links to our support portal that provide
            task-specific guidance.
          </p>
        </div>
        <div className="flex w-full items-center justify-center">
          <ReactPlayer
            playIcon={<svg className="h-12 w-12" viewBox="0 0 24 24" />}
            controls
            width={"90%"}
            style={{ aspectRatio: "16/9" }}
            url="https://www.youtube.com/watch?v=wDchsz8nmbo"
          />
        </div>
      </div>
    </div>
  );
}
