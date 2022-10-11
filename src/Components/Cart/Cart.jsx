import React from "react";
import "./Cart.css";

const Cart = ({ cart, hendelRemoveFromCart }) => {
  let message;
  if (cart.length === 0) {
    message = <h3>Cart is Empty</h3>;
  } else if (cart.length === 1) {
    message = <h3>Just Adde One Product</h3>;
  } else {
    message = <h3>Thenks For Buying</h3>;
  }

  return (
    <div>
      <h2 className={cart.length === 0 ? `red`:`oreng`}>Order Summary</h2>
      <h4 className={`bold ${ cart.length===7 ? `green`:`gry`}`}>Items Ordered: {cart.length}</h4>
      {cart.map((item) => {
        return (
          <div className="cartItem">
            <h3>{item.name}</h3>
            <h4>Price: ${item.price}</h4>
            <button
              className="removeBtn"
              onClick={() => hendelRemoveFromCart(item)}
            >
              X
            </button>
          </div>
        );
      })}
      {message}
      {cart.length === 3 ? (
        <h3>Thanks For Buying 3 T-shirt</h3>
      ) : (
        <h3>Buye More Get More Offer</h3>
      )}
      {cart.length === 2 && <h3>Thanks For Buying 2 T-shirt</h3>}
      {cart.length === 5 || <h3>Thanks For Buying 5 T-shirt</h3>}
    </div>
  );
};

export default Cart;
