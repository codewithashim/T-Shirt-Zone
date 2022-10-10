import React from "react";
import "./Cart.css";

const Cart = ({ cart }) => {
  return (
    <div>
      <h2>Order Summary</h2>
      <h4>Items Ordered: {cart.length}</h4>
    </div>
  );
};

export default Cart;
