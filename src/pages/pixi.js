import React, { useRef, useLayoutEffect } from "react";
import { Layout } from "../components";
import { Stage, Sprite } from "@inlet/react-pixi";

const Pixie = () => {
  const myRef = useRef(null);

  let width = 0;
  let height = 0;

  useLayoutEffect(() => {
    width = myRef.current.clientWidth;
    height = myRef.current.clientHeight;
    console.log("Width: ", width, "Height:", height);
  }, []);

  return (
    <>
      <Layout>
        <div
          ref={myRef}
          className="h-full w-full  border border-green-500 bg-red-300"
        ></div>
      </Layout>
    </>
  );
};

export default Pixie;

{
  /* <Stage>
  <Sprite
    image="https://s3-us-west-2.amazonaws.com/s.cdpn.io/693612/IaUrttj.png"
    x={100}
    y={100}
  />
</Stage>; */
}
