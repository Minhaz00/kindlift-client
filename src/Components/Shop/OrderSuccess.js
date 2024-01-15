import React from 'react';
import { useParams } from 'react-router-dom';

const OrderSuccess = () => {
    const {trans_id} = useParams()
    return (
        <div className='w-50 mx-auto shadow rounded-2 p-5'>
            <h3>Transaction successful!</h3>
            <p>Transaction ID: {trans_id}</p>
        </div>
    );
};

export default OrderSuccess;