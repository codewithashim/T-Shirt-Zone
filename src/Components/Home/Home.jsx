import React from "react";
import { useLoaderData } from "react-router-dom";
import Cart from "../Cart/Cart";
import Products from "../Products/Products";
import "./Home.css";
import { useState } from "react";

const Home = () => {
  const product = useLoaderData();
  const [cart, setCart] = useState([]);

  const hendelAddToCart = (tshirt) => {
    const exist = cart.find((item) => item._id === tshirt._id);
    if (exist) {
      alert("This item is already added to cart");
    } else {
      const newCart = [...cart, tshirt];
      setCart(newCart);
    }
  };

  const hendelRemoveFromCart = (tshirt) => {
    const reminingCart = cart.filter((ts) => ts._id !== tshirt._id);
    console.log(reminingCart);
    setCart(reminingCart);
  };

  return (
    <section className="mainHomeSection">
      <div className="t-ShirtContainer">
        {product.map((tshirt) => {
          return (
            <Products
              key={tshirt._id}
              tshirt={tshirt}
              hendelAddToCart={hendelAddToCart}
            ></Products>
          );
        })}
      </div>
      <div className="orderSummary">
        <Cart
          key={cart._id}
          cart={cart}
          hendelRemoveFromCart={hendelRemoveFromCart}
        ></Cart>
      </div>
    </section>
  );
};

export default Home;
