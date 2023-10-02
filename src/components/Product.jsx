import React from "react";
import { NavLink } from "react-router-dom";
import Price from "../Helper/Price";

const Product = (item) => {
  const { id, name, image, price, category } = item;
  return (
    <NavLink to={`/item/${id}`}>
      <div className="card">
        <div className="card-image">
          <img src={image} alt={name} />
          <div className="card-cetagory">{category}</div>
        </div>
        <div class="card-product--detls">
          <div class="product-name" style={{ color: "#000" }}>
            {name}
          </div>
          <div class="product-name">{<Price price={price} />}</div>
        </div>
      </div>
    </NavLink>
  );
};

export default Product;
