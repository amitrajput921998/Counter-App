import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [animate, setAnimate] = useState(false);

  const incrementCount = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const decrementCount = () => {
    setCount((prevCount) => prevCount - 1);
  };

  useEffect(() => {
    if (count % 10 === 0 || count <= 0) {
      setAnimate(true);
    } else {
      setAnimate(false);
    }
  }, [count]);

  return (
    <div className={`container ${animate ? "animate" : ""}`}>
      <h1>Counter App</h1>
      <div className="counter">{count}</div>
      <div className="button">
        <button onClick={incrementCount}>+</button>
        <button onClick={decrementCount}>-</button>
      </div>
    </div>
  );
}

export default App;
