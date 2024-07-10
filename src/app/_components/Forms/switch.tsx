import React from "react";
import * as Switch from "@radix-ui/react-switch";

interface ToggleSwitchProps {
  label: string;
  onToggle: (checked: boolean) => void;
}

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({ label, onToggle }) => (
  <form>
    <div className="flex items-center justify-between">
      <label
        className="font-semibold bg-clip-text bg-gradient-to-r from-primary to-secondary text-sm md:text-sm lg:text-sm dark:invert"
        htmlFor="airplane-mode"
      >
        {label}
      </label>
      <Switch.Root
        className="w-[50px] h-[29px] bg-blackA6 rounded-full relative bg-white dark:bg-gray-400 border-solid border-2 border-gray-300 data-[state=checked]:bg-black outline-none cursor-default cursor-pointer"
        id="airplane-mode"
        onCheckedChange={onToggle}
        // style={{ "-webkit-tap-highlight-color": "rgba(0, 0, 0, 0)" }}
      >
        <Switch.Thumb className="block w-[21px] h-[21px] bg-white dark:bg-black rounded-full border-solid border-2 border-gray-300 dark:border-gray-900 transition-transform duration-100 translate-x-0.5 will-change-transform data-[state=checked]:translate-x-[24px]" />
      </Switch.Root>
    </div>
  </form>
);

export default ToggleSwitch;
