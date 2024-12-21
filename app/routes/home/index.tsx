import HomeIntro from "~/components/home/intro";
import type { Route } from "./+types";
import LearningPath from "~/components/home/learning-path";
import Videos from "~/components/home/videos";
import Webinars from "~/components/home/webinars";
import Footer from "~/components/home/footer";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Transform Training" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <div className="bg-background flex flex-col gap-20">
      <HomeIntro />
      <LearningPath />
      <Videos />
      <Webinars />
      <Footer />
    </div>
  );
}
