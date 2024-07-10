'use client';
import { useEffect, useState } from 'react';

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
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

  // const toggleTheme = () => {
  //   setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
  // };

  return (
    <>
      {/* <button onClick={toggleTheme}>
        Toggle {theme === 'dark' ? 'Light' : 'Dark'} Mode
      </button> */}
      {children}
    </>
  );
};

export default ThemeProvider;
