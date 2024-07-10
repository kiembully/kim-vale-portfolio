"use client"
import React, { ReactNode, useState } from 'react';
import Menu from '../_components/Menus/Menu';
import Footer from './Footer';
import { motion, SVGMotionProps } from 'framer-motion'
import Hamburger from '../_components/UI/hamburger';

interface SideNavProps {
  children: ReactNode;
}

const path01Variants = {
  open: { d: "M3.06061 2.99999L21.0606 21" },
  closed: { d: "M0 9.5L24 9.5" }
};

const path02Variants = {
  open: { d: "M3.00006 21.0607L21 3.06064" },
  moving: { d: "M0 14.5L24 14.5" },
  closed: { d: "M0 14.5L15 14.5" }
};

const SideNavLayout: React.FC<SideNavProps> = ({ children }) => {
  const [toggle, setToggle] = useState(false)
  const handleToggle = () => {
    setToggle(!toggle)
  }
  
  return (
    <div className="w-full bg-gray-200 dark:bg-[#333] flex flex-row overflow-x-hidden relative">
      <div className="bg-gray-200 dark:bg-[#191919] hidden md:flex left-0 top-0 bottom-0 min-w-48">
        <Menu />
      </div>
      <div className={`bg-gray-200 dark:bg-[#191919] fixed left-0 top-0 bottom-0 transition-width duration-500 ease-in-out ${toggle ? 'w-48' : 'w-0'} overflow-hidden z-50`}>
        <Menu />
      </div>
      <div className="flex-auto items-center justify-center pt-0 md:pt-2 overflow-hidden">
        <div className="bg-gray-100 dark:bg-background-dark min-h-screen border-none md:border-t md:border-l border-neutral-300 rounded-none md:rounded-tl-xl overflow-hidden">
          {children}
          <Footer />
          <div className="absolute top-4 right-4 z-50 dark:invert">
              <button onClick={handleToggle}>
                <svg width="32" height="32" viewBox="0 0 24 24">
                  <motion.path
                    stroke="#000"
                    animate={toggle ? 'open' : 'closed'}
                    variants={path01Variants}
                  />
                  <motion.path
                    stroke="#000"
                    animate={toggle ? 'open' : 'closed'}
                    variants={path02Variants}
                  />
                </svg>
              </button>
          </div>
        </div>
      </div>
      <div
        id="overlay"
        onClick={() => setToggle(false)}
        className={`absolute ${toggle ? 'block' : 'hidden'} md:hidden w-full h-full top-0 left-0 bottom-0 bg-black bg-opacity-50 z-40 cursor-pointer`}
      ></div>

    </div>
  );
}

export default SideNavLayout;
