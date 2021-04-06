import React from "react";
import { Page, LargeCard } from "../../lib";
import img from "../../images/bg3.png";

const list = [
  {
    title: "Image Converter",
    image: img,
    to: "/projects/orbitImageConverter",
    description: "My Orbit Poi Image Converter",
  },
];

const Projects = () => {
  return (
    <>
      <Page>
        {list.map((item, index) => (
          <>
            <LargeCard
              title={item.title}
              imgSrc={item.image}
              description={item.description}
              to={item.to}
              key={index}
            />
          </>
        ))}
      </Page>
    </>
  );
};

export default Projects;
