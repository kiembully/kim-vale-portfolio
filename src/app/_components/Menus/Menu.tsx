"use client";
import { usePathname } from "next/navigation";
import CustomLink from "../LinksAndButtons/CustomLink";
import ToggleSwitch from "../Forms/switch";
import { useEffect, useState } from "react";
import { MenuList, SocialList } from "./MenuList";
import { HoverBorderGradient } from "../UI/hover-border-gradient";
import Link from 'next/link';

const Menu = () => {
  const path = usePathname();
  const [theme, setTheme] = useState('');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  return (
    <div className="flex flex-col min-h-screen pt-8 px-2 w-48 relative md:fixed justify-between">
      <div className="dark:invert">
        <div className="flex flex-row">
          <div className="self-center pr-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="icon icon-tabler icons-tabler-outline icon-tabler-user-circle h-10 w-10"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
              <path d="M12 10m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
              <path d="M6.168 18.849a4 4 0 0 1 3.832 -2.849h4a4 4 0 0 1 3.834 2.855" />
            </svg>
          </div>
          <div className="flex text-sm flex-col">
            <p className="font-bold text-lg text-primary">Kim Vale</p>
            <p className="font-light text-secondary">Developer</p>
          </div>
        </div>

        <div className="flex flex-col mt-12 space-y-2 text-sm">
          {MenuList.map((item, index) => {
            return (
              <div key={`menulink-${index}`}>
                <CustomLink
                  path={item.path}
                  link={item.name}
                  className={`text-gray-400 dark:text-gray-900 hover:text-gray-900 flex items-center space-x-2 py-2 px-2 ${
                    path === item.path &&
                    "bg-white shadow-lg rounded-md text-gray-900"
                  }`}
                  icon={item.icon}
                  active={path === item.path}
                />
              </div>
            );
          })}
        </div>

        <div className="space-y-2 text-sm">
          <p className="font-semibold bg-clip-text bg-gradient-to-r from-primary to-secondary text-sm md:text-sm lg:text-sm pt-10 px-2">
            Socials
          </p>
          {SocialList.map((item, index) => {
            return (
              <div key={`menulink-${index}`} className="space-x-2">
                <CustomLink
                  path={item.path}
                  link={item.name}
                  className={`text-gray-400 dark:text-gray-900 hover:text-gray-900 flex items-center space-x-2 py-2 px-2 ${
                    path === item.path &&
                    "bg-white shadow-lg rounded-md text-gray-900"
                  }`}
                  icon={item.icon}
                  active={path === item.path}
                />
              </div>
            );
          })}
        </div>
      </div>

      <div className="flex space-y-2 flex-col py-6">
        <div className="flex justify-center text-center">
          <HoverBorderGradient
            containerClassName="rounded-full"
            as="button"
            className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2 text-sm"
          >
            <Link href='/resume'>Read Resume &gt;</Link>
          </HoverBorderGradient>
        </div>
        <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />
        <div className="px-6">
          <ToggleSwitch label={`${theme === 'dark' ? 'Light' : 'Dark'} Mode`} onToggle={toggleTheme} />
        </div>
      </div>
    </div>
  );
};

export default Menu;
