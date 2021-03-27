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
    const dots = new Dots(wrapperRef, canvasRef, 40);
    dots.init();
  };

  return (
    <>
      <div className="absolute h-full w-full ">
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
