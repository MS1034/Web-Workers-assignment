import React, { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

const Card = ({ children }) => {
  const { darkMode } = useContext(ThemeContext);
  return (
    <div
      className={`w-full h-full rounded-md relative p-2 sm:p-2 md:p-4 lg:p-8 font-xs sm:font-medium  border-2 ${
        darkMode ? "bg-gray-900 border-gray-800" : "bg-white border-neutral-200"
      }`}
    >
      {children}
    </div>
  );
};

export default Card;
