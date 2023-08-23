import React from 'react'
import { BrowserRouter,Link } from 'react-router-dom'
import { UseSelector, useSelector } from 'react-redux/es/hooks/useSelector';
import { increment,decrement } from '../toolkit/cartSlice';
export default function NavBihar() {

 const info=useSelector((state)=>state.cartbox.cart)
    
  return (
    <div style={{borderBottom: '1px solid white',marginBottom:'0rem',backgroundColor:'black',boxShadow:'1px 1px 2px white, 0 0 25px white, 0 0 5px white'}}>
      <nav id ="navig" className="navbar navbar-expand-lg navbar-light bg-dark"  >
    <div className="container-fluid">
        
     <BrowserRouter>
      <Link className="navbar-brand" to="https://getbootstrap.com/docs/5.2/components/navbar/"><img src="bihar tourism logo.png"  alt="..." style={{backgroundColor: "black",borderRadius:'0.2rem'}} className="logo" width="100" height="85"/></Link>
      <Link className="navbar-brand" to="/BiharTourismHome"><b style={{color:"white"}}><h1 id="header">Bihar Tourism</h1></b></Link>
      </BrowserRouter>
      
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        </ul>
       

      
        
       <div >
        <form className="d-flex" role="search" id='cart'>
          
           <img id="ecomm" src="https://static.vecteezy.com/system/resources/thumbnails/000/496/007/small/Ecommerce_998.jpg" alt='...' style={{height:'4rem' ,Color:"green",borderRadius:'0.2rem'}} />
           <span className="cart-count" style={{backgroundColor:"red",borderRadius:"50%",color:"white",height:'2rem'}}>{info}kg</span>
          </form>
          </div>
        <form className="d-flex" role="search">
         {/* <button  id="buttn" className="btn btn-outline-success" type="submit" >LogIn</button>*/}
        </form>
      </div>
    </div>
  </nav>

  
  
    </div>

  )
}
