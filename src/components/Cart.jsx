import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
const Cart = ({ product }) => {
  const { id, colors, stock } = product;

  const [quantity, setQuentity] = useState(1);

  const setDecrease = () => {
    quantity > 1 ? setQuentity(quantity - 1) : setQuentity(1);
  };
  const setIncrease = () => {
    stock > quantity ? setQuentity(quantity + 1) : setQuentity(quantity);
  };

  return (
    <Wrapper>
      <div className="cart">
        <div className="product-quentity">
          <div className="decrese" onClick={setDecrease}></div>
          <div className="quentity-item">{quantity}</div>
          <div className="increase" onClick={setIncrease}>
            <i className="bx bx-plus"></i>
          </div>
        </div>
        <div className="cart">
          <NavLink to="/cart" product={product}>
            <button className="btn">Add To Cart</button>
          </NavLink>
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  .product-quentity {
    align-items: center;
  }
  .product-quentity .decrese {
    height: 2px;
    width: 15px;
    background-color: black;
    cursor: pointer;
  }
  .increase {
    display: flex;
    cursor: pointer;
  }
  .increase i {
    font-size: 25px;
  }
  .quentity-item {
    paddinng-left: 10px;
    font-size: 25px;
    color: #0071e3;
  }
  .cart {
    padding: 10px 0;
  }
  .btn {
    padding: 10px;
    background-color: #0071e3;
    border-radious: 5px;
  }
`;
export default Cart;
