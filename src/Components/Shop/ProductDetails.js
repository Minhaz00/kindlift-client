import React from 'react';
import { Image } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';
import './ProductDetails.css'
import { FaArrowLeft } from "react-icons/fa";


const ProductDetails = () => {

    let product = useLoaderData()
    const {img, name, category, seller, price, stock, ratings, ratingsCount, shipping, quantity} = product;

    return (
        <>

            

            <div className='p-5 event-details  shadow rounded-3 mt-3 w-75'>
            
            <Link to={'/shop'}><button className='btn btn-outline-dark mb-3'> <FaArrowLeft /> Back to shop</button></Link>
            
            <div className='d-flex'>
                <Image className='prodImg' src={img} fluid rounded />   
                
                <div className='px-5'>
                    <h3 className='text-left mt-5 mb-3'>{name}</h3>
                    <p>Product descrption: Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC.</p>
                    <p>Category: {category}</p>
                    <p>Seller: {seller}</p>
                    <p>Price: ${price}</p>
                    <p>Stock: {stock}</p>
                    <p>Rating: {ratings}({ratingsCount} reviews)</p>
                </div>
            </div>
    
            
        </div>
        </>
    );
};

export default ProductDetails;