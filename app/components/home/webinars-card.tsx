import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";

interface WebinarsCardProps {
  webinarTitle: string;
  webinarUrl: string;
  webinarPath: string;
}

export default function WebinarsCard({
  webinarTitle,
  webinarUrl,
  webinarPath,
}: WebinarsCardProps) {
  return (
    <Card className="relative h-fit overflow-hidden">
      <div className="relative inset-0 h-56">
        <div className="absolute top-[10%] z-10 h-fit w-fit bg-red-500 px-4 py-1">
          <p className="text-white">Webinar</p>
        </div>
        <img
          className="h-full w-full object-cover brightness-75 contrast-75"
          src={webinarUrl}
        />
        <div className="absolute top-[10%] right-0 z-10 h-fit w-fit bg-black px-2 py-1">
          <p className="text-white">On-Demand</p>
        </div>
      </div>
      <CardHeader>
        <CardTitle className="scroll-m-20 text-lg font-extrabold tracking-tight lg:text-xl ">
          {webinarTitle}
        </CardTitle>
      </CardHeader>
      <CardFooter className="justify-center">
        <Button>Watch</Button>
      </CardFooter>
    </Card>
  );
}
