"use client"
import BottomGradient from "@/app/_components/Forms/BottomGradient";
import { Input } from "@/app/_components/Forms/input";
import LabelInputContainer from "@/app/_components/Forms/LabelInputContainer";
import { TextArea } from "@/app/_components/Forms/textarea";
import SideNavLayout from "@/app/_layouts/SideNav";
import { Label } from "@radix-ui/react-label";

const page = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted");
  };
  return (
    <SideNavLayout>
      <div className="flex flex-col min-h-screen py-10 md:py-20 px-12">
        <h1 className="text-base md:text-xl lg:text-4xl bg-clip-text font-black dark:text-white">
          Contact Me ✉️
        </h1>
        <div className="max-w-4xl">
          <p className="text-sm lg:text-base font-normal text-neutral-500 mt-4 max-w-sm dark:invert">
            Reach out to me over email or fill up this contact form. I will get
            back to you ASAP - I promise.
          </p>
          <div className="max-w-md w-full my-6 rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
            <form className="my-8" onSubmit={handleSubmit}>
              <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
                <LabelInputContainer>
                  <Label htmlFor="firstname" className="dark:invert">First name</Label>
                  <Input id="firstname" placeholder="Kim" type="text" />
                </LabelInputContainer>
                <LabelInputContainer>
                  <Label htmlFor="lastname" className="dark:invert">Last name</Label>
                  <Input id="lastname" placeholder="Vale" type="text" />
                </LabelInputContainer>
              </div>
              <LabelInputContainer className="mb-4">
                <Label htmlFor="email" className="dark:invert">Email Address</Label>
                <Input
                  id="email"
                  placeholder="kimvale@gm.com"
                  type="email"
                />
              </LabelInputContainer>
              <LabelInputContainer className="mb-4">
                <Label htmlFor="email" className="dark:invert">Message</Label>
                <TextArea placeholder="Your Message" />
              </LabelInputContainer>

              <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />

              <button
                className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
                type="submit"
              >
                Submit &rarr;
                <BottomGradient />
              </button>

            </form>
          </div>
        </div>
      </div>
    </SideNavLayout>
  );
};

export default page;
