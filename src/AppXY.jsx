import React, { useState } from "react";
import "./AppXY.css";

export default function AppXY() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  // 단하나의 객체로 관리
  return (
    <div
      className="container"
      onPointerMove={(e) => {
        console.log(e.clientX, e.clientY);
        setPosition((prev) => ({ ...prev, x: e.clientX }));
        // prev에 있는 것들을 낱개로 풀어서 복사
        // 수평으로 이동이 가능하게끔 하려면?
      }}
    >
      <div
        className="pointer"
        style={{
          transform: `translate(${position.x}px, ${position.y}px)`,
        }}
      />
    </div>
  );
}
