import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";
import { Link,NavLink,BrowserRouter } from 'react-router-dom';
import Swal from 'sweetalert2';
import Form from './Form';
import biharTourismHome from './BiharTourismHome';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
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
    <div className="col" style={{backgroundColor:'white',margin:'0rem'}}>
        <center><img className="img-thumbnail" src="landingimage.jpeg" style={{height:'20rem',border:'1rem solid white'}}></img></center>
    <b> <p style={{color:"black",padding:'2rem'}}>Explore the enchanting wonders of Bihar, a land brimming with cultural richness and historical treasures. Bihar Tourism invites you to embark on a captivating journey through its ancient heritage, spiritual destinations, and natural beauty.</p></b>
    </div>

    
  </div>
</div>
</center>
        <ToastContainer/>

       <center><div className="container"  style={{backgroundColor:"black",margin:'0rem'}}>
  <div className="row">
    <div className="col" style={{}}>
      
      {/* <NavLink to="/Form"><h2> {isAuthenticated && <p style={{color:'white'}}>GoToHomePage</p>}</h2></NavLink> */}
      {isAuthenticated && toast("loggedInn",{ toastId: 'success11'})}
       <center>{isAuthenticated?<li><button style={{marginRight:"1rem",height:'2.5rem',marginTop:'5rem',marginBottom:'2rem'}} className="btn btn-light" onClick={() => logout({ logoutParams: { returnTo: window.location.origin } }) }><center><b> Log Out</b></center></button></li>: <li><button  className="btn btn-light" style={{marginRight:"1rem",height:'2.5rem',marginTop:'5rem',marginBottom:'2rem'}} onClick={() =>loginWithRedirect() }><center><b>Log In</b></center></button></li>}</center>
      {isAuthenticated && fire()}
    </div>

  </div>
  <Link to='/Form'><div style={{backgroundColor:'lightgreen'}}><b>Give Feedback</b></div></Link>
</div></center> 
    </div>
  )
}
