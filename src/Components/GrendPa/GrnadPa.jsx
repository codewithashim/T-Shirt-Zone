import React, { createContext, useState } from "react";
import "./GrandPa.css";
import Father from "./Father/Father";
import Uncel from "./Uncel/Uncel";
import Aunty from "./Aunty/Aunty";

// using contex
export const RingContext = createContext("Daimon Ring");
export const MoneyContext = createContext(1000000);

const GrnadPa = () => {
  const [house, setHouse] = useState(1);
  const [money, setMoney] = useState(1000000);

  return (
    <RingContext.Provider value={[house, setHouse]}>
      <MoneyContext.Provider value={[money, setMoney]}>
        <div className="grendPa">
          <h2>Hello Grend Pa</h2>
          <section className="flex">
            <Father></Father>
            <Uncel></Uncel>
            <Aunty></Aunty>
          </section>
        </div>
      </MoneyContext.Provider>
    </RingContext.Provider>
  );
};

export default GrnadPa;
