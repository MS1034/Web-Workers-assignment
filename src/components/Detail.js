import React, { useContext } from "react";
import Card from "./Card";
import ThemeContext from "../context/ThemeContext";

const Details = (props) => {
  const { darkMode } = useContext(ThemeContext);
  const { results } = props;

  const detailsList = {
    Characters: "Characters",
    Words: "Words",
    Paragraphs: "Paragraphs",
    repeated_char: "Most repeater Character",
    repeated_Word: "Most repeater Word",
    awl: "Average Word Length",
    longest_word: "Longest Word",
  };

  return (
    <Card>
      <ul
        className={`w-full  h-full font-semibold text-xs md:text-xl   text-center flex flex-col justify-between divide-y-1 ${
          darkMode ? "divide-gray-800" : null
        }`}
      >
        Statistics
        {Object.keys(detailsList).map((item) => {
          return (
            <li
              key={item}
              className="flex-1 text-sm font-normal flex justify-between items-center"
            >
              <span>{detailsList[item]}</span>
              <span>{results[item]}</span>
            </li>
          );
        })}
      </ul>
    </Card>
  );
};

export default Details;
