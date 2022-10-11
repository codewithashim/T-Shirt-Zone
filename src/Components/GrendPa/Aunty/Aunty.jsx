import React from "react";
import Cusin from "../Cusin/Cusin";

const Aunty = ({house}) => {
  return (
    <div>
      <h2>Aunty</h2>
      <p>Total House {house}</p>
      <section className="flex">
        <Cusin house={house}></Cusin>
        <Cusin house={house}></Cusin>
      </section>
    </div>
  );
};

export default Aunty;
