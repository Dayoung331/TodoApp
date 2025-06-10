import { useEffect, useState } from "react";

export default function Timer() {
  const [time, setTime] = useState(0); // 시간 상태
  const [inputTime, setInputTime] = useState(""); // 사용자로부터 입력받은 시간
  const [isRunning, setIsRunning] = useState(false); // 새로고침할 때마다 alert되는 거 방지하기 위함.

  useEffect(() => {
    if (!isRunning || time <= 0) return;

    const timerId = setInterval(() => {
      setTime((prev) => {
        if (prev <= 1) {
          clearInterval(timerId);
          alert("타이머 종료!");
          setIsRunning(false);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timerId);
  }, [time, isRunning]);

  const handleStart = () => {
    const seconds = parseInt(inputTime);
    setTime(seconds);
    setIsRunning(true);
    setInputTime("");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>⏱️ Timer 종료까지 {time}초</h1>
      <input
        type="number"
        placeholder="초 입력"
        value={inputTime}
        onChange={(e) => setInputTime(e.target.value)}
      ></input>
      <button onClick={handleStart}>타이머 시작</button>
    </div>
  );
}
