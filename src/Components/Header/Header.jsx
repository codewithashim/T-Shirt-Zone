import React from "react";
import { Link } from "react-router-dom";
import "./Style/Header.css";

const Header = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
          <Link to="/product">Product</Link>
          <Link to="Order">Order</Link>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
