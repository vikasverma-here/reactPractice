import React from 'react';
import { useRef, useState } from 'react';
import './index.css'; // Import the CSS file

function App() {
  const [timer, settimer] = useState(0);
  let ref = useRef(null);

  const handleClick = () => {
    ref.current = setInterval(() => {
      settimer((timer) => timer + 1);
    }, 100);
  };

  const handleClick2 = () => {
    clearInterval(ref.current);
  };

  const handleClick3 = () => {
    handleClick2();
    settimer(0);
  };

  return (
    <div className="container">
      <h1 className="timer">StopWatch Timer : {timer}</h1>
      <div>
        <button className="start" onClick={handleClick}>
          Start
        </button>
        <button className="stop" onClick={handleClick2}>
          Stop
        </button>
        <button className="reset" onClick={handleClick3}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default App;
