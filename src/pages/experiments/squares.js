import React, { useRef, useLayoutEffect } from "react";
import canvasInterface from "../../content/experiments/squares";
// import GenArt from "../../content/experiments/Genart/class";
import { ExperimentsLayout } from "../../lib";

const Squares = () => {
  const wrapperRef = useRef(null);
  const canvasRef = useRef(null);

  useLayoutEffect(() => {
    start();
    window.addEventListener("resize", () => {
      start();
    });
  });

  const start = () => {
    const canvasBoard = new canvasInterface(wrapperRef, canvasRef);
    canvasBoard.init();
  };

  return (
    <ExperimentsLayout background="bg-white">
      <div className="h-full w-full  border-white">
        <div
          ref={wrapperRef}
          className="h-full mx-auto w-full border-black no-scrollbar " //! Required to make the canvas fit the page
          // onMouseMove={(e) => console.log("X", e.clientX, "Y", e.clientY)}
        >
          <canvas ref={canvasRef} />
        </div>
      </div>
    </ExperimentsLayout>
  );
};

export default Squares;
