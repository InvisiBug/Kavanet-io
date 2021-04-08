import React from "react";
import { Page, SmallCard, LargeCard, Card } from "../../lib";
import { cards } from "../../content/experiments";

const Experiments = () => {
  return (
    <>
      <Page>
        {cards.map((experiment) => (
          <Card
            title={experiment.title}
            imgSrc={experiment.image}
            description={experiment.description}
            to={experiment.to}
            key={experiment.title}
            type={experiment.type}
          />
        ))}

        {/* {cards.map((experiment) =>
          experiment.type === "small" ? (
            <SmallCard
              title={experiment.title}
              imgSrc={experiment.image}
              description={experiment.description}
              to={experiment.to}
              key={experiment.title}
            />
          ) : (
            <LargeCard
              title={experiment.title}
              imgSrc={experiment.image}
              description={experiment.description}
              to={experiment.to}
              key={experiment.title}
            />
          )
        )} */}
      </Page>
    </>
  );
};

export default Experiments;

// {cards.map((experiment) => (
// experiment.type === "small" ? (
//   <SmallCard
//     title={experiment.title}
//     imgSrc={experiment.image}
//     description={experiment.description}
//     to={experiment.to}
//     key={experiment.title}
//   />
// ) : (
//   <LargeCard
//     title={experiment.title}
//     imgSrc={experiment.image}
//     description={experiment.description}
//     to={experiment.to}
//     key={experiment.title}
//   />
// )
// ))}

// {cards.map((experiment) => (
//   <Card
//     title={experiment.title}
//     imgSrc={experiment.image}
//     description={experiment.description}
//     to={experiment.to}
//     key={experiment.title}
//     type={experiment.type}
//   />
// ))}
