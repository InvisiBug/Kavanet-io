import React, { useRef, useLayoutEffect } from "react";
import experiment from "../../content/experiments/dots";
import { ExperimentsLayout } from "../../lib";

const Dots = () => {
  const wrapperRef = useRef(null);
  const canvasRef = useRef(null);

  useLayoutEffect(() => {
    start();
    window.addEventListener("resize", () => {
      start();
    });
  });

  const start = () => {
    const dots = new experiment(wrapperRef, canvasRef);
    dots.init();
  };

  return (
    <>
      <ExperimentsLayout
        darkLayer={true}
        background="bg-gradient-to-r from-blue-800 to-green-800"
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

export default Dots;
