import React, { useContext } from 'react';
import { Button } from 'react-bootstrap';
import { Form, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider';
import { FaAngleDoubleDown } from 'react-icons/fa';

const Donate = () => {


    const data = useLoaderData()
    const { id, name, category, email, phone, ratingsCount, bio } = data;
    const {user} = useContext(AuthContext)

    let amount = 0;
    const handleAmount = (e) =>{
        amount = e.target.value;
    }

    const handlePayment = () =>{
        const data = {
            email: user?.email,
            name: user?.displayName,
            amount: amount,
            type: "Donation",
            orgName: name
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
        <div className='w-50 mt-3 mx-auto shadow p-5 rounded-2'>
            <h2>Donation</h2>
            <div className=' d-flex'>
                <div className='w-50'>    
                    <p>Organizaiton: {name}</p>
                    <p>category: {category}</p>
                    <p>Email: {email}</p>
                    <p>Phone: {phone}</p>
                </div>
                <div>
                    <p>Enter your amount: </p>
                    <input onChange={handleAmount} className='w-100  border rounded-3 bg-body-tertiary' type="text" name="" id="" placeholder=""/>
                    <Button className='btn btn-dark mt-3' onClick={handlePayment}>Donate</Button>
                </div>
            </div>
        </div>
    );
};

export default Donate;