import React from 'react';
import MySelf from '../MySelf/MySelf';
import Sister from '../Sister/Sister';

const Father = ({house, ring}) => {
    return (
        <div>
            <h2>Father</h2>
            <p>Total House {house}</p>
            <section className='flex'>
                <MySelf house={house} ring={ring}></MySelf>
                <Sister house={house}></Sister>
            </section>
        </div>
    );
};

export default Father;