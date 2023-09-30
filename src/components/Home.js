import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { useGOlobalProduct } from "../context/productcontext";

const Home = () => {
  // use context Api
  const myName = useGOlobalProduct();

  return (
    <div className="home container">
      <div className="grid grid-two--col">
        <div className="hero-sec--det">
          <p style={{ fontSize: "13px", color: " #0071e3" }}>Welcome to</p>
          <h1 style={{ letterSpacing: ".5px" }}>Ebix Store</h1>
          <p style={{ fontWeight: "300", margin: "10px 0" }}>
            Ebix.com is an open platform for online electronics shopping. We
            make it surprisingly easy for you to find gadgets at lower market
            price.
          </p>
          <NavLink>
            <button className="shop-now">SHOP NOW</button>
          </NavLink>
        </div>
        <div className="hero-sec--img">
          <img src="images/saleim.jpg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
