import React from 'react'
import  { useState } from "react";
import { Link } from 'react-router-dom';
export default function Cnvasacom() {
   const dark = ()=>{
    
   }
  return (
    <center><div>


     {/**canvas starts */}

  <button className="btn btn-danger"  style={{marginLeft:"0.5em",marginBottom:"1rem"}} type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions">AboutUs</button>

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


<button className="btn btn-danger"  onClick={dark} style={{marginLeft:"0.5rem",marginBottom:"1rem"}}>DarkMode</button>
<button className="btn btn-danger"  style={{marginLeft:"0.5rem",marginBottom:"1rem"}}>Contact</button>
<button className="btn btn-danger"  style={{marginLeft:"0.5rem",marginBottom:"1rem"}}>button4</button>
<button className="btn btn-danger"  style={{marginLeft:"0.5rem",marginBottom:"1rem"}}>button5</button>
<button className="btn btn-danger"  style={{marginLeft:"0.5rem",marginBottom:"1rem"}}>button6</button>
<button className="btn btn-danger"  style={{marginLeft:"0.5rem",marginBottom:"1rem"}}>button7</button>
<a  href="#" className="btn btn-danger"  style={{marginLeft:"0.5rem",marginBottom:"1rem"}}>button8</a>
    </div></center>
  )
}
