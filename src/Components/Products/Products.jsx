import React from 'react';
import './Products.css'

const Products = ({tshirt, hendelAddToCart}) => {
    const { name, price, picture} = tshirt;
    return (
        <section className='singelT-ShirtSection'>
            <div className="tshirtPic">
                <img src={picture} alt={name}/>
            </div>
            <div className="tshirtDetails">
                <code>Brand: {name}</code>
                <p>Price: {price}</p>
                <button className='buyBtn' onClick={()=>hendelAddToCart(tshirt)}>Buy This</button>
            </div>
        </section>
    );
};

export default Products;