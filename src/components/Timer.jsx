import  { useEffect, useState } from "react";

export default function Timer() {
  const [time, setTime] = useState(10);
  const [start, setStart] = useState(false);

  useEffect(() => {
    let interval = 0;

    if (start) {
      interval = setInterval(() => {
        setTime((prev) => prev - 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }
    if(time===0){
    clearInterval(interval)
    }

    return () => {
      clearInterval(interval);
    };
  }, [start, time]);

  return (
    <div>
      <h1>{time}</h1>
      <button onClick={() => setStart(true)}>Start</button>
      <button onClick={() => setStart(false)}>Stop</button>
      <button onClick={() => {
        setStart(false)
        setTime(10)
      }}>Reset</button>
    </div>
  );
}