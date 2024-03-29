import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";
import { Link,NavLink,BrowserRouter } from 'react-router-dom';
import Swal from 'sweetalert2';
import Form from './Form';
import biharTourismHome from './BiharTourismHome';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect'; 

import { Player, Controls } from '@lottiefiles/react-lottie-player';

export default function Landing() {

const { loginWithRedirect } = useAuth0();
 const { logout } = useAuth0();
 const {isAuthenticated}=useAuth0();
 const {user}=useAuth0();
 const navigate=useNavigate();
  function fire(){
   
    navigate('/BiharTourismHome')
  }

  return (
    <div style={{marginTop:"1rem"}} >

    

      

    

    <center><div className="container"  style={{margin:'0rem'}} >

      
  <div className="row">

  



    <div className="col" style={{backgroundColor:'white', fontSize:'2rem'}}>
        <center><img className="img-thumbnail" src="landingimage.jpeg" style={{height:'19rem',border:'1rem solid white'}}></img></center>

        <b><Typewriter
      options={{
        strings: ['Bihar Tourism Welcomes You', 'बिहार में राउर स्वागत बा'],
        autoStart: true,
        loop: true,
      }}
    
    /></b>

    <b> <h4 style={{color:"black",padding:'2rem',fontFamily:"Times New Roman"}}>Explore the enchanting wonders of Bihar, a land brimming with cultural richness and historical treasures. Bihar Tourism invites you to embark on a captivating journey through its ancient heritage, spiritual destinations, and natural beauty.</h4></b>
    </div>

    
  </div>
</div>
</center>
        <ToastContainer/>

       <center><div className="container"  style={{backgroundColor:"black",margin:'0rem'}}>
  <div className="row">
    <div className="col" style={{}}>
      
       <center>{isAuthenticated?<li><motion.button whileHover={{scale:1.1}} style={{marginRight:"1rem",height:'2.5rem',marginTop:'5rem',marginBottom:'2rem'}} className="btn btn-light" onClick={() => logout({ logoutParams: { returnTo: window.location.origin } }) }><center><b> Log Out</b></center></motion.button></li>: <li><motion.button whileHover={{scale:1.1}} className="btn btn-light" style={{marginRight:"1rem",height:'2.5rem',marginTop:'5rem',marginBottom:'2rem'}} onClick={() =>loginWithRedirect() }><center><b>Log In</b></center></motion.button></li>}</center>
      {isAuthenticated && fire()}
      {isAuthenticated && toast("loggedInn",{ toastId: 'success11'})}
    </div>

  </div>
  {/* <Link to='/Form'><div style={{backgroundColor:'lightgreen'}}><b>Give Feedback</b></div></Link> */}
</div></center> 



    </div>
  )
}
