import React from 'react';
//import Stack from '@mui/material/Stack';
//import Button from 'react-bootstrap/Button';
import "./Banner.css"
// import Button from '../Button/GlobalButton/Button';
import { ImGithub } from "react-icons/im";
const HomeBanner = () => {
    return (
        <>
            <div className="container">
                <div className="banner_mainparent">
                    <div className="banner-subparent">
                        <div className="banner_textdiv">
                            <h1 className="banner_header1">
                                Collaborate. <br /> Connect. <br /> Build.
                            </h1>
                            <div>
                                <p className='banner_header3'>
                                    Welcome to Kindlift, a platform to <span>connect</span> NGOs, <br />Charities, and you to <span>collaborate</span> and <br />{" "}
                                    <span>build</span> a better tomorrow.
                                </p>
                            </div>
                            <div className="banner_signup_btndiv">
                                <div className="banner_btn_div">
                                
                                 {/* <Button variant="primary outline-primary" size="lg">Sign up now</Button>{' '} */}
                                {/* <Button to="https://github.com/Konami33" variant="outline-warning" size="lg">Git kindlift</Button>{' '} */} 
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HomeBanner;