import React, { useContext, useEffect, useState } from 'react';
import './Leftnav.css';
import { Link } from 'react-router-dom';
import demoCover from '../../Assets/Images/Logo/demo-cover.jpg';
import demoDp from '../../Assets/Images/Logo/user.png';
import { AuthContext } from '../Context/AuthProvider';


const Leftnav = () => {

    const { user } = useContext(AuthContext);    
    const [usr, setUsr] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/user/${user?.uid}`)
            .then(res => res.json())
            .then(data => {
                setUsr(data[0])
            });
    }, [usr]);

    return (
        <div className="card sticky-md-top border shadow-sm">
            <div className="upper">
                <img src={demoCover} alt="" />
            </div>
            <div className="user text-center">
                <div className="profile">
                    <Link><img src={demoDp} className="rounded-circle" width="80" alt="" /></Link>
                </div>
            </div>

            <div className='mt-5 text-center'>
                <Link className='text-decoration-none text-body'><p className='fw-bold mb-0 mx-1'>{usr?.displayName}</p></Link>
            </div>

            <hr></hr>
        </div>
    );
};

export default Leftnav;