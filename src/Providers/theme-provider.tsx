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

  if (!renderComponent) return <></>;

  return (
    <ThemeContext.Provider value={{ darkTheme, setDarkTheme }}>
      <div className={`${darkTheme ? 'dark' : ''} min-h-screen`}>
        <div className="dark:text-white bg-LightModeBG dark:bg-DarkModeBG text-[#1E1E1E] transition-all duration-200 ">
          {children}
        </div>
      </div>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
