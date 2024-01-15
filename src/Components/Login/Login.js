import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { FaGoogle } from 'react-icons/fa6';
import './Login.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { GoogleAuthProvider } from 'firebase/auth';
import logo from '../../Assets/Images/Logo/logoKindlift.png'
import { AuthContext } from '../Context/AuthProvider';


const Login = () => {

    const [error, setError] = useState("");
    const {  signIn } = useContext(AuthContext)
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/feed';

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        signIn(email, password)
            .then(result => {
                const user = result.user;
                // console.log(user);
                form.reset();
                setError("");
                navigate(from, { replace: true });
                window.location.reload();
            })
            .catch(error => {
                console.error(error);
                setError(error.message);
            });
    }


    return (
        <div className='login m-auto shadow rounded-4 mt-3 mb-5'>
            <div className='w-50 mt-3 m-auto text-center'>
                <Link to={'/'}>
                    <img className='w-100 mb-2' src={logo} alt="" />
                </Link>
                <h5>Login</h5>
            </div>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name='email' type="email" placeholder="Enter email" required/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name='password' type="password" placeholder="Password" required/>
                </Form.Group>

                <p className='text-danger'><small>{error}</small></p>

                <Button className='w-100 mt-2 mb-2' variant="outline-dark" type="submit">
                    Login
                </Button>

                <br />
                <Form.Text>
                    New Here? <Link to={'/register'}>Please register</Link>
                </Form.Text>
            </Form>
        </div>
    );
};

export default Login;