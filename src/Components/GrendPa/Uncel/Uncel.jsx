import React, { useContext } from "react";
import { RingContext } from "../GrnadPa";

const Uncel = () => {
  const [house, setHouse] = useContext(RingContext);
  return (
    <div>
      <h1>Uncel</h1>
      <p>Total House {house}</p>
      <button onClick={() => setHouse(house - 1)}>Decrice</button>
    </div>
  );
};

export default Uncel;
