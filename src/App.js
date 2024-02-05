import { useState } from "react";
import "./App.css";
import ThemeContext from "./context/ThemeContext";
import DashBoard from "./components/Dashboard";
import ThemeIcon from "./components/ThemeIcon";

function App() {
  const prefersDarkMode =
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [darkMode, setDarkMode] = useState(prefersDarkMode);

  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
      <ThemeIcon />
      <DashBoard />
    </ThemeContext.Provider>
  );
}

export default App;
