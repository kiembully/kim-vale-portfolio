"use client"
import { DirectionAwareHover } from "@/app/_components/UI/direction-aware-hover";
import SideNavLayout from "@/app/_layouts/SideNav";
import { motion } from "framer-motion";

const page = () => {
  const imageUrl = '/avatar/aboutme.jpg'
  
  return (
    <SideNavLayout>
      <div className="flex flex-col min-h-screen py-10 md:py-20 px-12">
        <h1 className="text-base md:text-xl lg:text-4xl bg-clip-text font-black dark:text-white">
          About Me 🙋‍♂️
        </h1>
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="my-10 relative"
        >
          <DirectionAwareHover imageUrl={imageUrl}>
            <p className="font-bold text-xl">Kim Vale</p>
            <p className="font-normal text-sm">Software Developer</p>
          </DirectionAwareHover>
        </motion.div>
        <div className="max-w-4xl dark:invert">
          <p className="text-sm lg:text-base font-normal text-neutral-500 mt-4">
            Hey there, I&apos;m Kim Vale - a passionate developer,
            and a connoisseur of awesome design. Welcome to my corner of the
            digital world!
          </p>
          <p className="text-sm lg:text-base font-normal text-neutral-500 mt-4">
            Since the early days of my journey, I&apos;ve been captivated by the
            art of crafting exceptional digital experiences. As a developer, I
            thrive on turning lines of code into functional and elegant
            solutions. My goal is to not just create software, but to build
            digital marvels that seamlessly merge form and function.
          </p>
          {/* <p className="text-sm lg:text-base font-normal text-neutral-500 mt-4">
            But my journey doesn&apos;t stop at coding. With a heart full of
            words and a mind brimming with ideas, I&apos;ve ventured into the
            realm of writing. From tech articles that unravel complex concepts
            to creative tales that ignite the imagination, I weave words to
            inform, entertain, and inspire.
          </p> */}
          <p className="text-sm lg:text-base font-normal text-neutral-500 mt-4">
            What sets me apart is my unwavering appreciation for design. I
            believe that aesthetics and usability go hand in hand. My eye for
            awesome design ensures that every project I undertake not only works
            flawlessly under the hood but also looks stunning on the surface.
          </p>
          <p className="text-sm lg:text-base font-normal text-neutral-500 mt-4">
            Through this website, I aim to share my insights, experiences, and
            creations with you. Whether you&apos;re a fellow developer seeking
            solutions, a fellow writer in search of inspiration, or simply
            someone who appreciates the finer aspects of design, there&apos;s
            something here for you.
          </p>
          <p className="text-sm lg:text-base font-normal text-neutral-500 mt-4">
            Join me on this journey of bytes and narratives, logic and
            creativity, code and prose. Together, we can explore the boundless
            possibilities of technology and storytelling, all while reveling in
            the sheer beauty of thoughtful design.
          </p>
          <p className="text-sm lg:text-base font-normal text-neutral-500 mt-4">
            Thank you for being here, and I can&apos;t wait to embark on this
            adventure with you.
          </p>
        </div>
      </div>
    </SideNavLayout>
  );
}

export default page;