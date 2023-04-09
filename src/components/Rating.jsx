import React from "react";

const Rating = ({ rating }) => {
  let ratingArray = Array(5).fill(false);
  for (let i = 0; i < rating; i++) {
    ratingArray[i] = true;
  }

  return (
    <div>
      {ratingArray.map((value, index) =>
        value ? (
          <i key={index} className="bi bi-star-fill"></i>
        ) : (
          <i key={index} className="bi bi-star"></i>
        )
      )}
    </div>
  );
};

export default Rating;
