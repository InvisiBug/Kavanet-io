import React from "react";

const card = ({ title, desc }) => {
  return (
    <>
      <div className="h-80 w-60 m-10">
        <div className="flex flex-col w-full h-full overflow-hidden rounded border bg-white shadow border-black">
          <div
            className="flex-grow h-1/2 h-47 bg-cover bg-no-repeat bg-center"
            style={{
              "background-image":
                "url(https://i.guim.co.uk/img/media/fe1e34da640c5c56ed16f76ce6f994fa9343d09d/0_174_3408_2046/master/3408.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=0d3f33fb6aa6e0154b7713a00454c83d)",
            }}
          ></div>

          <div className="p-3 border">
            <h1 className="mr-10 text-lg ">{title}</h1>
            <p className="text-xs text-gray-500">{desc}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default card;
