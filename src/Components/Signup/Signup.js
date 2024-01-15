import React, { useContext, useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { toast, useToaster } from 'react-hot-toast';
import '../Login/Login.css'
import logo from '../../Assets/Images/Logo/logoKindlift.png'
import { Button, Form } from 'react-bootstrap';
import { AuthContext } from '../Context/AuthProvider';


const Signup = () => {

    const navigate = useNavigate();
    const [error, setError] = useState("");
    const [isOrg, setIsOrg] = useState(false);
    const { user, setUser, createUser, updateUserProfile} = useContext(AuthContext)
    const [usr, setUsr] = useState({})

    let bio = "";
    let description = "";
    let website = "";
    let location = "";
    let category = "";
    let phone = "";

    const addUserToJSON = (newUser) => {    
            fetch("http://localhost:5000/orgtojson", {
            method: 'POST',
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(newUser),  
            })
                .then(res => res.json())
                .then(data => {})
                .catch(error => console.error(error));
        
    }

    

    const handleSubmit = (event) =>{
        event.preventDefault(); 
        const form = event.target;
        const name = form.name?.value;
        const email = form.email?.value;
        const password = form.password?.value;
        const confirm = form.confirm?.value;
        console.log(name, email, name, password, confirm);


        // Org extra data
        bio = form.bio?.value;
        description = form.description?.value;
        website = form.website?.value;
        location = form.location?.value;
        category = form.category?.value;
        phone = form.phone?.value;

        const newUser = {
            id: (Math.floor(Math.random() * 9e15) + 1e15).toString(),
            name: name,
            email: email,
            bio: bio,
            // description: description,
            // website: website,
            loc: location,
            category: category,
            phone: phone,
            Org: isOrg,
        }

        addUserToJSON(newUser);


        if (password.length < 6) {
            setError("Password must be at least 6 characters!");
            return;
        }

        if (password !== confirm) {
            setError("Please make sure your password match!");
            return;
        }

        createUser(email, password)
        .then(result =>{
            setUser(result.user);
            setUsr(result.user)
            setError("");
            form.reset();
            handleProfileUpdate(name);
            toast.success("Account created successfully!")
            navigate('/feed');
            window.location.reload();
        })
        .catch(error => {
            setError(error.message);
        });
    }


    const handleProfileUpdate = (name) => {
        const profile = {
            displayName: name,
        }
        updateUserProfile(profile)
            .then(() => { })
            .catch(error => console.error(error));
    }


    const toggleIsOrg = event => {
        setIsOrg(event.target.checked);
    }



    return (
        <div className='login m-auto shadow rounded-4 mt-3 mb-5'>

            <div className='w-50 mt-3 m-auto text-center'>
                <Link to={'/'}>
                    <img className='w-100 mb-2' src={logo} alt=""/>
                </Link>
                <h5>Register</h5>
            </div>


            <Form className='mt-5' onSubmit ={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Username/ Org. name</Form.Label>
                    <Form.Control name='name' type="text" placeholder="Enter Name" required />
                </Form.Group>
                
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name='email' type="email" placeholder="Enter email"  required/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name='password' type="password" placeholder="Password" required/>
                </Form.Group>
                
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control name='confirm' type="password" placeholder="Password" required/>
                </Form.Group>
                

                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check onClick={toggleIsOrg} type="checkbox" label=<p>Signing in as an organizations?</p>>
                    </Form.Check>
                </Form.Group>


                <p className='text-danger'><small>{error}</small></p>


                {
                    (isOrg)?
                        <>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Organizaiton's bio</Form.Label>
                            <Form.Control name='bio' type="text" placeholder="Enter organization bio" required />
                        </Form.Group>
                        
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Description</Form.Label>
                            <Form.Control name='description' type="text" placeholder="Description"  required/>
                        </Form.Group>
                       
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Website</Form.Label>
                            <Form.Control name='website' type="text" placeholder="Enter website"  required/>
                        </Form.Group>
                        
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Location</Form.Label>
                            <Form.Control name='location' type="text" placeholder="Enter location"  required/>
                        </Form.Group>
                        
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Category</Form.Label>
                            <Form.Control name='category' type="text" placeholder="Enter category"  required/>
                        </Form.Group>
                        
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Phone</Form.Label>
                            <Form.Control name='phone' type="text" placeholder="Enter phone"  required/>
                        </Form.Group>
                            
                        </> 
                        :
                        <></>
                }



                <Button className='w-100' variant="outline-dark" type="submit">
                    Sign Up
                </Button>
                <br />
                <Form.Text className="">
                    Already have an account? <Link to={'/login'}>Please login</Link>
                </Form.Text>
            </Form>
        </div>
    );
};

export default Signup;