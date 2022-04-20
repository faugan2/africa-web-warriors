import React from 'react';
import { useTimer } from 'react-timer-hook';
import "../styles/timer.scss";

function MyTimer({ expiryTimestamp }) {

  const {
    seconds,
    minutes,
    hours,
    days,
    isRunning,
    start,
    pause,
    resume,
    restart,
  } = useTimer({ expiryTimestamp, onExpire: () => console.warn('onExpire called') });


  return (
    <div style={{textAlign: 'center'}} className="timer">
      
      <div>
        <span>{days}<span>Jr</span></span>:
        <span>{hours}<span>Hr</span></span>:
        <span>{minutes}<span>Min</span></span>:
        <span>{seconds}<span>Sec</span></span>
      </div>
    </div>
  );
}

export default MyTimer;