import React from "react";
import { FaStar } from "react-icons/fa";
import StarRatingComponent from "react-star-rating-component";

export default function StarRating(props) {
  return (
    <div style={{ fontSize: 20 }}>
      <StarRatingComponent
        name="rate2"
        editing={false}
        renderStarIcon={() => (
          <span>
            <FaStar />
          </span>
        )}
        starCount={5}
        value={props.ratingAverage}
      />
    </div>
  );
}
