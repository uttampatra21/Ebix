import React from "react";
import { NavLink } from "react-router-dom";

const Navtitle = ({ title }) => {
  return (
    <div>
      <span>
        <NavLink to="/">Home</NavLink>
      </span>
      <span>/ {title}</span>
    </div>
  );
};

export default Navtitle;
