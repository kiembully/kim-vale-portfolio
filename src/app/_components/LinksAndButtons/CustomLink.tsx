import Link from 'next/link';
import React from 'react';

interface CustomLinkProps {
  path: string;
  link: React.ReactNode;
  className?: string; // Optional className prop
  icon?: React.ReactNode; // Optional icon prop
  active: boolean;
}

const CustomLink: React.FC<CustomLinkProps> = ({ path, link, className, icon, active }) => {
  return (
    <Link href={path} className={className}>
      {icon && <span className={`dark:text-gray-900 ${active ? 'text-sky-500' : 'text-inherit'}`}>{icon}</span>}
      {link}
    </Link>
  );
}

export default CustomLink;
