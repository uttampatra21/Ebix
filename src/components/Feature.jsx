import React from "react";
import Product from "./Product";
import { useGlobalProduct } from "../context/productcontext";

const Feature = () => {
  const { isLoading, featureProducts } = useGlobalProduct();
  if (isLoading) {
    return <div style={{ textAlign: "center" }}>.....Loading</div>;
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
