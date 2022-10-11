import React from "react";
import MySon from "./MySon/MySon";
import Wife from "./Wife/Wife";

const MySelf = ({ house }) => {
  return (
    <div>
      <h2>My Self</h2>
      <p>Total House {house}</p>
      <section className="flex">
        <Wife></Wife>
        <MySon></MySon>
      </section>
    </div>
  );
};

export default MySelf;
