// import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import gsap from "gsap";
import { useEffect } from "react";
const Home = () => {
  //! use context Api
  useEffect(() => {
    const t1 = gsap.timeline();
    t1.from(["#home", "#store", "#welcome"], {
      y: -200,
      ease: "power4",
      delay: 1,
      duration: 1,
      stagger: {
        amount: 0.5,
      },
    });
  });

  return (
    <div className="home container">
      <div className="grid grid-two--col">
        <div className="hero-sec--det">
          <p id="welcome" style={{ fontSize: "13px", color: " #0071e3" }}>
            Welcome to
          </p>
          <h1 id="store" style={{ letterSpacing: ".5px" }}>
            Ebix Store
          </h1>
          <div className="p">
            <p id="home" style={{ fontWeight: "300", margin: "10px 0" }}>
              Ebix.com is an open platform for online electronics shopping. We
              make it surprisingly easy for you to find gadgets at lower market
              price.
            </p>
          </div>
          <NavLink to="product">
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
