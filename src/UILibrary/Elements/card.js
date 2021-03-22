import React from "react";
import { Link } from "gatsby";

const card = ({
  title,
  desc,
  url = "https://images.dog.ceo/breeds/finnish-lapphund/mochilamvan.jpg",
  link = "/",
}) => {
  return (
    <>
      <div className="h-80 w-60 m-10">
        <Link to={link}>
          <div className="flex flex-col w-full h-full rounded-lg overflow-hidden bg-white shadow">
            <div
              className="flex-grow bg-cover bg-no-repeat bg-center"
              style={{
                backgroundImage: `url(${url})`,
              }}
            ></div>

            <div className="p-3 border">
              <h1 className="mr-10 text-lg ">{title}</h1>
              <p className="text-xs text-gray-500">{desc}</p>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default card;
