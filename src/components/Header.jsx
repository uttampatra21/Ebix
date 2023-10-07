import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Header = () => {
  const showMenu = () => {};
  return (
    <Wrapper>
      <header className="header">
        <NavLink to="/">
          <img width="170px" src="https://www.ebix.com/img/logo.png" alt="" />
        </NavLink>
        <nav>
          <ul className="items">
            <li className="cart">
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/product">Products</NavLink>
            </li>
            <li>
              <NavLink>Contact</NavLink>
            </li>
            <li>
              <NavLink>
                <i className="bx bx-cart-alt"></i>
              </NavLink>
            </li>
          </ul>
        </nav>
        <div className="menu" onClick={showMenu}>
          <i className="bx bx-menu"></i>
        </div>
      </header>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .items {
    gap: 2rem;
  }
  .menu i {
    font-size: 2.5rem;
  }
`;
export default Header;
