// import Image from "next/image";
// import { SignupFormDemo } from "./_components/signup";

import { HeroParallax } from "./_components/UI/hero-parallax";
import { InfiniteMovingCards } from "./_components/UI/infinite-moving-cards";
import SideNavLayout from "./_layouts/SideNav";
import { projects } from "./_constants/projects";
import { frameworks, languages } from "./_constants/tech-stacks";

export default function Home() {
  return (
    <>
      <SideNavLayout>
        <HeroParallax products={projects} />

        <div className="relative pt-20 pb-10 md:pt-40 md:pb:20 px-12 w-auto md:w-max z-10">
          <h2 className="text-2xl md:text-7xl font-bold dark:text-white">
            Tech Stack 🖥️
          </h2>
          <p className="max-w-2xl text-base md:text-xl mt-8 dark:text-neutral-200">
            I build beautiful products with the latest technologies and
            frameworks. I am passionate developer and designer that love to
            build amazing products.
          </p>
        </div>

        <div className="flex flex-col antialiased relative overflow-hidden dark:bg-gray-800">
          <InfiniteMovingCards
            items={frameworks}
            direction="right"
            speed="slow"
          />
        </div>
        <div className="flex flex-col antialiased relative overflow-hidden dark:bg-gray-800">
          <InfiniteMovingCards
            items={languages}
            direction="left"
            speed="slow"
          />
        </div>
      </SideNavLayout>
    </>
  );
}
