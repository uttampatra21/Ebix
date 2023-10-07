import React from "react";
import Filter from "./Filter";
import Short from "./Short";
import Productlist from "./Productlist";
import { UseFilterContex } from "../context/filter-context";
const Products = () => {
  const { filter_products } = UseFilterContex();
  console.log(filter_products);
  return (
    <div className="container">
      <div className="grid-two-colum">
        <div className="grid-child">
          <Filter />
        </div>
        <div className="grid-child">
          <div className="nth-grid--child">
            <Short />
          </div>
          <div className="nth-grid--child">
            <Productlist />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
