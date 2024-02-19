import React, { useContext, useState } from "react";
import { CiCalculator2 } from "react-icons/ci";
import ThemeContext from "../context/ThemeContext";

function UserForm({ onSubmitForm }) {
  const [useWebWorker, setUseWebWorker] = useState(false);
  const [repetitionCount, setRepetitionCount] = useState(10);
  const handleSubmit = (event) => {
    event.preventDefault();

    onSubmitForm(repetitionCount, useWebWorker);
  };
  const { darkMode } = useContext(ThemeContext);

  return (
    <div
      className={`w-full h-full rounded-md relative p-2 sm:p-2  font-xs sm:font-medium  border-2 ${
        darkMode ? "bg-gray-900 border-gray-800" : "bg-white border-neutral-200"
      }`}
    >
      <form
        class="flex flex-col space-y-4 sm:flex-row sm:justify-around  sm:items-center"
        onSubmit={handleSubmit}
      >
        <div>
          <label class="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              value={useWebWorker}
              class="sr-only peer"
              onChange={(e) => setUseWebWorker(e.target.checked)}
            />
            <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-teal-300 dark:peer-focus:ring-teal-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-teal-600"></div>
            <span
              className={`ms-3 text-sm font-medium  ${
                darkMode ? "text-gray-50" : "text-gray-900"
              }`}
            >
              Web Workers
            </span>
          </label>
        </div>
        <div className="flex flex-row justify-between align-middle text-center items-center space-x-4">
          <label
            for="number-input"
            className={`block mb-2 text-sm font-medium text-center ${
              darkMode ? "text-gray-50" : "text-gray-900"
            }`}
          >
            Repetition Count:
          </label>
          <input
            type="number"
            id="number-input"
            className="bg-gray-50 w-64 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-teal-500 focus:border-teal-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-teal-500 dark:focus:border-teal-500"
            placeholder="100"
            value={repetitionCount}
            //   defaultValue={true}
            onChange={(e) => setRepetitionCount(e.target.value)}
            min={1}
            max={1000}
            required
          />
        </div>
        <div>
          <button
            type="submit"
            class="text-white bg-teal-600 hover:bg-teal-700 focus:ring-4 focus:outline-none focus:ring-teal-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-teal-600 dark:hover:bg-teal-600 dark:focus:ring-teal-700"
          >
            <CiCalculator2 />
          </button>
        </div>
      </form>
    </div>
  );
}

export default UserForm;
