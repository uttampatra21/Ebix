import React from "react";
import { NavLink } from "react-router-dom";

const BottomNav = () => {
  return (
    <div className="bottom-nav">
      <div className="bottom-nav--cont">
        <div className="home">
          <NavLink to="/">
            <i className="bx bx-home"></i>
          </NavLink>
        </div>
        <div className="home">
          <NavLink>
            <i className="bx bx-user"></i>
          </NavLink>
        </div>
        <div className="home">
          <NavLink to="/product">
            <i className="bx bx-cube-alt"></i>
          </NavLink>
        </div>
        <div className="home">
          <NavLink to="/cart">
            <i className="bx bx-cart-alt"></i>
          </NavLink>
        </div>
        <div className="home">
          <NavLink>
            <i className="bx bx-help-circle"></i>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default BottomNav;
