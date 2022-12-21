import React from 'react'
import { BrowserRouter,Link } from 'react-router-dom'
import Cnvasacom from './Cnvasacom';
export default function NavBihar(props) {

  
  console.warn(props.data)//props.data karne se exact value mil jayega jo data ke andar store hoga,agar dusra component iske andar data pass kiya hoga to.
    console.log(props.data.length);
    
  return (
    <div style={{borderBottom: '1px solid red',marginBottom:'0.5rem'}}>
      <nav id ="navig" className="navbar navbar-expand-lg navbar-light bg-lignt"  >
    <div className="container-fluid">
        
     <BrowserRouter>
      <Link className="navbar-brand" to="https://getbootstrap.com/docs/5.2/components/navbar/"><img src="bihar tourism logo.png"  alt="..." style={{backgroundColor: "white"}} className="logo" width="100" height="85"/></Link>
      <Link className="navbar-brand" to="#"><b style={{color:"green"}}><h1>Bihar Tourism</h1></b></Link>
      </BrowserRouter>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        </ul>
       

      
        
       <div >
        <form className="d-flex" role="search" id='cart'>
          
           <img id="ecomm" src="https://static.vecteezy.com/system/resources/thumbnails/000/496/007/small/Ecommerce_998.jpg" alt='...' style={{height:'4rem' ,Color:"green"}} />
           <span className="cart-count" style={{backgroundColor:"red",borderRadius:"50%",color:"white",height:'2rem'}}>{props.data.length}kg</span>
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
