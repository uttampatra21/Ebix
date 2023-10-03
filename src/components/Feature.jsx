import React from "react";
import Product from "./Product";
import { useGlobalProduct } from "../context/productcontext";

const Feature = () => {
  const { isLoading, featureProducts } = useGlobalProduct();
  if (isLoading) {
    return (
      <div className="loading">
        <img
          width="300"
          src="https://i.pinimg.com/originals/c7/e1/b7/c7e1b7b5753737039e1bdbda578132b8.gif"
          alt=""
        />
      </div>
    );
  }

  return (
    <div className="featureProduct">
      <h6>CHECK NOW</h6>
      <h3>Our Feature Services</h3>
      <div className="feature-container">
        {featureProducts.map((item) => {
          return <Product key={item.id} {...item} />;
        })}
      </div>
    </div>
  );
};

export default Feature;
