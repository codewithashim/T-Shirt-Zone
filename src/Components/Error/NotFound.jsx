import React from 'react';
import NotFoundPic from '../../Assets/NotFound.jpg';
import './NotFound.css';

const NotFound = () => {
    return (
        <section className='notFoundSection'>
            <img src={NotFoundPic} alt="Not Found" />
        </section>
    );
};

export default NotFound;