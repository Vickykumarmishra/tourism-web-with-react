import React from 'react'
import { BrowserRouter,Link } from 'react-router-dom'

export default function Gurpa() {
  return (
    <div>
      <center>  <h1 style={{color:"white"}}><b>Gurpa Hills</b></h1></center>
     <center> <img src="gurpa_755x450.jpeg" className='img-fluid' alt="..."  style={{marginBottom:"2rem"}}/></center>

      <p id="para10" style={{color:"white",marginLeft:'1rem',marginRight:'1rem'}}>
      Gurpa hill (also known as Kukkutapāda[1] or Gurupādaka) is a Buddhist pilgrimage site located in the Indian state of Bihar, sixteen miles northeast of Bodh Gaya. The mountain is said to be the site where the Buddha's disciple, Mahākāśyapa, is said to have died while waiting for the future Buddha, Maitreya to arrive on earth.[2]

It is also considered to be one of the tallest peaks in the Gangetic plains. There is a rough steep path that leads to the summit. At the top of the mountain is a stupa and a Buddhist temple.[3] Many Buddhist pilgrims including Xuanzang have visited this place.[4]
      </p>


      <center><Link to="/BiharTourismHome"  class="btn btn-danger">Go-To-Home</Link></center>
      

      
    </div>
  )
}
