import React, { useRef, useLayoutEffect } from "react";
// import { distance } from "./helpers";
import Dots from "./dots";

const ClassDots = () => {
  const wrapperRef = useRef(null);
  const canvasRef = useRef(null);

  useLayoutEffect(() => {
    const dots = new Dots(canvasRef, wrapperRef);
  });

  return (
    <>
      <div className="flex h-full">
        {/* <div className="bg-green-400 hidden sm:flex md:w-10">hello</div> */}
        <div ref={wrapperRef} className=" flex-grow bg-gray-700 no-scrollbar">
          <canvas ref={canvasRef} />
        </div>
      </div>
    </>
  );
};

export default ClassDots;
