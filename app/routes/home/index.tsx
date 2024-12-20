import HomeIntro from "~/components/home/intro";
import type { Route } from "./+types";
import LearningPath from "~/components/home/learning-path";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Transform Training" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <div className="bg-background">
      <HomeIntro />
      <LearningPath />
    </div>
  );
}
