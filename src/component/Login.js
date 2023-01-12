import React from 'react'
import { BrowserRouter,Link } from 'react-router-dom'

export default function Login() {
  return (
    <div>
      <BrowserRouter>
       
       <Link to='/BiharTourismHome'><button type='submit' className="btn btn-outline-success" id="log">Login</button></Link>
    
      </BrowserRouter>
     
    </div>
  )
}
