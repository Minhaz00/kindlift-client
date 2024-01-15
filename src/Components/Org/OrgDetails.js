import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import './OrgDetails.css'
import { Button } from 'react-bootstrap';


const OrgDetails = () => {

    const org = useLoaderData();
    let {bio, category, email, id, loc, name, phone, ratingsCount, profilepic } = org;

    const web = name.replace(/\W+/g, '').toLowerCase()


    const [e_mail, setE_mail] = useState("")
    const [usr, setUsr] = useState("")

    const handleEmail = e =>{
        setE_mail(e.target.value)
    }
    const handleName = e =>{
        setUsr(e.target.value)
    }

    const handleSubscribe = ()=>{
       const obj = {
        org_name: name,
        subscriber: usr,
        email: e_mail
       }
       fetch("http://localhost:5000/newsletter", {
          method: "POST",
          headers: {"content-type": "application/json"},
          body: JSON.stringify(obj)  
        })
        .then(res => res.json())
        .then(result => {
            window.location.replace(result.url)
            console.log(result)
        })

    }


    return (
        <div className='p-5 event-details  shadow rounded-3 mt-3 w-75'>
            
            <div className='cover'>
                <img className='w-100' src='https://marketplace.canva.com/EAE91Kz0wsI/1/0/1600w/canva-blue-yellow-retro-quotes-twitter-header-xTB_BZnqeew.jpg' alt=''/>
            </div>
            
            <div className='orgdp'>
                <img src={profilepic} alt=''/>
            </div>

           
            <div className='d-flex align-items-center justify-content-between'>
                <h3 className='fw-bold'>{name}</h3>
                <button className='btn btn-dark'>Donate</button>
            </div>

            <p className='w-75'>{bio}</p>  <br/> <br/>

            <h6 className='fw-bold'>Contact Information </h6>
            <small>Adress: 63, Chowringhee Road, 33, Alexander Court, Dhaka, Bangladesh</small> <br/>
            <small>Phone: {phone}</small> <br/>
            <small>Email: {email}</small> <br/>
            <small>Website: www.{web}.org</small> <br/>

            

            <br/> <br/>
            <h6 className='fw-bold'>About Organization</h6>  
            <small>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</small>
            <br/>
            <small>On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain.</small>



            <br/> <br/> <br/>
            <h6 className='fw-bold'>Past Events</h6>  
            <div className='d-flex mt-3'>
                <img className='w-25 me-1' src='https://149695847.v2.pressablecdn.com/wp-content/uploads/2018/11/data-analysis-ngo.jpg' alt=''/>
                <img className='w-25 me-1' src='https://scontent.fcgp3-2.fna.fbcdn.net/v/t39.30808-6/302776407_444405164373410_661625787825909764_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=783fdb&_nc_eui2=AeEo9RmeAuRZNqN41AIWHThbL2AJpItPII0vYAmki08gjQhEGHv95bkQWMBVMmsZgdNtAgtodOtpzcJNf4Kq3XkB&_nc_ohc=qF4BaAmOlgIAX_eZrPE&_nc_ht=scontent.fcgp3-2.fna&oh=00_AfAY8nPJ3lZ0DMrmPSAz4rUxHcp4GJ-iilPohML-k0DzDA&oe=65A59A85' alt=''/>
                <img className='w-25 me-1' src='https://www.kitaab.com/wp-content/uploads/2017/06/KitaabClubCover.png' alt=''/>
                <img className='w-25 me-1' src='https://scontent.fcgp3-1.fna.fbcdn.net/v/t39.30808-6/408213837_747375834074757_3794166643424104391_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=3635dc&_nc_eui2=AeGiscRCP6wMfnrJzh4eSTRg3iigWE-emGbeKKBYT56YZqHNABf38rZVtH1JJWdULPE27aB9Ltqy8IYwJoDBdNNt&_nc_ohc=g-9iniB8lVIAX8JKLfw&_nc_ht=scontent.fcgp3-1.fna&oh=00_AfC86Ik5LEhk86Gd9E4DkxDSNwuFjQzgi9_wbbxeoHJukw&oe=65A4D83A' alt=''/>
            </div>
            <div className='d-flex mt-4'>
                <img className='w-25 me-1' src='https://149695847.v2.pressablecdn.com/wp-content/uploads/2018/11/data-analysis-ngo.jpg' alt=''/>
                <img className='w-25 me-1' src='https://scontent.fcgp3-2.fna.fbcdn.net/v/t39.30808-6/302776407_444405164373410_661625787825909764_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=783fdb&_nc_eui2=AeEo9RmeAuRZNqN41AIWHThbL2AJpItPII0vYAmki08gjQhEGHv95bkQWMBVMmsZgdNtAgtodOtpzcJNf4Kq3XkB&_nc_ohc=qF4BaAmOlgIAX_eZrPE&_nc_ht=scontent.fcgp3-2.fna&oh=00_AfAY8nPJ3lZ0DMrmPSAz4rUxHcp4GJ-iilPohML-k0DzDA&oe=65A59A85' alt=''/>
                <img className='w-25 me-1' src='https://www.kitaab.com/wp-content/uploads/2017/06/KitaabClubCover.png' alt=''/>
                <img className='w-25 me-1' src='https://scontent.fcgp3-1.fna.fbcdn.net/v/t39.30808-6/408213837_747375834074757_3794166643424104391_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=3635dc&_nc_eui2=AeGiscRCP6wMfnrJzh4eSTRg3iigWE-emGbeKKBYT56YZqHNABf38rZVtH1JJWdULPE27aB9Ltqy8IYwJoDBdNNt&_nc_ohc=g-9iniB8lVIAX8JKLfw&_nc_ht=scontent.fcgp3-1.fna&oh=00_AfC86Ik5LEhk86Gd9E4DkxDSNwuFjQzgi9_wbbxeoHJukw&oe=65A4D83A' alt=''/>
            </div>

            

            <br/> <br/> <br/>
            <h6 className='fw-bold'>Find Us</h6> 
            <iframe
                title='map'
                src= "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14741.482534684159!2d88.35842639207846!3d22.527784753774615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0276d0a2583ccf%3A0xf1efff5c088752e2!2s6%20Ballygunge%20Place!5e0!3m2!1sen!2sin!4v1695572606793!5m2!1sen!2sin"
                style={{
                  border: 0,
                  width: "100%",
                  height: "400px",
                  borderRadius: "10px",
                }}
                allowfullscreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>


            <br/> <br/> <br/>
            <h6 className='fw-bold'>Join Newsletter</h6>
            <div className='mx-auto w-50 border p-5 rounded-2 border-1'>
                <p>Subscribe to Newsletter to get involve in out community!</p>
                <p className='p-0'>Enter your name: </p>
                <input onChange={handleName} className='w-100  border rounded-3 bg-body-tertiary' type="email" name="" id="" placeholder=""/>
                <p className='p-0 mt-3'>Enter your email: </p>
                <input onChange={handleEmail} className='w-100  border rounded-3 bg-body-tertiary' type="name" name="" id="" placeholder=""/><br></br>
                <Button className='btn btn-dark mt-3' onClick={handleSubscribe}>Join </Button>
            </div>
        </div>
    );
};

export default OrgDetails;