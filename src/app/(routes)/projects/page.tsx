import { HoverEffect } from "@/app/_components/UI/card-hover-effect";
import { allProject } from "@/app/_constants/projects";
import SideNavLayout from "@/app/_layouts/SideNav";

const page = () => {
  return (
    <SideNavLayout>
     <div className="flex flex-col min-h-screen py-10 md:py-20 px-12">
        <h1 className="text-base md:text-xl lg:text-4xl bg-clip-text font-black dark:text-white">
          What I&apos;ve been working on ⚡
        </h1>
        <div className="max-w-4xl dark:invert">
          <HoverEffect items={allProject} />
        </div>
      </div>
    </SideNavLayout>
  );
}

export default page;