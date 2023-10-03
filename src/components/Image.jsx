import React, { useState } from "react";

const Image = ({ imag = [{ url: "" }] }) => {
  const [mainImage, setMainImage] = useState(imag[0]);

  return (
    <div className="singel-product--container---box">
      <div className="gird-four--images">
        {imag.map((x, ind) => {
          return (
            <img
              src={x.url}
              alt={x.id}
              key={ind}
              onClick={() => {
                setMainImage(x);
              }}
            />
          );
        })}
      </div>
      {/*! Second Colum */}
      <div className="singel-image">
        <img src={mainImage.url} alt="" />
      </div>
    </div>
  );
};

export default Image;
