import React, { useContext, useEffect, useState } from 'react';
import { Button, Container, Form, Nav, Navbar, Dropdown, Image } from 'react-bootstrap';
import logo from '../../Assets/Images/Logo/logoKindlift.png'
import { Link, Navigate, useNavigate } from 'react-router-dom';
import './Header.css'
import { AuthContext } from '../Context/AuthProvider';
import demoDp from '../../Assets/Images/Logo/user.png'

const Header = () => {


    const { user, logout } = useContext(AuthContext);
    console.log(user?.uid)
    const navigate = useNavigate();

    const [usr, setUsr] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/user/${user?.uid}`)
            .then(res => res.json())
            .then(data => {
                setUsr(data[0])
                console.log(data[0])
            });
    }, [user]);

    const handleSignOut = () => {
        logout()
            .then(() => console.log("logged out successfully!"))
            .catch((error) => console.error(error));
        
        navigate('/')
    }
    



    return (
        <div className='navbar border-secondary-subtle'>
            <Navbar expand="lg">
                <Container fluid>
                    <Navbar.Brand href="/" >
                        <img className='logo' src={logo} alt="" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0 navs mx-auto"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Link to="/">Home</Link>
                            <Link to="/feed">Feed</Link>
                            <Link to="/orgs">Organizations</Link>
                            <Link to="/events">Events</Link>
                            <Link to="/Shop">Shop</Link>

                        </Nav>
                        
                        <Navbar.Text>
                            
                            {(user && usr)?
                                <div className='d-flex'> 
                                    <Dropdown>  
                                        <Dropdown.Toggle  className='py-0' variant=""  id="dropdown-basic">
                                            {(usr?.photoURL) ?
                                                <Image className=' me-2' style={{ width: "40px", height: "40px"}} roundedCircle src={usr.photoURL}></Image>
                                                :
                                                <Image className=' me-2' style={{ width: "40px", height: "40px"}} roundedCircle src={demoDp}></Image>
                                            }
                                        </Dropdown.Toggle>

                                        <Dropdown.Menu  className='py-0 w-75'>
                                            <Dropdown.Item className='px-0  border-bottom'>
                                                <Link className='ps-2 py-0 text-decoration-none d-block w-100'><small>My profile</small></Link>
                                            </Dropdown.Item>

                                            <Dropdown.Item className='px-0 d-block w-100 border-bottom' onClick={handleSignOut}>
                                                <p className='mb-0 py-0 ps-2 text-danger'><small>Logout</small></p>
                                            </Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </div>
                                :
                                <>
                                    <Link to={`/login`}>
                                        <button className='ms-2 btn btn-outline-dark py-1'>Login</button>
                                    </Link>
                                    <Link to={`/register`}>
                                        <button className='ms-2 btn btn-dark py-1'>Signup</button>
                                    </Link>
                                </>
                            }

                        </Navbar.Text>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;