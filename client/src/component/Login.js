import React from 'react'
import { BrowserRouter,Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function Login() {

  
  return (
    <div >
      <BrowserRouter>
       
       <motion.Link to='/BiharTourismHome'><motion.button animate={{scale:1.2}} transition={{duration:0.7, repeat:Infinity}} type='submit' className="btn btn-outline-success" id="log" onClick={handleSubmit}>Login</motion.button></motion.Link>
    
      </BrowserRouter>
     
    </div>
  )
}
