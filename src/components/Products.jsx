import React from "react";
import Filter from "./Filter";
import Short from "./Short";
import Productlist from "./Productlist";
import { UseFilterContex } from "../context/filter-context";
import styled from "styled-components";
const Products = () => {
  const { filter_products } = UseFilterContex();
  // console.log(filter_products);
  return (
    <Wrapper>
      <div className="con-tan">
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
    </Wrapper>
  );
};
const Wrapper = styled.section`
  .con-tan {
    padding: 10px;
  }
`;
export default Products;
