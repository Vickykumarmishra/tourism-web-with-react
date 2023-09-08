import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import { useState ,useEffect} from 'react';
import { motion } from 'framer-motion';
import Form from './Form';
import Swal from 'sweetalert2';
//import Nalanda from './Nalanda'
const b=1;let count=0;
export default function BiharTourismHome() {
  
//const [pageLoaded, setPageLoaded] = useState(false);
/*useEffect(() => {
  // Use the useEffect hook to set the state when the component mounts (i.e., after the page loads)
  setPageLoaded(true);
}, []);*/

useEffect(()=>{
   if(count==0){   
  Swal.fire(
    'you logged in',
    'Bihar tourism welcomes you',
    'success'
  )}; count++;
    },[]);
  return (

    
    <div >
   
   {/* {pageLoaded && <Form />} */}
  <div className='container' >

  
    <video controls autoPlay muted style={{width:'100%',marginTop:'2rem'}}>
    <source src="bihar_english.mp4" type="video/mp4"/>
    </video>
    </div>


  {/*firstly i have taken grids, inside i have putted cards */}
  <div className="container text-center">
  <div className="row">
    <div className="col" style={{marginRight:"1rem"}}>
      
      {/*card1 */}
      <motion.div  whileHover={{scale:1.1}} className="card" id="card1" style={{width:"18rem;",boxShadow:'1px 1px 2px white, 0 0 25px white, 0 0 5px white',backgroundColor:'black'}}>
  <img src="nalanda_755x450.jpg" className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title"  style={{color:'white'}}>Nalanda University</h5>
    <p className="card-text"  style={{color:'white'}}>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
   
   
    <NavLink to="/Nalanda" className="btn btn-outline-light" id="btn4">Know In Details</NavLink>{/*while doing nested routing, 'to' me '/' dene par kam nahi kar raha hai app */}
       
  </div>
</motion.div>

  </div>

    <div className="col" style={{marginRight:"1rem"}}>
      
      {/*card2 */}
      <motion.div  whileHover={{scale:1.1}} className="card" id="card2" style={{width: "18rem;",boxShadow:'1px 1px 2px white, 0 0 25px white, 0 0 5px white',backgroundColor:'black'}}>
  <img src="mahavir_mandir_755x450.jpeg" className="img-fluid" alt="..."/>
  <div className="card-body">
    <h5 className="card-title"  style={{color:'white'}}>Mahaveer Mandir</h5>
    <p className="card-text"  style={{color:'white'}}>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <NavLink to="/Mahaveer"  className="btn btn-outline-light" id="btn3">Know In Details</NavLink>
    
  </div>
</motion.div>
</div>


    <div className="col" style={{ marginRight:"1rem"}}>
      {/*card3 */}
      <motion.div whileHover={{scale:1.1}} className="card" id="card3" style={{width: "18rem;",boxShadow:'1px 1px 2px white, 0 0 25px white, 0 0 5px white',backgroundColor:'black'}}>
  <img src="Harmandir_Patna_755x450.jpg" className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title"  style={{color:'white'}}  animate={{x:'50px'}}>Harmandir sahib</h5>
    <p className="card-text"  style={{color:'white'}}>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <NavLink to="/Harmandir" className="btn btn-outline-light" id="btn2">Know In Details</NavLink>
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
      <motion.div whileHover={{scale:1.1}} className="card" id="card4" style={{width:"18rem;",boxShadow:'1px 1px 2px white, 0 0 25px white, 0 0 5px white',backgroundColor:'black'}}>
  <img src="chatth.webp" className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title"  style={{color:'white'}}>Chatth Puja</h5>
    <p className="card-text"  style={{color:'white'}}>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
   
   
    <NavLink to="/chatthpuja" className="btn btn-outline-light" id="btn1">Know In Details</NavLink>{/*while doing nested routing, 'to' me '/' dene par kam nahi kar raha hai app */}
       
  </div>
</motion.div>

  </div>

    <div className="col" style={{marginRight:"1rem"}}>
      
      {/*card5 */}
      <motion.div whileHover={{scale:1.1}} className="card" id="card5" style={{width: "18rem;",boxShadow:'1px 1px 2px white, 0 0 25px white, 0 0 5px white',backgroundColor:'black'}}>
  <img src="raj.jpg" className="img-fluid" alt="..."/>
  <div className="card-body">
    <h5 className="card-title"  style={{color:'white'}}>Rajgir</h5>
    <p className="card-text"  style={{color:'white'}}>Some quick example text to build on the card title and make up the bulk of the card's.</p>
    <NavLink to="/Rajgir"  className="btn btn-outline-light" id="btn5">Know In Details</NavLink>
    
  </div>
</motion.div>
</div>


    <div className="col" style={{ marginRight:"1rem"}}>
      {/*card6 */}
      <motion.div whileHover={{scale:1.1}} className="card" id="card6" style={{width: "18rem;",boxShadow:'1px 1px 2px white, 0 0 25px white, 0 0 5px white',backgroundColor:'black'}}>
  <img src="gurpa_755x450.jpeg" className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title" style={{color:'white'}} >Gurpa Hills</h5>
    <p className="card-text"  style={{color:'white'}}>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <NavLink to="/Gurpa" className="btn btn-outline-light" id="btn6">Know In Details</NavLink>
    <Outlet/>
  </div>
</motion.div>

    </div>
  </div>
</div>   
    </div>
  )
}
