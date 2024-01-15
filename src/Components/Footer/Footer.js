import React from 'react';
import { ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../Assets/Images/Logo/logoKindlift.png'
import { FaFacebook,  FaTwitter, FaInstagram, FaDiscord, FaHouseMedical, FaSignsPost, FaTeamspeak, FaNewspaper } from "react-icons/fa6";

import './Footer.css'

const Footer = () => {
    return (

        <div className='pb-2 mt-5 pt-5 footer'>
            <hr />
            
            <div className='mx-auto d-flex justify-content-around'>
                <img className='footerImg my-auto' src={logo} alt="" />
                <div className="social-links mt-3">
                    <h5 className='text-center'>Find us</h5>
                    <ListGroup>
                        <ListGroup.Item className=' bg-body-secondary bg-opacity-10'>
                        <a  href="http://facebook.com"> <FaFacebook/> Facebook</a>
                        </ListGroup.Item>
                        <ListGroup.Item  className=' bg-body-secondary bg-opacity-10'>
                            <a  href="http://twitter.com"><FaTwitter/> Twitter</a>
                        </ListGroup.Item>
                        <ListGroup.Item   className=' bg-body-secondary bg-opacity-10'>
                            <a href="http://whatsapp.com"><FaDiscord/> Discord</a>
                        </ListGroup.Item>

                        <ListGroup.Item   className=' bg-body-secondary bg-opacity-10'>
                            <a href="http://instagram.com"><FaInstagram/> Instagram</a>
                        </ListGroup.Item>
                    </ListGroup>
                </div>
                
                <div className="social-links mt-3">
                    <h5 className='text-center'>Navigate to</h5>
                    <ListGroup>
                        <ListGroup.Item className=' bg-body-secondary bg-opacity-10'>
                        <Link to={'/'}><FaHouseMedical/> Home</Link>
                        </ListGroup.Item>
                        <ListGroup.Item  className=' bg-body-secondary bg-opacity-10'>
                            <Link to={'/feed'}><FaSignsPost/> Feed</Link>
                        </ListGroup.Item>
                        <ListGroup.Item   className=' bg-body-secondary bg-opacity-10'>
                            <Link to={'/events'}><FaTeamspeak/> Events</Link>
                        </ListGroup.Item>
                        <ListGroup.Item   className=' bg-body-secondary bg-opacity-10'>
                            <Link to={'/news'}><FaNewspaper/> News</Link>
                        </ListGroup.Item>
                    </ListGroup>
                </div>
            </div>
            <div className='text-center mb-2 mt-3'><small>&copy; Copyright 2023 | CUET-INSIDERS.</small></div>
        </div>
    );
};

export default Footer;

