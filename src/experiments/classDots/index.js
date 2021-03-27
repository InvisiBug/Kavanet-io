import React, { useRef, useLayoutEffect } from "react";
import Dots from "./dots";

const ClassDots = () => {
  const wrapperRef = useRef(null);
  const canvasRef = useRef(null);

  useLayoutEffect(() => {
    // not happy with this section
    start();
    window.addEventListener("resize", () => {
      start();
    });
  });

  const start = () => {
    const dots = new Dots(wrapperRef, canvasRef, 500, 40);
    dots.init();
  };

  return (
    <>
      <div className="flex h-full">
        <div
          ref={wrapperRef}
          className=" flex-grow no-scrollbar"
          /*onMouseMove={(e) => console.log("X", e.clientX, "Y", e.clientY)}*/
        >
          <canvas ref={canvasRef} />
        </div>
      </div>
    </>
  );
};

export default ClassDots;
