import LearningPathCard from "./learning-path-card";

export default function LearningPath() {
  return (
    <div id="learningpath" className="flex flex-col gap-8 p-4">
      <div className="flex flex-col w-full items-center justify-center">
        <h1 className="scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-4xl">
          E-Learning
        </h1>
        <h2 className="scroll-m-20 text-2xl font-extrabold tracking-tight lg:text-3xl">
          Choose your path
        </h2>
      </div>
      <div className="grid grid-cols-1 gap-4 lg:gap-8 lg:grid-cols-3">
        <LearningPathCard
          courseNumber={1}
          courseName="Introduction Course"
          courseImage="https://picsum.photos/800"
          courseDescription="This introductory course is ideal for anyone seeking an overview of RAYVN. No prior knowledge of RAYVN is necessary."
          coursePath="#"
        />
        <LearningPathCard
          courseNumber={2}
          courseName="Basic Training"
          courseImage="https://picsum.photos/800"
          courseDescription="This four-module course covers everything you need to know to effectively utilize RAYVN, from creating response logs to navigating and utilizing its core features."
          coursePath="#"
        />
        <LearningPathCard
          courseNumber={3}
          courseName="Administrator"
          courseImage="https://picsum.photos/800"
          courseDescription="The course covers user management and account setup. Implementation of your emergency response plans etc. Requires completion of course 1 & 2."
          coursePath="#"
        />
      </div>
    </div>
  );
}
