/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from "react";
import ThemeContext from "../context/ThemeContext";
import Details from "./Detail";
import Chart from "./chart";
import Header from "./Header";
import UserForm from "./UserForm";
import { reducer } from "../reducers/stats-reducer";
import WorkerFactory from "../WorkerFactory";
import StatsWorker from "../workers/StatsWorker";
import { longText } from "../consts/long-text";
import { freqConst } from "../consts/freq-const";
import { statsConst } from "../consts/stats-const";
import calculateStatistics, {
  calculateAlphabetFrequency,
} from "../helpers/stats-calculator";

const Dashboard = () => {
  const { darkMode } = useContext(ThemeContext);

  const [info, dispatch] = React.useReducer(reducer, {
    err: "",
    num: "",
    stats: [],
  });

  const [num, setNum] = useState(1);
  const [freq, setFreq] = useState(freqConst);
  const [stats, setStats] = useState(statsConst);

  const runWorker = (text) => {
    dispatch({ type: "SET_ERROR", err: "" });
    const worker = new WorkerFactory(StatsWorker);

    // const text = "";
    worker.postMessage({ text });
    worker.onerror = (err) => err;
    worker.onmessage = (e) => {
      const { time, result, freq } = e.data;
      setFreq(freq);
      setStats(result);

      dispatch({
        type: "UPDATE_FIBO",
        time,
        result,
        freq,
      });
      worker.terminate();
    };
  };
  const Calculate = (num, isWorker) => {
    const text = longText.repeat(num);

    if (isWorker) {
      runWorker(text);
    } else {
      setStats(calculateStatistics(text));
      setFreq(calculateAlphabetFrequency(text));
    }
  };
  // useEffect(() => {
  //   Calculate(num, false);
  // }, [num]);

  const handleFormSubmit = (num, useWebWorker) => {
    setNum(num);
    Calculate(num, useWebWorker);
  };

  return (
    <div
      className={`font-poppins p-2 sm:p-4 md:p-8 lg:p-10 max-h-fit flex flex-col gap-6  font-quicksand ${
        darkMode ? "bg-gray-900 text-gray-300" : "bg-neutral-100"
      }`}
    >
      <div className="flex justify-start items-center">
        <Header></Header>
      </div>
      <div className="flex justify-start items-center">
        <UserForm onSubmitForm={handleFormSubmit} />
      </div>
      <div className="grid md:grid-cols-3 flex-grow gap-6">
        <div className="">
          <Details results={stats} />
        </div>
        <div className=" md:col-span-2 min-h-[400px]">
          <Chart results={freq} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
