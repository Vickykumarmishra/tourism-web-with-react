import React from 'react'
import { motion } from 'framer-motion'

export default function ladddu(props) {
  return (
    <div>
      
      <div class="container">
  <div class="row">
     {/*
    <div class="col" >
   <center>  <h3 style={{color:"blue"}}><b>Mahaveer Mandir</b></h3></center>
     <center> <img src="mahavir_mandir_755x450.jpeg" className='img-thumbnail' alt="..."  style={{marginBottom:"2rem"}}/></center>
    </div>*/}

    <div class="col" style={{marginBottom:"2rem"}}>
    <center>  <motion.h3  animate={{scale:1.2}}  transition={{duration:1,repeat:Infinity}} style={{color:"green"}}><b>Order prasad at your home</b></motion.h3></center>
    <center> <img src="laddu.jpg" className='img-thumbnail' alt="..." /></center>
  
    <center>Laddu,Price:100<center/>
    <motion.button    animate={{scale:1.2}}  transition={{duration:0.7,repeat:Infinity}} id="buttn" type='submit'className="btn btn-outline-success"
     onClick={
      ()=>{props.addToCartHandler({price:100,name:'Laddu'})}
      }>
        Add To Cart+</motion.button>
    </center>
    </div>
    
  </div>
</div>

    </div>
  )
}
