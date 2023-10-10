import React from "react";
import Products from "../Products";
import styled from "styled-components";

const Gridview = ({ product }) => {
  return (
    <Wrapper>
      <div className="product-container">
        {product.map((item) => {
          console.log(item);
          return <Products key={item.id} {...item} />;
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
export default Gridview;
