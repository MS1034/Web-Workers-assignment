import React, { useContext, useRef } from "react";
import ThemeContext from "../context/ThemeContext";

import { FaParagraph } from "react-icons/fa6";
import { CiEraser } from "react-icons/ci";
import { longText } from "../consts/long-text";

function Editor({ onTextChange }) {
  const { darkMode } = useContext(ThemeContext);
  const handleTextChange = (event) => {
    const newText = event.target.value;
    onTextChange(newText);
  };
  const textAreaRef = useRef(null);
  const handleClear = () => {
    textAreaRef.current.value = "";
    onTextChange("");
  };

  return (
    <form className="flex w-full h-full ">
      <div class="w-full flex flex-col  mb-4 border ">
        <div class="  items-center justify-between px-3 py-2 border-b ">
          <div class="flex flex-wrap items-center divide-gray-200 sm:divide-x sm:rtl:divide-x-reverse dark:divide-gray-600">
            <div class="flex text-xs items-center space-x-1 rtl:space-x-reverse sm:pe-4">
              <button
                type="button"
                className={`p-2   inline-flex  rounded cursor-pointer ${
                  !darkMode
                    ? "text-gray-500 hover:text-gray-900 hover:bg-gray-100"
                    : "text-gray-400 hover:text-white hover:bg-gray-600"
                }`}
              >
                <FaParagraph className="mr-1 w-4 h-4" />
                Load Paragraph
              </button>
              <button
                type="button"
                onClick={handleClear}
                className={`p-2  inline-flex  rounded cursor-pointer ${
                  !darkMode
                    ? "text-gray-500 hover:text-gray-900 hover:bg-gray-100"
                    : "text-gray-400 hover:text-white hover:bg-gray-600"
                }`}
              >
                <CiEraser className="mr-1 w-4 h-4" />
                {/* <PiParagraph className="w-6 h-6" /> */}
                Clear Text Area
              </button>
            </div>
          </div>
        </div>
        <div class="  flex-[1]  p- rounded-b-lg ">
          <label for="editor" class="sr-only">
            Publish post
          </label>
          <div class=" w-full h-full">
            <textarea
              ref={textAreaRef}
              //   defaultValue={largeText}
              onChange={handleTextChange}
              class="peer min-h-full  w-full resize-none rounded-[7px] border border-blue-gray-200  bg-transparent px-3 py-2.5  text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 p focus:border-2 focus:border-gray-900  focus:outline-0 disabled:resize-none disabled:border-0 disabled:bg-blue-gray-50"
              placeholder=" "
            ></textarea>
          </div>
        </div>
      </div>
    </form>
  );
}

export default Editor;
