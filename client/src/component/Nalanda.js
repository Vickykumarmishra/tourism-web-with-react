import React from 'react'
import { Link } from 'react-router-dom'
export default function Nalanda() {
  return (
    <div>
      <center><h3 style={{color:"white"}}>Ruins Of Nalanda</h3></center>

      <center><img src="nalanda-bihar_755x450.jpg" style={{marginBottom:"2rem",boxShadow:'1px 1px 2px white, 0 0 25px white, 0 0 5px white'}} className='img-fluid' alt="..."/></center>
      <p id="para9" style={{color:"white",marginLeft:'1rem',marginRight:'1rem'}}>

      Nalanda is about 90 km southeast of Patna. Although its history goes back to the times of the Buddha, the university at Nalanda was founded in the 5th century CE, and it flourished for the next 700 years.
       Its decline began in the late Pala period, but the final blow was the invasion by Bakhtiyar Khilji around 1200 CE. The subjects that were taught at Nalanda included Buddhist scriptures (of both the Mahayana and Hinayana schools), philosophy, theology, metaphysics, logic, grammar, astronomy and medicine. Chinese travellers Hiuen-Tsang and I-Tsing had written detailed accounts about the university.

      </p>
      <center><Link to="/BiharTourismHome"  class="btn btn-danger">Go-To-Home</Link></center>
      
    </div>
  )
}
