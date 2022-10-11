import React, { useContext } from "react";
import { RingContext } from "../../GrnadPa";

const MySon = () => {
  const [house, setHouse] = useContext(RingContext);
  return (
    <div>
      <h2>My Son</h2>
      <p>{house}</p>
      <button onClick={() => setHouse(house + 1)}>Incise</button>
    </div>
  );
};

export default MySon;
