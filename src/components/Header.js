import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <NavLink to="/">
        <img width="170px" src="https://www.ebix.com/img/logo.png" alt="" />
      </NavLink>
      <nav>
        <ul className="items">
          <li className="cart">
            <NavLink to="/cart">
              <i class="bx bx-shopping-bag"></i>
              <span id="cart-item">{Math.floor(Math.random() * 10)}</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/user">
              <i class="bx bx-user"></i>
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
