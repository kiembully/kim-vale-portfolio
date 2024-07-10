import React, { MouseEventHandler, ReactNode } from "react";

interface CustomButtonsProps {
  type: string;
  children: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

const CustomButtons: React.FC<CustomButtonsProps> = ({
  type,
  children,
  onClick,
}) => {
  const buttonType = [
    {
      name: "shimmer",
      class:
        "inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 md:font-medium text-slate-400 text-sm md:text-md transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50",
    },
  ];

  const selectedButtonType = buttonType.find((button) => button.name === type);

  return (
    <button onClick={onClick} className={selectedButtonType?.class}>
      {children}
    </button>
  );
};

export default CustomButtons;
