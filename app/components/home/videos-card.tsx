import ReactPlayer from "react-player";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";

interface VideosCardProps {
  videoNumber: number;
  videoTitle: string;
  videoDescription: string;
  videoUrl: string;
}

export default function VideosCard({
  videoNumber,
  videoTitle,
  videoDescription,
  videoUrl,
}: VideosCardProps) {
  return (
    <Card className="grid grid-cols-2">
      <CardHeader className="flex w-full flex-col gap-2">
        <CardDescription>Video {videoNumber}</CardDescription>
        <CardTitle>{videoTitle}</CardTitle>
        <CardContent className="-ml-6">{videoDescription}</CardContent>
      </CardHeader>

      <CardContent className="flex w-full pt-4 items-center justify-center">
        <ReactPlayer
          width={"100%"}
          height={"90%"}
          style={{ aspectRatio: "16/9" }}
          url={videoUrl}
        />
      </CardContent>
    </Card>
  );
}
