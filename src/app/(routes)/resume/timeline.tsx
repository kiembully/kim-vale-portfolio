import React from "react";
interface TimelineProps {
  date: string;
  company: string;
  position: string;
  description: string;
  achievements: string[];
}

const Timeline: React.FC<TimelineProps> = ({
  date,
  company,
  position,
  description,
  achievements,
}) => {
  return (
    <div className="flex md:flex-row flex-col space-y-10 md:space-y-0 space-x-10 my-20 relative dark:invert">
      <p className="text-sm lg:text-base font-normal text-secondary w-48">
        {date}
      </p>
      <div>
        <h5 className="font-semibold bg-clip-text bg-gradient-to-r from-primary to-secondary text-lg md:text-lg lg:text-lg text-emerald-500  dark:invert">
          {company}
        </h5>
        <p className="text-secondary text-base md:text-base lg:text-base font-semibold">
          {position}
        </p>
        <p className="font-normal text-secondary text-sm md:text-sm lg:text-sm mb-4">
          {description}
        </p>
        {achievements.map((achievement, index) => (
          <div className="flex space-x-1 items-start my-2" key={index}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-3 w-4 mt-1 text-neutral-300 dark:invert"
            >
              <path
                d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-1.293 5.953a1 1 0 0 0 -1.32 -.083l-.094 .083l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.403 1.403l.083 .094l2 2l.094 .083a1 1 0 0 0 1.226 0l.094 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z"
                fill="currentColor"
                strokeWidth="0"
              ></path>
            </svg>
            <p className="font-normal text-secondary text-sm md:text-sm lg:text-sm max-w-xl">
              {achievement}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
