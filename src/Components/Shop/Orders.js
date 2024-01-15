import React, { useState } from 'react';
import './Orders.css';
import { Form, Link, useLoaderData } from 'react-router-dom';
import Cart from './Cart';
import ReviewItem from './ReviewItem';
import { deleteFromDB, deleteShoppingCart } from '../../Utilities/DB';
import Button from 'react-bootstrap/esm/Button';

const Orders = () => {
    const {previousCart} = useLoaderData();
    const [cart, setCart] = useState(previousCart);

    const handleDeleteItem = (id) => {
        const remaining = cart.filter(product => product.id !== id);
        setCart(remaining);
        deleteFromDB(id);
    }

    const handleDeleteCart = () => {
        setCart([]);
        deleteShoppingCart();
    }



    // const handlePay = (event) => {
    //     event.preventDefault();
    //     const form = event.target;
    //     const email = form.email.value;
    //     const password = form.password.value;
    //     console.log(email, password)
    // }


    return (
        <div className='order-preview'>
            <div className="cart-items">
                {
                    cart.map(item => <ReviewItem
                        key={item.id}
                        item={item}
                        handleDeleteItem={handleDeleteItem}
                    ></ReviewItem>)
                }
            </div>
            <div className="cart">
                <Cart
                    handleDeleteCart={handleDeleteCart}
                    cart={cart}
                ></Cart>
            </div>
        </div>
    );
};

export default Orders;