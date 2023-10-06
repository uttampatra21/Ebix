import React from "react";
import Header from "./components/Header";
import { NavLink } from "react-router-dom";
import Footer from "./components/Footer";
import styled from "styled-components";
const Error = () => {
  return (
    <Wrapper>
      <div className="error-page">
        <Header />
        <div className="error-meg">
          <h1>404</h1>
          <h2>UH OH! You're lost.</h2>
          <p>
            The page you are looking for doesn't exist. How you got here is
            mystry. But you can click the button below to go back to the
            homepage.
          </p>
          <NavLink to="/">
            <button className="btn">HOME</button>
          </NavLink>
        </div>
        <Footer />
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  .error-page {
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .error-meg p {
    padding: 1rem;
  }
  .btn {
    background-color: #0071e3;
    color: #fff;
    padding: 0.6rem;
    border-radius: 2px;
    font-size: 14px;
  }
`;
export default Error;
