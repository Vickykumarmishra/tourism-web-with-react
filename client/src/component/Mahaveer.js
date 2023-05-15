import React from 'react'
import { NavLink, Link,Outlet } from 'react-router-dom'
import ladddu from './ladddu'
import HomeContainer from '../containers/HomeContainer'
export default function Mahaveer(props) {
  return (
    <div>

<HomeContainer/>

      
      <p id="para1" style={{color:"green"}}>As per the Patna High Court judgment in 1948 the temple exists since time immemorial. This temple gained popularity in 1947 with large number of Hindu refugees coming to Patna after the partition of India. Subsequently, temple was rebuilt as a concrete house at same time. Even this was broken down in 1987 to make a huge marble temple. The idol of Sankat-Mochan stands in it
      <br/><h4  style={{color:'green'}}>Dalit Priest</h4>
<p id="para2" style={{color:"green"}}>Since 13 June 1993, Suryavanshi Das, a person from dalit community, became priest of the temple, the decision taken received support from three well known priests—Ramchandra Paramahans, Mahant Avaidyanath of Baba Gorakhnath Dham and Mahant Avadh Kishore Das. {window.a}</p>
      </p>

      <p id="para3" style={{color:"green"}}>
        <br/>
      <h4  style={{color:'green'}}>Ram Rasoi</h4>
Arrangements for free food have been made to the devotees who visit Ramlala at Ram Rasoi.[7] Acharya Kishore Kunal, secretary of the Shri Mahavir Sthan Nyas Samiti,[8] started it on Sunday 1 December 2019. This free food facility functions in the Amava temple just outside the temple of Ramlala, at Amawa Mandir Complex, Ramkot, Ayodhya-224123.[9] Devotees who visit Ramlala at Ram Rasoi get free food between 11:30 am till 3:00 pm every day.
For this, 60 quintals of Govind Bhog shear rice have been sent to Ayodhya.[10] This rice has been sourced from Mokri village in Kaimur (Bihar).[11] The services of Shri Ram's kitchen and Shri Ramlala's bhog will function continuously. There is arrangement of feeding one thousand people daily in the initial phase. After this, based on the increasing number of Ramlala's devotees, food will be arranged for more and more people. The increasing popularity of Ram Rasoi can be seen in the expenses visible in the annual reports
      </p>

      
      <NavLink to='MoreDetails' className='className="btn btn-primary"'>MoreDetails</NavLink>
      <center><Link to="/BiharTourismHome"  class="btn btn-danger">Go-To-Home</Link></center>
      
      <Outlet />

    
    </div>
  )
}
