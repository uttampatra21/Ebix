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
          <NavLink>kj</NavLink>
        </div>
        <div className="home">
          <NavLink>klmkl</NavLink>
        </div>
        <div className="home">
          <NavLink to="/cart">Cart</NavLink>
        </div>
        <div className="home">
          <NavLink>kl</NavLink>
        </div>
      </div>
    </div>
  );
};

export default BottomNav;
