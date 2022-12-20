import React from 'react'
import  { useState } from "react";
import { Link } from 'react-router-dom';
export default function Cnvasacom() {
   const dark = ()=>{
    
   }
  return (
    <center><div>


     {/**canvas starts */}

  <button class="btn btn-danger"  id="kala2" style={{marginLeft:"0.5em",marginBottom:"1rem"}} type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions">AboutUs</button>

<div class="offcanvas offcanvas-top" style={{backgroundColor:'white'}} data-bs-scroll="true" tabindex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title" id="offcanvasWithBothOptionsLabel" style={{color:"green"}}><b>बिहार में आपका स्वागत है</b></h5>
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
    
    <p style={{color:'green'}}>We are providing you all the details of tourist places , culture and festival of Bihar at a single place. we are trying to make this website more easier to use by enhancing it timely. we also provide prasad booking services at remote locations of Bihar</p>
  </div>
  </div>
{/**canvas ends */}


<button class="btn btn-danger" id="kala" style={{marginLeft:"0.5rem",marginBottom:"1rem"}}>Dark-Mode</button>
<button class="btn btn-danger"  id="kala4" style={{marginLeft:"0.5rem",marginBottom:"1rem"}}>Contact</button>
<button class="btn btn-danger" id="kala5" style={{marginLeft:"0.5rem",marginBottom:"1rem"}}>Normal-Mode</button>
<button class="btn btn-danger"  id="kala6" style={{marginLeft:"0.5rem",marginBottom:"1rem"}}>button5</button>
<button class="btn btn-danger" id="kala7" style={{marginLeft:"0.5rem",marginBottom:"1rem"}}>button6</button>
<button class="btn btn-danger" id="kala8" style={{marginLeft:"0.5rem",marginBottom:"1rem"}}>button7</button>

    </div></center>
  )
}
