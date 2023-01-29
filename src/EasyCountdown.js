import React, { useEffect, useState } from "react";
import { useCountDown } from "./useCountDown";

export default function ClockDisplay({duration}) {
  const [countDown, setCountDown] = useState(duration);
  let x = countDown - 1000;

  useEffect(() => {
    const myTime = setTimeout(() => {
      setCountDown(x);
      console.log(x)
    }, 1000)
    
  }, [countDown]);

  const getReturnValues = (countDown) => {
    const days = Math.floor(countDown / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
        (countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor(
        (countDown % (1000 * 60 * 60) / (1000 * 60))
    );
    const seconds = Math.floor(
        (countDown % (1000 * 60) / 1000)
    );

    return `${days}: ${hours}: ${minutes}: ${seconds}`
}

  return (
    <div>
      <h1>{getReturnValues(countDown)}</h1>
    </div>
  );
}
