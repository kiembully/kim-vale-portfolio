import { IconBrandLinkedin, IconBrandGithub } from '@tabler/icons-react';

export const MenuList = [
  {
    path: "/",
    name: "Home",
    icon: (
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
        className="icon icon-tabler icons-tabler-outline icon-tabler-home w-4 h-4 mr-2"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M5 12l-2 0l9 -9l9 9l-2 0" />
        <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" />
        <path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6" />
      </svg>
    ),
  },
  {
    path: "/about",
    name: "About",
    icon: (
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
        className="icon icon-tabler icons-tabler-outline icon-tabler-info-square-rounded w-4 h-4 mr-2"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M12 9h.01" />
        <path d="M11 12h1v4h1" />
        <path d="M12 3c7.2 0 9 1.8 9 9s-1.8 9 -9 9s-9 -1.8 -9 -9s1.8 -9 9 -9z" />
      </svg>
    ),
  },
  {
    path: "/projects",
    name: "Projects",
    icon: (
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
        className="icon icon-tabler icons-tabler-outline icon-tabler-briefcase-2 w-4 h-4 mr-2"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M3 9a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-9z" />
        <path d="M8 7v-2a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v2" />
      </svg>
    ),
  },
  // {
  //   path: '/articles',
  //   name: 'Articles',
  //   icon: (
  //     <svg
  //       xmlns="http://www.w3.org/2000/svg"
  //       width={24}
  //       height={24}
  //       viewBox="0 0 24 24"
  //       fill="none"
  //       stroke="currentColor"
  //       strokeWidth={2}
  //       strokeLinecap="round"
  //       strokeLinejoin="round"
  //       className="icon icon-tabler icons-tabler-outline icon-tabler-article w-4 h-4 mr-2"
  //     >
  //       <path stroke="none" d="M0 0h24v24H0z" fill="none" />
  //       <path d="M3 4m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z" />
  //       <path d="M7 8h10" />
  //       <path d="M7 12h10" />
  //       <path d="M7 16h10" />
  //     </svg>
  //   ),
  // },
  {
    path: "/contact",
    name: "Contact",
    icon: (
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
        className="icon icon-tabler icons-tabler-outline icon-tabler-mail w-4 h-4 mr-2"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z" />
        <path d="M3 7l9 6l9 -6" />
      </svg>
    ),
  },
];

export const SocialList = [
  {
    path: 'https://github.com/kiembully',
    name: 'Github',
    icon: (<IconBrandGithub width={16} height={16} stroke={2} className='mr-2' />)
  },
  {
    path: 'https://www.linkedin.com/in/kim-vale-7b6160184/',
    name: 'LinkedIn',
    icon: (<IconBrandLinkedin width={16} height={16} stroke={2} className='mr-2' />)
  }
]