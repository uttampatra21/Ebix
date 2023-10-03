import React, { useEffect } from "react";
import Header from "./Header";
import { NavLink, useParams } from "react-router-dom";
import { useGlobalProduct } from "../context/productcontext";
import Footer from "./Footer";
import Image from "./Image";

import Price from "../Helper/Price";
const API = `https://api.pujakaitem.com/api/products`;

const SoloProduct = () => {
  const { getSingleProduct, isSingelLoading, singelProduct } =
    useGlobalProduct();
  console.log(singelProduct);
  const { id } = useParams();
  const {
    id: asias,
    name,
    company,
    stars,
    price,
    colors,
    description,
    stock,
    image,
  } = singelProduct;

  useEffect(() => {
    getSingleProduct(`${API}?id=${id}`);
  }, []);

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
          <div>
            <span>
              <NavLink to="/">Home</NavLink>
            </span>
            <span>/ {company}</span>
          </div>
        </div>
        <div className="singel-product--container">
          <div className="product-image">
            <Image imag={image} />
          </div>
          <div className="product-details">
            <p>{name}</p>
            <div className="stars">
              <div className="stars-image">{stars}</div>
              <div className="stars-count">({stars} customer reviews)</div>
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
              <p id="stock">
                Avalable:{" "}
                <strong>{stock > 0 ? "In Stock" : "Not Avalable"}</strong>
              </p>
              <p id="stock" style={{ fontWeight: 400 }}>
                Brand : <strong>{company}</strong>
              </p>
            </div>
            <div className="color">
              <span className="color">color :{colors}</span>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SoloProduct;
