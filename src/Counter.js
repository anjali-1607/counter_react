import React, { useState } from "react";

export default function Counter() {
  const [counter, setCounter] = useState(0);
  return (
    <>
      <h1>{counter}</h1>
      <div
        style={{
          display: "flex",
        }}>
        <button
          style={{
            margin: "30px",
            width: "50px",
            height: "50px",
            fontSize: "35px",
          }}
          onClick={() => {
            setCounter(counter + 1);
          }}>
          +
        </button>
        <button
          style={{
            margin: "30px",
            width: "50px",
            height: "50px",
            fontSize: "35px",
          }}
          onClick={() => {
            setCounter(counter - 1);
          }}>
          -
        </button>
      </div>
    </>
  );
}
