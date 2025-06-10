import { useEffect, useState, useRef } from "react";

export default function StopWatch() {
  const [time, setTime] = useState(0); // 시간 상태
  const [isRunning, setIsRunning] = useState(false); // 타이머 작동 여부
  const intervalRef = useRef(null); // setInterval ID를 저장할 ref

  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    }

    return () => {
      clearInterval(intervalRef.current); // 정리 필수!
    };
  }, [isRunning]);

  const handleStart = () => {
    setIsRunning(true);
  };

  const handleStop = () => {
    setIsRunning(false);
  };

  const handleReset = () => {
    setIsRunning(false);
    setTime(0);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>⏱️ Time: {time}초</h1>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}
