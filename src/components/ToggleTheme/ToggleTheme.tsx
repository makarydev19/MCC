"use client";

import { MdOutlineLightMode, MdDarkMode } from "react-icons/md";
import ThemeContext from "@/Context/themeContext";
import { useContext } from "react";

const ToggleTheme = () => {
  const { darkTheme, setDarkTheme } = useContext(ThemeContext);

  return (
    <>
      <ul>
        <li className="">
          {darkTheme ? (
            <MdOutlineLightMode
              className="cursor-pointer ml-4 size-6"
              onClick={() => {
                setDarkTheme(false);
                localStorage.removeItem("mcc-theme");
              }}
            />
          ) : (
            <MdDarkMode
              className="cursor-pointer ml-4 size-6"
              onClick={() => {
                setDarkTheme(true);
                localStorage.setItem("mcc-theme", "true");
              }}
            />
          )}
        </li>
      </ul>
    </>
  );
};

export default ToggleTheme;
