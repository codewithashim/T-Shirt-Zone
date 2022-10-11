import React from "react";
import { Link } from "react-router-dom";
import "./Style/Header.css";

const Header = () => {
  return (
    <nav className="mainNav">
      <ul className="navLinks">
        <li className="navLink">
          <Link to="/">Home</Link>
        </li>
        <li className="navLink">
          <Link to="Order">Order</Link>
        </li>
        <li className="navLink">
          <Link to="/about">About</Link>
        </li>
        <li className="navLink">
          <Link to="/grandpa">Grand Pa</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
