import React, { useState, useEffect } from "react";
import "./Stopwatch.css";

// const toggleScrambleTimer = (event) => {
// const [isActive, setisActive] = useState(true);
//   if (!isActive) {
//     setisActive(isActive);
//   } else {
//     setisActive(!isActive);
//   }
//   setIsActive(!isActive);
// };

const Stopwatch = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [startTime, setStartTime] = useState(0);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [solveTimes, setSolveTimes] = useState([]);
  //   const [stIsActive, setStIsActive] = useState(true);

  useEffect(() => {
    let interval;

    if (isRunning) {
      interval = setInterval(() => {
        const now = performance.now();
        const elapsed = now - startTime;
        setElapsedTime(elapsed);
      }, 1); // Update every millisecond
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isRunning, startTime]);

  const handleKeyPress = (event) => {
    if (event.key === " " || event.key === "Spacebar") {
      if (!isRunning) {
        setStartTime(performance.now() - elapsedTime);
      } else {
        // Record lap time
        setSolveTimes([...solveTimes, elapsedTime]);
      }
      setIsRunning(!isRunning);
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress);

    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [isRunning, elapsedTime, solveTimes]);

  const formatTime = (time) => {
    const milliseconds = Math.floor(time % 1000);
    const seconds = Math.floor((time / 1000) % 60);
    const minutes = Math.floor((time / (1000 * 60)) % 60);
    // const ao3 = ;
    // const ao5 = ;
    // const ao12 = ;
    // const best =;
    const formattedTime = `${String(minutes).padStart(2, "0")}:${String(
      seconds
    ).padStart(2, "0")}.${String(milliseconds).padStart(3, "0")}`;
    return formattedTime;
  };

  const handleReset = () => {
    setElapsedTime(0);
  };

  return (
    <div>
      <div className="timerbox">
        <h1>{formatTime(elapsedTime)}</h1>

        <button className="resetButton" onClick={handleReset}>
          Reset timer
        </button>
        {/* <button onClick={toggleScrambleTimer}>Use Scramble Timer</button> */}
      </div>
      <div className="cacheBox">
        <h3 className="pastSolves">Past solves</h3>
        <ul className="solvesCache">
          {solveTimes.map((lapTime, index) => (
            <li key={index}>{formatTime(lapTime)}</li>
          ))}
        </ul>
      </div>
      <div className="averagesBox">
        <h3>Averages</h3>
        <ul>
          <li>Single Best:</li>
          <li>Ao3:</li>
          <li>Ao5:</li>
          <li>Ao12:</li>
        </ul>
      </div>
    </div>
  );
};

export default Stopwatch;
