import React from "react";
import { useLoaderData } from "react-router-dom";
import Cart from "../Cart/Cart";
import Products from "../Products/Products";
import "./Home.css";
import { useState } from "react";

const Home = () => {
  const product = useLoaderData();
  const [cart, setCart] = useState([]);

  const hendelAddToCart =(tshirt)=>{
      const newCart = [...cart, tshirt];
      setCart(newCart);
  }

  return (
    <section className="mainHomeSection">
      <div className="t-ShirtContainer">
        {product.map((tshirt) => {
          return <Products key={tshirt._id} tshirt={tshirt} hendelAddToCart={hendelAddToCart}></Products>;
        })}
      </div>
      <div className="orderSummary">
        <Cart cart={cart}></Cart>
      </div>
    </section>
  );
};

export default Home;
