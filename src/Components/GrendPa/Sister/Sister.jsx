import React, { useContext } from 'react';
import { MoneyContext } from '../GrnadPa';

const Sister = () => {
const [money , setMoney] = useContext(MoneyContext);

    return (
        <div>
            <h1>Sister</h1>
            <p>Total House {money}</p>
            <button onClick={()=>setMoney(money + 15000)}>Add Money</button>
        </div>
    );
};

export default Sister;