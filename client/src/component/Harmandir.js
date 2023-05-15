import React from 'react'
import { Link } from 'react-router-dom'
export default function Harmandir() {
  return (
<div>
    <center>  <h1 style={{color:"blue"}}>HarMandir</h1></center>
     <center> <img src="Harmandir_Patna_755x450.jpg" className='img-thumbnail' alt="..."  style={{marginBottom:"2rem"}}/></center>

    <div>
     
     <p id="para11" style={{color:"green"}}>Takht Sri Patna Sahib also known as Takhat Sri Harimandir Ji, is a Gurdwara in the neighbourhood of Patna Sahib, India. It was to commemorate the birthplace of Guru Gobind Singh, the tenth Guru of the Sikhs in December 1666.[1][2] It was built by Maharaja Ranjit Singh (1780-1839), the first Maharaja of the Sikh Empire, who also built many other Gurdwaras in the Indian subcontinent. The current shrine of Patna Sahib or Takht Sri Harmandirji Sahib was built in the 1950s
     </p> 
     <center><Link to="/BiharTourismHome"  class="btn btn-danger">Go-To-Home</Link></center>
      
    </div>
    </div>
  )
}
