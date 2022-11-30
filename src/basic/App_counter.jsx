import React, { useState } from "react";
import Counter from "./components/Counter";

export default function App_counter() {
  const [count, setCount] = useState(0);
  const buttonClick = () => setCount((prev) => prev + 1);

  return (
    <div>
      <span>total : {count}</span> {count > 10 ? "🥇" : "🥈"}
      <Counter total={count} onClick={buttonClick} />
      <Counter total={count} onClick={buttonClick} />
    </div>
  );
}
// 저거의 합..? props
