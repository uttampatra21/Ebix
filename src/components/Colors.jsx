import React from "react";
import styled from "styled-components";

const Colors = ({ product }) => {
  const { id, colors } = product;
  const colorCheck = () => {
    // colors === curColor ? "<i className='bx bx-check'></i>" : null
  };
  return (
    <Wrapper>
      <p
        style={{
          display: "flex",
          gap: "2px",
          alignItems: "center",
          fontSize: "20px",
          opacity: ".9",
        }}
      >
        Colors :
        {colors.map((curColor, index) => {
          return (
            <button
              onClick={colorCheck}
              className="product-color"
              key={index}
              style={{
                backgroundColor: curColor,
              }}
            >
              <i className="bx bx-check"></i>
            </button>
          );
        })}
      </p>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .product-color {
    // position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .bx-check {
    color: white;
    top: 3px;
  }
`;

export default Colors;
