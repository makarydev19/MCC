'use client';

import { useEffect, useState } from 'react';

import ThemeContext from '@/Context/themeContext';

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const themeFromStorage: boolean =
    typeof localStorage !== 'undefined' && localStorage.getItem('mcc-theme')
      ? JSON.parse(localStorage.getItem('mcc-theme')!)
      : false;

  const [darkTheme, setDarkTheme] = useState<boolean>(themeFromStorage);
  const [renderComponent, setRenderComponent] = useState(false);

  useEffect(() => {
    setRenderComponent(true);
  }, []);

  // Mirror the theme on <html> so the page background (overscroll,
  // scrollbar) matches in dark mode too.
  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkTheme);
  }, [darkTheme]);

  if (!renderComponent) return <></>;

  return (
    <ThemeContext.Provider value={{ darkTheme, setDarkTheme }}>
      <div className={`${darkTheme ? 'dark' : ''} min-h-screen`}>
        <div className="bg-bg text-fg transition-colors duration-300">
          {children}
        </div>
      </div>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
