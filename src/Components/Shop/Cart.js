import React, { useContext } from 'react';
import './Cart.css';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider';

const Cart = (props) => {
    const { cart, handleDeleteCart } = props;

    const {user} = useContext(AuthContext)

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




    const handlePayment = () =>{
        const data = {
            email: user?.email,
            name: user?.displayName,
            amount: grandTotal,
            type: "payment"
        }

        fetch("http://localhost:5000/checkout", {
          method: "POST",
          headers: {"content-type": "application/json"},
          body: JSON.stringify(data)  
        })
        .then(res => res.json())
        .then(result => {
            window.location.replace(result.url)
            console.log(result)
        })

    }



    return (
        <div className='cart-content'>
            <h2>Your Cart</h2>
            <p>Total Item:  {quantity}</p>
            <p>Total Price: $ {total}</p>
            <p>Tax: $ {tax}</p>
            <p>Shipping Cost: $ {shipping}</p>
            <h4>Grand Total: $ {grandTotal.toFixed(2)}</h4>
            <button className='btn btn-outline-danger me-2' onClick={handleDeleteCart}>Delete Cart</button>
            {/* <Link to={'/orders'}><button className='delete-all-btn btn btn-dark' >Checkout</button></Link> */}
            <button className='btn btn-dark' onClick={handlePayment} >Checkout</button>
        </div>
    );
};

export default Cart;