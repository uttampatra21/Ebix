import React from "react";
import Product from "./Product";

const Productlist = () => {
  return (
    <div>
      <div className="feature-container">
        {featureProducts.map((item) => {
          return <Product key={item.id} {...item} />;
        })}
      </div>
    </div>
  );
};

export default Productlist;
