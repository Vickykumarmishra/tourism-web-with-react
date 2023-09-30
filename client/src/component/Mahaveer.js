import React from 'react'
import { NavLink, Link,Outlet } from 'react-router-dom'
import { motion } from 'framer-motion'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useDispatch } from 'react-redux';
import { increment, decrement } from '../toolkit/cartSlice';
import { useSelector } from 'react-redux';
export default function Mahaveer() {
  const data=useSelector((state)=>state.cartbox.cart)
  const dispatch=useDispatch()
  
  return (
    <div>

<div className="container">
  <div className="row">

  <div className="col" style={{marginBottom:"2rem",marginTop:'2.5rem'}}>
    {/* <center>  <motion.h3   style={{color:"white"}}><b>Order prasad at your home</b></motion.h3></center> */}
    <center> <img src="laddu.jpg" className='img-fluid' style={{}} alt="..." /></center>
  
    <center><p style={{color:'red'}}>Laddu,Price:100,12% discount on total amount</p><center/>
    
    <motion.button   whileHover={{scale:1.1}} style={{marginTop:'0.5rem',backgroundColor:"blue"}}  type='submit' className="btn btn-info"
        onClick={()=>{dispatch(increment());toast("item added succesfully",{toastId:'success6'})}}>

        <b style={{color:'white'}}>Add Item+ </b> </motion.button>

        <motion.button  whileHover={{scale:1.1}} style={{marginLeft:'0.5rem',marginTop:'0.5rem'}} id="buttn" type='submit'className="btn btn-info"
   onClick={()=>{dispatch(decrement()) ;if(data>0){ toast("1 item removed successfully",{toastId:'success9'})}}}>

        <b>Delete Item</b>  </motion.button>

        {/* <NavLink to='https://buy.stripe.com/test_5kAdSbgBb4NjdwcdQQ'><motion.button whileHover={{scale:1.1}} style={{marginTop:"0.5rem",marginLeft:"0.5rem"}} className='btn btn-info'><b>purchase ₹</b></motion.button></NavLink> */}
    </center>
    </div>
    
    {/* <div className="col"  style={{ border:'0.2rem solid black', borderRadius:'1rem' , padding:'1rem' ,color:'white', marginBottom:'6.7rem',marginTop:'2.5rem',boxShadow:'1px 1px 2px white, 0 0 25px white, 0 0 5px white'}}>
   <center>  <h3 style={{color:"white"}}>Billing:</h3><br/>
   
   Quantity added to cart:{data}kg<br/><br/>
  Today's Rate:₹100/kg<br/><br/>
  <p>Total amount to be paid: {data*100}</p>

  <NavLink to='https://buy.stripe.com/test_5kAdSbgBb4NjdwcdQQ'><motion.button whileHover={{scale:1.1}} className='btn btn-info'><b>purchase ₹</b></motion.button></NavLink>
   </center>

    </div> */}

    <div className='row container' style={{marginBottom:"0.5rem",backgroundColor:'blue'}}>
   <center><NavLink to='https://buy.stripe.com/test_5kAdSbgBb4NjdwcdQQ'><b style={{color:'white'}}>Purchase ₹</b></NavLink></center> 
    </div>
    
  </div>
</div>
      
      <p id="para1" style={{color:"white",marginLeft:'1rem',marginRight:'1rem'}}>As per the Patna High Court judgment in 1948 the temple exists since time immemorial. This temple gained popularity in 1947 with large number of Hindu refugees coming to Patna after the partition of India. Subsequently, temple was rebuilt as a concrete house at same time. Even this was broken down in 1987 to make a huge marble temple. The idol of Sankat-Mochan stands in it
      <br/><h4  style={{color:'white'}}>Dalit Priest</h4>
<p id="para2" style={{color:"white",marginLeft:'1rem',marginRight:'1rem'}}>Since 13 June 1993, Suryavanshi Das, a person from dalit community, became priest of the temple, the decision taken received support from three well known priests—Ramchandra Paramahans, Mahant Avaidyanath of Baba Gorakhnath Dham and Mahant Avadh Kishore Das. {window.a}</p>
      </p>

      <p id="para3" style={{color:"white",marginLeft:'1rem',marginRight:'1rem'}}>
        <br/>
      <h4  style={{color:'white'}}>Ram Rasoi</h4>
Arrangements for free food have been made to the devotees who visit Ramlala at Ram Rasoi.[7] Acharya Kishore Kunal, secretary of the Shri Mahavir Sthan Nyas Samiti,[8] started it on Sunday 1 December 2019. This free food facility functions in the Amava temple just outside the temple of Ramlala, at Amawa Mandir Complex, Ramkot, Ayodhya-224123.[9] Devotees who visit Ramlala at Ram Rasoi get free food between 11:30 am till 3:00 pm every day.
For this, 60 quintals of Govind Bhog shear rice have been sent to Ayodhya.[10] This rice has been sourced from Mokri village in Kaimur (Bihar).[11] The services of Shri Ram's kitchen and Shri Ramlala's bhog will function continuously. There is arrangement of feeding one thousand people daily in the initial phase. After this, based on the increasing number of Ramlala's devotees, food will be arranged for more and more people. 
The increasing popularity of Ram Rasoi can be seen in the expenses visible in the annual reports
      </p>

      
      {/* <NavLink to='MoreDetails' className='className="btn btn-primary"' style={{marginLeft:'1rem',marginRight:'1rem',color:'white'}}>MoreDetails</NavLink> */}
      <center><Link  to="/BiharTourismHome"  ><div className='container' style={{marginBottom:"0.5rem",marginTop:"0.5rem" ,backgroundColor:'blue'}}><b style={{color:"white"}}>Home</b></div></Link></center>
      
      <Outlet />

    <ToastContainer/>
    {/* https://www.youtube.com/watch?v=k70cqeQGrHQ */}
    </div>
  )
}
