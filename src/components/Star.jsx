import React from "react";

const Star = ({ star, reviews }) => {
  const ratingStar = Array.from({ length: 5 }, (elem, index) => {
    let halfStar = index + 0.5;
    return (
      <span>
        {star >= index + 1 ? (
          <i className="bx bxs-star"></i>
        ) : star >= halfStar ? (
          <i class="bx bxs-star-half"></i>
        ) : (
          <i className="bx bx-star"></i>
        )}
      </span>
    );
  });
  return (
    <div className="stars">
      <div className="stars-image">{ratingStar}</div>
      <div className="stars-count">({reviews} customer reviews)</div>
    </div>
  );
};

export default Star;
