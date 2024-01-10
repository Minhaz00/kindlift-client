import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const { cart, handleDeleteCart } = props;

    let total = 0;
    let shipping = 0;
    let quantity = 0;

    for (const product of cart) {
        quantity += product.quantity;
        total += (product.price) * (product.quantity);
        shipping += (product.shipping) * (product.quantity);
    }
    let tax = (total * 0.1).toFixed(2);
    let grandTotal = total + shipping + parseFloat(tax);
    return (
        <div className='cart-content'>
            <h2>Your Cart</h2>
            <p>Total Item:  {quantity}</p>
            <p>Total Price: $ {total}</p>
            <p>Tax: $ {tax}</p>
            <p>Shipping Cost: $ {shipping}</p>
            <h4>Grand Total: $ {grandTotal.toFixed(2)}</h4>
            <button className='delete-all-btn btn btn-outline-danger me-2' onClick={handleDeleteCart}>Delete Cart</button>
            <button className='delete-all-btn btn btn-dark' >Checkout</button>
        </div>
    );
};

export default Cart;