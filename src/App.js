import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import TopBar from "./components/TopBar/TopBar";
import Footer from "./components/Footer/Footer";

import Stopwatch from "./components/Stopwatch/Stopwatch";
import "./components/DarkMode/DarkMode.css";
import TimeCache from "./components/TimeCache/TimeCache";
import ScrambleDisplay from "./components/ScrambleDisplay/ScrambleDisplay";

function App() {
  return (
    <Router>
      <div className="App">
        <TopBar />
        <ScrambleDisplay />
        <Stopwatch />

        {/* <TimeCache /> */}

        <Footer />
      </div>
    </Router>
  );
}

export default App;
