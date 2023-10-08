import React from "react";
import Product from "./Product";
import { UseFilterContex } from "../context/filter-context";
import styled from "styled-components";
const Productlist = () => {
  const { all_products } = UseFilterContex();
  console.log(all_products);
  return (
    <Wrapper>
      <div className="product-container">
        {all_products.map((item) => {
          return <Product key={item.id} {...item} />;
        })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .product-container {
    padding: 10vh 0;
  }
`;
export default Productlist;
