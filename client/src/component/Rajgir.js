import React from 'react'
import { Link } from 'react-router-dom'
export default function Rajgir() {
  return (
    <div className='container'>
          <center>  <h1 style={{color:"white"}}>Incredible Rajgir</h1></center>
     <center> <img src="raj.jpg" className='img-fluid' alt="..."  style={{marginBottom:"2rem",boxShadow:'1px 1px 2px white, 0 0 25px #149914, 0 0 5px #149914'}}/></center>

      <p id="para9" style={{color:"white"}}  >
      Rajgir, meaning "The City of Kings," is a historic town in the district of Nalanda in Bihar, India. As the ancient seat and capital of the Haryanka dynasty, the Pradyota dynasty, the Brihadratha dynasty and the Mauryan Empire, as well as the dwelling ground of such historical figures as The Buddha and The Mahavira, the city holds a place of prominence in Hindu, Buddhist and Jain scriptures. As of 2011, the population of the town was reported to be 71,459 while the population in the community development block was about 88,500.

Rajgir was the first capital of the ancient kingdom of Magadha, a state that would eventually evolve into the Mauryan Empire.[3] It finds mention in India's renowned literary epic, the Mahabharata, through its king Jarasandha. The town's date of origin is unknown, although ceramics dating to about 1000 BC have been found in the city. The 2,500-year-old cyclopean wall is also located in the region.

The town is also notable in Jainism and also in  Buddhism.[4] It was the birthplace of the 20th Jain Tirthankar Munisuvrata, and is closely associated with the Mahavira and Gautama Buddha.[5] Both Mahavira and Buddha taught their beliefs in Rajgir during the 6th and 5th century BC, and the Buddha was offered a forest monastery here by the king Bimbisara. As such, the city of Rajgir became one of the Buddha's most important preaching locations.

The ancient Nalanda university was located in the vicinity of Rajgir, and the contemporary Nalanda University named after it was founded in 2010 nearby. The town is also famed for its natural springs and towering hills that dominate the landscape.
      </p>
      <center><Link  to="/BiharTourismHome"  ><div className='container' style={{marginBottom:"0.5rem",marginTop:"0.5rem" ,backgroundColor:'blue'}}><b style={{color:"white"}}>Home</b></div></Link></center>
      
    </div>
      
    
  )
}
