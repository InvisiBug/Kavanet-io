import React, { useRef, useLayoutEffect } from "react";
import Breakout from "./BreakoutClass.js";

const ClassDots = () => {
  const wrapperRef = useRef(null);
  const canvasRef = useRef(null);

  useLayoutEffect(() => {
    start();
    window.addEventListener("resize", () => {
      start();
    });
  });

  const start = () => {
    const breakout = new Breakout();
  };

  return (
    <>
      <div className="absolute h-full w-full border-2 border-black">
        <div
          ref={wrapperRef}
          className=" h-full w-full no-scrollbar"
          // onMouseMove={(e) => console.log("X", e.clientX, "Y", e.clientY)}
        >
          <canvas ref={canvasRef} />
        </div>
      </div>
    </>
  );
};

export default ClassDots;
