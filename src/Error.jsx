import React from "react";
import Header from "./components/Header";
import { NavLink } from "react-router-dom";
import Footer from "./components/Footer";
const Error = () => {
  return (
    <div>
      <Header />
      <div className="error-meg">
        <h1>404</h1>
        <h2>UH OH! You're lost.</h2>
        <p>
          The page you are looking for doesn't exist. How you got here is
          mystry. But you can click the button below to go back to the homepage.
        </p>
        <NavLink to="/">
          <button>HOME</button>
        </NavLink>
      </div>
      <Footer />
    </div>
  );
};

export default Error;
