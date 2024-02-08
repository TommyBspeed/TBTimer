import React, { useState, useEffect } from "react";
import "./Stopwatch.css";

const Stopwatch = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [startTime, setStartTime] = useState(0);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [solveTimes, setSolveTimes] = useState([]);

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
      <div>
        <h1>{formatTime(elapsedTime)}</h1>

        <button onClick={handleReset}>Reset timer</button>
      </div>
      <h3>Past solves</h3>
      <ul>
        {solveTimes.map((lapTime, index) => (
          <li key={index}>{formatTime(lapTime)}</li>
        ))}
      </ul>
    </div>
  );
};

export default Stopwatch;
