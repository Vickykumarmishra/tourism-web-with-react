import React from 'react'
import  { useState } from "react";
import { BrowserRouter, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import SignUp from './SignUp';
export default function Buttons() {
   const dark = ()=>{
    
   }
  return (
    <center><div>


     {/**canvas starts here */}

  <motion.button whileHover={{scale:1.2}}  className="btn btn-danger"  id="kala2" style={{marginLeft:"0.5em",marginBottom:"1rem"}} type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions">AboutUs</motion.button>&nbsp;&nbsp;

<div className="offcanvas offcanvas-top" style={{backgroundColor:'white'}} data-bs-scroll="true" tabindex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
  <div className="offcanvas-header">
    <h5 className="offcanvas-title" id="offcanvasWithBothOptionsLabel" style={{color:"green"}}><b>बिहार में आपका स्वागत है</b></h5>
    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div className="offcanvas-body">
    
    <p style={{color:'green'}}>We are providing you all the details of tourist places , culture and festival of Bihar at a single place. we are trying to make this website more easier to use by enhancing it timely. we also provide prasad booking services at remote locations of Bihar</p>
  </div>
  </div>
{/**canvas ends */}


<motion.button  whileHover={{scale:1.2}} className="btn btn-danger" id="kala" style={{marginLeft:"0.5rem",marginBottom:"1rem"}}>Dark-Mode</motion.button>&nbsp;&nbsp;

<motion.button whileHover={{scale:1.2}} className="btn btn-danger" id="kala5" style={{marginLeft:"0.5rem",marginBottom:"1rem"}}>Normal-Mode</motion.button>&nbsp;&nbsp;
<motion.button whileHover={{scale:1.2}} className="btn btn-danger" id="kala7" style={{marginLeft:"0.5rem",marginBottom:"1rem"}}><a href='/' style={{color:'white'}}>UsersDetailsEntry</a></motion.button>&nbsp;&nbsp;
<BrowserRouter>

</BrowserRouter>
    </div></center>
  )
}
