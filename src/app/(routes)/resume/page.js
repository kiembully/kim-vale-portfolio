import SideNavLayout from "@/app/_layouts/SideNav";
import Timeline from "./timeline";
import { resume } from "./resume";
import { TracingBeam } from "@/app/_components/UI/tracing-beam";

const page = () => {
  return (
    <SideNavLayout>
      <div className="flex flex-col min-h-screen py-10 md:py-20 px-12">
        <h1 className="text-base md:text-xl lg:text-4xl bg-clip-text font-black dark:text-white">
          Work History 💼
        </h1>
        <div className="max-w-4xl">
          <p className="text-sm lg:text-base font-normal text-neutral-500 mt-4 max-w-sm dark:invert">
            I&apos;m a full-stack developer that loves building products and web
            apps that can impact millions of lives
          </p>
          <div className="relative">
            <TracingBeam className="px-6">
              {/* <div className="max-w-2xl mx-auto antialiased pt-4 relative"> */}
              {resume.map((item, _index) => {
                return (
                  <Timeline
                    key={`timeline${_index}`}
                    date={item.date}
                    company={item.company}
                    position={item.position}
                    description={item.description}
                    achievements={item.achievements}
                  />
                );
              })}
              {/* </div> */}
            </TracingBeam>
          </div>
        </div>
      </div>
    </SideNavLayout>
  );
};

export default page;
