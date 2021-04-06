import React, { useLayoutEffect, useRef } from "react";
import GenArt from "./genart";

const Genart = () => {
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
    const artpiece = new GenArt(wrapperRef, canvasRef);
    artpiece.init();
  };

  return (
    <>
      <div className="h-full w-full border-white">
        <div
          ref={wrapperRef}
          className="h-full w-full no-scrollbar " //! Required to make the canvas fit the page
          // onMouseMove={(e) => console.log("X", e.clientX, "Y", e.clientY)}
        >
          <canvas ref={canvasRef} />
        </div>
      </div>
    </>
  );
};

export default Genart;
