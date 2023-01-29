import React, { useRef, useState } from "react";
import { useEffect } from "react";

export default function ClockDisplay1() {
  // const [timerDays, setTimerDays] = useState("00");
  const [timerHours, setTimerHours] = useState("00");
  const [timerMinutes, setTimerMinutes] = useState("00");
  const [timerSeconds, setTimerSeconds] = useState("00");

  let interval = useRef();

  const startTimer = () => {
    const countdownDate = new Date("February 25, 2023 17:00:00").getTime();

    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate - now;

      const [hours, minutes, seconds] = getReturnValues(distance);
    
        if(distance < 0) {
            //stop timer
            clearInterval(interval.current);
        }else {
            //update timer
            // setTimerDays(days);
            setTimerHours(hours);
            setTimerMinutes(minutes);
            setTimerSeconds(seconds);
        }

    }, 1000);

  };

  const getReturnValues = (countDown) => {
    // const days = Math.floor(countDown / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (countDown ) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((countDown % (1000 * 60)) / 1000);

    return [hours, minutes, seconds];
  };

  useEffect(() => {
    startTimer();
    return () => {
      clearInterval(interval.current);
    }
  });
  

  return (
    <div className="timer-content">
      <div className="hours-container">
        <h3>{timerHours}</h3>
        <p>Hours</p>
      </div>
      <div id="colon">
        <h3>:</h3>
      </div>
      <div className="minutes-container">
        <h3>{timerMinutes}</h3>
        <p>Minutes</p>
      </div>
      <div id="colon">
        <h3>:</h3>
      </div>
      <div className="seconds-container">
        <h3>{timerSeconds}</h3>
        <p>Seconds</p>
      </div>
    </div>
  );
}
