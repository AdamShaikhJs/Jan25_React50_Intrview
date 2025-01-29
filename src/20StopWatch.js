import { useState, useEffect } from "react";
// import "./Stopwatch.css";

export default function Stopwatch() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timer;
    if (isRunning) {
      timer = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    } else {
      clearInterval(timer);
    }
    return () => clearInterval(timer);
  }, [isRunning]);

  const handleStartStop = () => {
    if (!isRunning) setTime(0);
    setIsRunning(!isRunning);
  };

  const handleReset = () => {
    setIsRunning(false);
    setTime(0);
  };

  return (
    <main>
      <h1 className="stopwatch-title">Stopwatch</h1>
      <p className="stopwatch-time">{new Date(time * 1000).toISOString().substr(11, 8)}</p>
      <p className="stopwatch-time">{time}</p>

      <div className="stopwatch-buttons">
        <button className="start-stop-button" onClick={handleStartStop}>
          {isRunning ? "Pause" : "Start"}
        </button>
        <button className="reset-button" onClick={handleReset}>
          Reset
        </button>
      </div>
    </main>
  );
}
