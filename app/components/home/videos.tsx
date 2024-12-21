import VideosCard from "./videos-card";

export default function Videos() {
  return (
    <div id="videos" className="flex flex-col gap-8 p-4">
      <div className="flex flex-col w-full items-center justify-center">
        <h1 className="scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-4xl">
          Videos
        </h1>
        <h2 className="scroll-m-20 text-2xl font-extrabold tracking-tight lg:text-3xl">
          Get started as an Administrator
        </h2>
      </div>
      <div className="flex flex-col gap-4">
        {videosData.map((video) => (
          <VideosCard
            key={video.videoNumber}
            videoNumber={video.videoNumber}
            videoTitle={video.videoTitle}
            videoDescription={video.videoDescription}
            videoUrl={video.videoUrl}
          />
        ))}
      </div>
    </div>
  );
}

export const videosData = [
  {
    videoNumber: 1,
    videoTitle: "Welcome to RAYVN",
    videoDescription:
      "A quick guide to getting started with RAYVN, covering account setup, login, dashboard navigation, and essential settings for managing logs and user information for efficient incident management.",
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  },
  {
    videoNumber: 2,
    videoTitle: "Personnel",
    videoDescription:
      "A guide to managing users, responders, and contacts in RAYVN, including account setup, access levels, team creation, and contact list management for efficient communication and streamlined messaging.",
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  },
  {
    videoNumber: 3,
    videoTitle: "Log templates",
    videoDescription:
      "Learn how to create and manage log templates in RAYVN. The video guides you through setting up templates with predefined information, tasks, teams, and files to streamline the process of starting new logs. You'll also learn how to publish, edit, and use these templates directly from the dashboard, helping you save time and efficiently handle incidents.",
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  },
  {
    videoNumber: 4,
    videoTitle: "Other templates",
    videoDescription:
      "This video guides you through setting up meeting, report, and message templates in RAYVN. Discover how these templates can help you stay organized and efficiently communicate during incidents.",
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  },
  {
    videoNumber: 5,
    videoTitle: "Resources, sites and tags",
    videoDescription:
      "Learn how to create and manage resources, sites, and tags in RAYVN to organize your assets and streamline your incident management workflow. Track materials, set predefined locations, and categorize entries for efficient operations.",
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  },
  {
    videoNumber: 6,
    videoTitle: "Collaboration",
    videoDescription:
      "This video guides you through the process of inviting and collaborating with stakeholders in RAYVN. Manage internal and external agreements to strengthen your response efforts.",
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  },
  {
    videoNumber: 7,
    videoTitle: "Sub-incidents",
    videoDescription:
      "Discover how to use sub-incidents in RAYVN to track and manage parallel events within a primary log. From setting up sub-incident types to operational use, keep your logs structured and organized.",
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  },
];
