import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";

interface LearningPathCardProps {
  courseName: string;
  courseNumber: number;
  courseDescription: string;
  coursePath: string;
  courseImage: string;
}

export default function LearningPathCard({
  courseName,
  courseNumber,
  courseDescription,
  coursePath,
  courseImage,
}: LearningPathCardProps) {
  return (
    <Card className="overflow-hidden">
      <CardHeader className="relative text-center">
        <div className="absolute inset-0">
          <img
            className="h-full w-full object-cover brightness-50 contrast-50"
            src={courseImage}
          />
        </div>
        <CardDescription className="z-10 pt-4 text-white/80">
          Course {courseNumber}
        </CardDescription>
        <CardTitle className="z-10 pb-4 text-white">{courseName}</CardTitle>
      </CardHeader>
      <CardContent className="py-4">
        <p className="text-sm">{courseDescription}</p>
      </CardContent>
      <CardFooter className="flex-col">
        <p className="text-xs">Get Started:</p>
        <div className="flex gap-2">
          <Button variant={"ghost"}>
            <EnglishFlag /> English
          </Button>
          <Button variant={"ghost"}>
            <NorwegianFlag /> Norwegian
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}

const EnglishFlag = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 60 30"
      width="60"
      height="30"
    >
      <rect width="60" height="30" fill="#ffffff" />
      <rect x="25" width="10" height="30" fill="#cf142b" />
      <rect y="10" width="60" height="10" fill="#cf142b" />
    </svg>
  );
};

const NorwegianFlag = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 60 30"
      width="60"
      height="30"
    >
      <rect width="60" height="30" fill="#ffffff" />
      <rect x="25" width="10" height="30" fill="#002868" />
      <rect y="10" width="60" height="10" fill="#002868" />
    </svg>
  );
};
