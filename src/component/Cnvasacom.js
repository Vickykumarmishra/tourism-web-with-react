import React from 'react'
import  { useState } from "react";

export default function Cnvasacom() {

  return (
    <div>


     {/**canvas starts */}

  <button class="btn btn-danger"  style={{marginLeft:"2rem",marginBottom:"1rem"}} type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions">canvas</button>

<div class="offcanvas offcanvas-start" data-bs-scroll="true" tabindex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title" id="offcanvasWithBothOptionsLabel">Select the site you want to visit</h5>
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
  </div>
  </div>
{/**canvas ends */}
<button class="btn btn-danger"  style={{marginLeft:"1.5rem",marginBottom:"1rem"}}>button2</button>
<button class="btn btn-danger"  style={{marginLeft:"1.5rem",marginBottom:"1rem"}}>button3</button>
<button class="btn btn-danger"  style={{marginLeft:"1.5rem",marginBottom:"1rem"}}>button4</button>
<button class="btn btn-danger"  style={{marginLeft:"1.5rem",marginBottom:"1rem"}}>button5</button>
<button class="btn btn-danger"  style={{marginLeft:"1.5rem",marginBottom:"1rem"}}>button2</button>
<button class="btn btn-danger"  style={{marginLeft:"1.5rem",marginBottom:"1rem"}}>button3</button>
<button class="btn btn-danger"  style={{marginLeft:"1.5rem",marginBottom:"1rem"}}>button4</button>
<button class="btn btn-danger"  style={{marginLeft:"1.5rem",marginBottom:"1rem"}}>button5</button>
<button class="btn btn-danger"  style={{marginLeft:"1.5rem",marginBottom:"1rem"}}>button2</button>
<button class="btn btn-danger"  style={{marginLeft:"1.5rem",marginBottom:"1rem"}}>button3</button>
    </div>
  )
}
