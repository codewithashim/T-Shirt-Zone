import React, { useContext } from "react";
import { RingContext } from "../../GrnadPa";

const Wife = () => {
  const ring = useContext(RingContext);
  return (
    <div>
      <h2>Wife</h2>
      <p>Gift: {ring}</p>
    </div>
  );
};

export default Wife;
