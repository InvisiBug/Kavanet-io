import React, { useRef, useLayoutEffect } from "react";
import canvasInterface from "../../content/experiments/mouse";
import { ExperimentsLayout } from "../../lib";

const Mouse = () => {
  const wrapperRef = useRef(null);
  const canvasRef = useRef(null);
  let canvasBoard;

  useLayoutEffect(() => {
    start();
    window.addEventListener("resize", () => {
      start();
    });
  });

  const start = () => {
    canvasBoard = new canvasInterface(wrapperRef, canvasRef);
    canvasBoard.init();
  };

  return (
    <ExperimentsLayout background="bg-white">
      <div className="pt-16 w-full h-full border-white">
        <div
          ref={wrapperRef}
          className="no-scrollbar w-full h-full" //! Required to make the canvas fit the page
          onMouseMove={(e) => console.log("X", e.clientX, "Y", e.clientY)}
          // onMouseMove={(e) => canvasBoard.updateMouse(e)}
        >
          <canvas ref={canvasRef} />
        </div>
      </div>
    </ExperimentsLayout>
  );
};

export default Mouse;
