import React, { useState } from "react";

export default function Counter({ total, onClick }) {
  // button클릭함수
  const [count, setCount] = useState(0);
  return (
    <div>
      <div className="frame">{count}</div>
      <button
        onClick={() => {
          setCount((prev) => prev + 1);
          onClick();
        }}
      >
        add
      </button>
    </div>
  );
}
