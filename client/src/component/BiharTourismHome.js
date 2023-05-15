import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import { useState } from 'react';
import { motion } from 'framer-motion';
//import Nalanda from './Nalanda'
const b=1;
export default function biharTourismHome() {

  
  return (
    <div>
   
<div id="carouselExampleDark" className="carousel carousel-dark slide" style={{border:"2px solid blue"}} data-bs-ride="carousel">
    <div className="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
    <div className="carousel-inner">
      <div className="carousel-item active" data-bs-interval="1000">
        <img src="golghar.jpeg" id="photu" className="d-block w-100" alt="..." />
        <div className="carousel-caption d-none d-md-block">
          <h3  style={{color:"white "}} className="responsive-font-example">Golghar,Patna</h3>
          <p  style={{color:"white "}}className="responsive-font-example">Some representative placeholder content for the first slide.</p>
        </div>
      </div>
      <div className="carousel-item active" data-bs-interval="1000">
        <img src="jal mandir pawapuri Bihar.jpeg"  id="photu" className="d-block w-100" alt="..." />
        <div className="carousel-caption d-none d-md-block">

          <h3 style={{color:"white "}} className="responsive-font-example" >Jal Mandir ,Pawapuri</h3>
          <p  style={{color:"white " }} className="responsive-font-example">Some representative placeholder content for the second slide.</p>
        </div>
      </div>
      <div className="carousel-item active" data-bs-interval="1000">        
        <img src="maahabodhi.jpg" id="photu" className="d-block w-100" alt="..."/>
        <div className="carousel-caption d-none d-md-block">
          <h3 style={{color:"white "}}className="responsive-font-example">Mahabodhi Temple , Gaya</h3>
          <p  style={{color:"white "}} className="responsive-font-example">Some representative placeholder content for the third slide.</p>
        </div>
      </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>

  {/*firstly i have taken grids, inside i have putted cards */}
  <div className="container text-center">
  <div className="row">
    <div className="col" style={{marginRight:"1rem"}}>
      
      {/*card1 */}
      <motion.div  whileHover={{scale:1.2}} className="card" id="card1" style={{width:"18rem;"}}>
  <img src="nalanda_755x450.jpg" className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title"  style={{color:'green'}}>Nalanda University</h5>
    <p className="card-text"  style={{color:'green'}}>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
   
   
    <NavLink to="/Nalanda" className="btn btn-primary" id="btn4">Know In Details</NavLink>{/*while doing nested routing, 'to' me '/' dene par kam nahi kar raha hai app */}
       
  </div>
</motion.div>

  </div>

    <div className="col" style={{marginRight:"1rem"}}>
      
      {/*card2 */}
      <motion.div  whileHover={{scale:1.2}} className="card" id="card2" style={{width: "18rem;"}}>
  <img src="mahavir_mandir_755x450.jpeg" className="img-thumbnail" alt="..."/>
  <div className="card-body">
    <h5 className="card-title"  style={{color:'green'}}>Mahaveer Mandir</h5>
    <p className="card-text"  style={{color:'green'}}>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <NavLink to="/Mahaveer"  className="btn btn-primary" id="btn3">Know In Details</NavLink>
    
  </div>
</motion.div>
</div>


    <div className="col" style={{ marginRight:"1rem"}}>
      {/*card3 */}
      <motion.div whileHover={{scale:1.2}} className="card" id="card3" style={{width: "18rem;"}}>
  <img src="Harmandir_Patna_755x450.jpg" className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title"  style={{color:'green'}}  animate={{x:'50px'}}>Harmandir sahib</h5>
    <p className="card-text"  style={{color:'green'}}>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <NavLink to="/Harmandir" className="btn btn-primary" id="btn2">Know In Details</NavLink>
    <Outlet/>
  </div>
</motion.div>

    </div>
  </div>
</div>
      

{/**fir se 3 grid liye and usme 3 cards dal diye */}
<div className="container text-center">
  <div className="row">
    <div className="col" style={{marginRight:"1rem"}}>
      
      {/*card4 */}
      <motion.div whileHover={{scale:1.2}} className="card" id="card4" style={{width:"18rem;"}}>
  <img src="chatth_755x450.jpg" className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title"  style={{color:'green'}}>Chatth Puja</h5>
    <p className="card-text"  style={{color:'green'}}>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
   
   
    <NavLink to="/chatthpuja" className="btn btn-primary" id="btn1">Know In Details</NavLink>{/*while doing nested routing, 'to' me '/' dene par kam nahi kar raha hai app */}
       
  </div>
</motion.div>

  </div>

    <div className="col" style={{marginRight:"1rem"}}>
      
      {/*card5 */}
      <motion.div whileHover={{scale:1.2}} className="card" id="card5" style={{width: "18rem;"}}>
  <img src="rajgir_755x450.jpg" className="img-thumbnail" alt="..."/>
  <div className="card-body">
    <h5 className="card-title"  style={{color:'green'}}>Rajgir</h5>
    <p className="card-text"  style={{color:'green'}}>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <NavLink to="/Rajgir"  className="btn btn-primary" id="btn5">Know In Details</NavLink>
    
  </div>
</motion.div>
</div>


    <div className="col" style={{ marginRight:"1rem"}}>
      {/*card6 */}
      <motion.div whileHover={{scale:1.2}} className="card" id="card6" style={{width: "18rem;"}}>
  <img src="gurpa_755x450.jpeg" className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title" style={{color:'green'}} >Gurpa Hills</h5>
    <p className="card-text"  style={{color:'green'}}>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <NavLink to="/Gurpa" className="btn btn-primary" id="btn6">Know In Details</NavLink>
    <Outlet/>
  </div>
</motion.div>

    </div>
  </div>
</div>   
    </div>
  )
}
