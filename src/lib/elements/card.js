import React from "react";
import { LargeCard, SmallCard } from "..";

const Card = ({
  imgSrc,
  title = "Title",
  description = "Description",
  buttonText = "Open",
  to = "",
  type = "small",
  readyToShow = "true",
}) => {
  if (type === "small") {
    return (
      <SmallCard
        imgSrc={imgSrc}
        title={title}
        description={description}
        buttonText={buttonText}
        to={to}
      />
    );
  } else if (type === "large") {
    return (
      <>
        {/* <div className="bg-red-200"> */}
        <LargeCard
          imgSrc={imgSrc}
          title={title}
          description={description}
          buttonText={buttonText}
          to={to}
        />
        {/* </div> */}

        {/* <div className="md:hidden bg-black mx-auto">
          <SmallCard
            imgSrc={imgSrc}
            title={title}
            description={description}
            buttonText={buttonText}
            to={to}
          />
        </div> */}
      </>
    );
  }
};

export default Card;

// <div className="md:hidden mx-auto">
//         <SmallCard
//           imgSrc={imgSrc}
//           title={title}
//           description={description}
//           buttonText={buttonText}
//           to={to}
//         />
//       </div>
