import React, { useState } from "react";
import "../css/counter.css";

const Counter = () => {
  const [num, setNum] = useState(0);

  const add = () => {
    setNum((pre) => pre + 1);
  };
  const sub = () => {
    setNum((pre) => pre - 1);
  };
  return (
    <div className="counter">
      <div>現在のカウント {num}</div>
      <button onClick={add}>+</button>
      <button onClick={sub}>-</button>
    </div>
  );
};

export default Counter;
