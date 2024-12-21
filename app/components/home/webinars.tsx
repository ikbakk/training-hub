import WebinarsCard from "./webinars-card";

export default function Webinars() {
  return (
    <div id="webinars" className="flex flex-col gap-8 p-4">
      <div className="flex flex-col w-full items-center justify-center">
        <h1 className="scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-4xl">
          On-Demand Webinars
        </h1>
        <h2 className="scroll-m-20 text-2xl font-extrabold tracking-tight lg:text-3xl">
          Learn anytime, anywhere
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {webinarsData.map((webinar) => (
          <WebinarsCard
            key={webinar.webinarTitle}
            webinarTitle={webinar.webinarTitle}
            webinarUrl={webinar.webinarUrl}
            webinarPath={webinar.webinarPath}
          />
        ))}
      </div>
    </div>
  );
}

export const webinarsData = [
  {
    webinarTitle: "The Digital Journey in Emergency Preparedness",
    webinarUrl: "https://picsum.photos/300",
    webinarPath: "#",
  },
  {
    webinarTitle:
      "Planning for a cyber attack? Is cyber incident response part of your emergency preparedness and response plan?",
    webinarUrl: "https://picsum.photos/800",
    webinarPath: "#",
  },
  {
    webinarTitle: "The human side of Critical Event Management",
    webinarUrl: "https://picsum.photos/800",
    webinarPath: "#",
  },
];
