import React from "react";

const Colors = ({ product }) => {
  const { id, colors } = product;
  return (
    <div>
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
              className="product-color"
              key={index}
              style={{
                backgroundColor: curColor,
              }}
              onClick={
                colors === curColor ? "<i className='bx bx-check'></i>" : null
              }
            ></button>
          );
        })}
      </p>
    </div>
  );
};

export default Colors;
