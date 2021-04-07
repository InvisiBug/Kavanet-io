import React, { useRef, useLayoutEffect } from "react";

import Game from "../../content/experiments/breakout/BreakoutClass";
import { ExperimentsLayout } from "../../lib";

const Breakout = () => {
  const wrapperRef = useRef(null);
  const canvasRef = useRef(null);

  useLayoutEffect(() => {
    start();
    window.addEventListener("resize", () => {
      start();
    });
  });

  const start = () => {
    new Game();
  };

  return (
    <>
      <ExperimentsLayout
      // darkLayer={true}
      // background="bg-gradient-to-r from-blue-800 to-green-800"
      >
        <div className="h-full w-full border-white">
          <div
            ref={wrapperRef}
            className="h-full w-full no-scrollbar" //! Required to make the canvas fit the page
            // onMouseMove={(e) => console.log("X", e.clientX, "Y", e.clientY)}
          >
            <canvas ref={canvasRef} />
          </div>
        </div>
      </ExperimentsLayout>
    </>
  );
};

export default Breakout;
