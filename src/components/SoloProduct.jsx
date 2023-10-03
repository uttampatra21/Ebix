import React, { useEffect } from "react";
import Header from "./Header";
import { useParams } from "react-router-dom";
import { useGlobalProduct } from "../context/productcontext";
import Navtitle from "./Navtitle";

import Price from "../Helper/Price";
const API = `https://api.pujakaitem.com/api/products`;

const SoloProduct = () => {
  const { getSingleProduct, isSingelLoading, singelProduct } =
    useGlobalProduct();
  const { id } = useParams();

  useEffect(() => {
    getSingleProduct(`${API}?id=${id}`);
  }, []);
  const {
    id: asias,
    company,
    stars,
    price,
    description,
    stock,
  } = singelProduct;

  if (isSingelLoading) {
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
    <div>
      <Header />
      <div className="singel-product">
        <div className="home-navigation">
          <Navtitle title={company} />
        </div>
        <div className="singel-product--container">
          <div className="product-image"></div>
          <div className="product-details">
            <p>{company}</p>
            <div className="stars">
              <div className="stars-image"></div>
              <div className="stars-count">{stars} reviews</div>
            </div>
            <div className="product-price">
              {" "}
              MRP :
              <span style={{ textDecoration: "line-through" }}>
                <Price price={price + 250000} />
              </span>
            </div>
            <div className="deals-of--day">
              Deal of the day : <Price price={price} />
            </div>
            <div className="description">
              <p>{description}</p>
            </div>
            <div className="product-data--warenty">
              <div className="data-warenty--cont">
                <i className="bx bxs-plane-take-off"></i>
                <p>Free Delevery</p>
              </div>
              <div className="data-warenty--cont">
                <i className="bx bx-refresh"></i>
                <p>30 Days Replacement</p>
              </div>
              <div className="data-warenty--cont">
                <i className="bx bxs-plane-take-off"></i>
                <p>Free Delevery</p>
              </div>
              <div className="data-warenty--cont">
                <i className="bx bxs-shield-minus"></i>
                <p>2 Year Warrenrt</p>
              </div>
            </div>
            <div className="product-availability">
              <p className="stock" style={{ fontSize: "10px", opacity: ".9" }}>
                Avalable: <span>{stock > 0 ? "In Stock" : "Not Avalable"}</span>
              </p>
              <h6 className="">{company}</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SoloProduct;
