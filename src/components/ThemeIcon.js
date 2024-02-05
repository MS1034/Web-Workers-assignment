import React, { useContext } from "react";
import ThemeContext from "../context/ThemeContext";
import { BsMoonStars } from "react-icons/bs";

const ThemeIcon = () => {
  const { darkMode, setDarkMode } = useContext(ThemeContext);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <button
      onClick={toggleDarkMode}
      className={`z-20 rounded-lg border-1 border-neutral-400 p-2 absolute right-2 top-2 shadow-lg transition duration-300 hover:scale-125 ${
        darkMode ? "shadow-gray-800 " : null
      }`}
    >
      <BsMoonStars className={darkMode ? "fill-white" : "fill-black"} />
    </button>
  );
};

export default ThemeIcon;
