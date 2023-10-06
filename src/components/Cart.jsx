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
            +
          </div>
        </div>
        <div className="cart">
          <NavLink to="/cart" item={product}>
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
    gap: 18px;
    padding: 5px 10px;
  }
  .product-quentity .decrese {
    height: 2.4px;
    width: 15px;
    background-color: black;
    cursor: pointer;
  }
  .increase {
    display: flex;
    cursor: pointer;
    font-size: 1.6rem;
  }
  .increase i {
    font-size: 25px;
  }
  .quentity-item {
    font-size: 25px;
    color: #0071e3;
  }
  .cart {
    padding: 10px 0;
  }
  .btn {
    padding: 10px 12px;
    background-color: #0071e3;
    border-radious: 5px;
  }
`;
export default Cart;
