import React, { useEffect } from 'react'
import { BrowserRouter,Link, NavLink, redirect } from 'react-router-dom'
import { UseSelector, useSelector } from 'react-redux/es/hooks/useSelector';
import { increment,decrement } from '../toolkit/cartSlice';
import Landing from './Landing';
import Swal from 'sweetalert2';
import { useAuth0 } from "@auth0/auth0-react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Form from './Form';
import BiharTourismHome from './BiharTourismHome';
import { motion } from 'framer-motion';

export default function NavBihar() {

 const info=useSelector((state)=>state.cartbox.cart)
 const { loginWithRedirect } = useAuth0();
 const { logout } = useAuth0();
 const {isAuthenticated}=useAuth0();
 const {user}=useAuth0();

  return (
    <div style={{borderBottom: '1px solid white',marginBottom:'5rem',backgroundColor:'black'}}>
      <nav id ="navig" className="navbar navbar-expand-lg navbar-dark bg-black fixed-top" style={{boxShadow:'1px 1px 2px white, 0 0 25px white, 0 0 5px white'}} >
    <div className="container-fluid">
        
     <BrowserRouter>
      <Link className="navbar-brand" to="https://getbootstrap.com/docs/5.2/components/navbar/"><img src="logo.png"  alt="..." style={{backgroundColor: "black",borderRadius:'0.2rem'}} className="logo" width="100" height="85"/></Link>
      {/* <Link className="navbar-brand" to="/BiharTourismHome"><b style={{color:"white"}}><h1 id="header">Bihar Tourism</h1></b></Link> */}
      </BrowserRouter>
      
      <button className="navbar-toggler"  type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        </ul>
    
    
    <div style={{float:'left'}}>

    
        {isAuthenticated && <p style={{color:'white',marginRight:'1rem',float:'right',marginTop:"0.9rem"}}><img style={{borderRadius:'50%',height:'2rem',marginRight:'0.3rem'}} src={user.picture} alt={user.name} />User:{user.name} </p>}
        
        
        </div>
         
        {/* {isAuthenticated && toast("loggedIn",{ toastId: 'success11'})} */}
        {/* {isAuthenticated && toast("loggedInn",{ toastId: 'success11'})} */}
     <div style={{float:'left',marginRight:'1rem'}}> {isAuthenticated?<motion.button style={{marginTop:'0.6rem'}} whileHover={{scale:1.1}} className="btn btn-light" onClick={() => logout({ logoutParams: { returnTo: window.location.origin } }) }> <b>Log Out</b></motion.button>: <motion.button  whileHover={{scale:1.1}}  className="btn btn-light" style={{marginTop:'0.6rem'}} onClick={() =>loginWithRedirect() }><b>Log In</b></motion.button>}</div>
             {/* {!isAuthenticated && fire()} */}

       <div  style={{float:'left'}}>

        <form className="d-flex" role="search" id='cart' >
         
           <img id="ecomm" src="cart.jpg" alt='...' style={{height:'4rem' ,Color:"green"}} />
           <span className="cart-count" style={{backgroundColor:"black",color:"white",height:'3.8rem',marginTop:"0.2rem"}}><b>{info}</b></span>
          </form>
          </div>
        {/* <form className="d-flex" role="search">
         
        </form> */}
      </div>
    </div>
    
   
    
  </nav>

  
  <ToastContainer/>
    </div>

  )
}
// https://youtu.be/T1wbLNvQImk?si=mljzlF6fJdso4frb   =auth0 by thapa technical