import React from 'react';
import './Product.css';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Product = (props) => {

    const { id, img, name, ratings, price, seller } = props.product;
    const handleCart = props.handleCart;

    return (
        <div className='product'>
            <Link to={`/products/${id}`}>
                <img src={img} alt="" />
            </Link>
            <div className="product-info">
                <h5 className='product-name'>{name}</h5>
                <p>Seller: {seller}</p>
                <p>Price: ${price}</p>
                <p>Rating: {ratings} stars</p>
            </div>
            <div  className='mx-auto'>
                <button onClick={() => handleCart(props.product)} className="btn-cart"><p>Add to cart</p></button>
            </div>
        </div>
    );
};

export default Product;