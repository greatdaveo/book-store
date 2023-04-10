import React from "react";

const Rating = ({ rating }) => {
  let ratingArray = Array(5).fill(false);
  for (let i = 0; i < rating; i++) {
    ratingArray[i] = true;
  }

  return (
    <div style={{ color: "rgb(255, 217, 4)" }} className="rating">
      <div>
        {ratingArray.map((value, index) =>
          value ? (
            <i
              key={index}
              className="bi bi-star-fill"
              style={{ margin: "0.1rem" }}
            ></i>
          ) : (
            <i
              key={index}
              className="bi bi-star"
              style={{ margin: "0.1rem" }}
            ></i>
          )
        )}
      </div>
    </div>
  );
};

export default Rating;
