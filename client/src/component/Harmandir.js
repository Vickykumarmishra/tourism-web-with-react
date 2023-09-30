import React from 'react'
import { Link } from 'react-router-dom'
export default function Harmandir() {
  return (
<div>
    <center>  <h1 style={{color:"white"}}>HarMandir</h1></center>
     <center> <img src="Harmandir_Patna_755x450.jpg" className='img-fluid' alt="..."  style={{marginBottom:"2rem",boxShadow:'1px 1px 2px white, 0 0 25px white, 0 0 5px white'}}/></center>

    <div className='container'>
     
     <p id="para11" style={{color:"white",marginLeft:'1rem',marginRight:'1rem'}}>Takht Sri Patna Sahib also known as Takhat Sri Harimandir Ji, is a Gurdwara in the neighbourhood of Patna Sahib, India. It was to commemorate the birthplace of Guru Gobind Singh, the tenth Guru of the Sikhs in December 1666.[1][2] It was built by Maharaja Ranjit Singh (1780-1839), the first Maharaja of the Sikh Empire, who also built many other Gurdwaras in the Indian subcontinent. The current shrine of Patna Sahib or Takht Sri Harmandirji Sahib was built in the 1950s
     </p> 
     <center><Link  to="/BiharTourismHome"  ><div className='container' style={{marginBottom:"0.5rem",marginTop:"0.5rem" ,backgroundColor:'blue'}}><b style={{color:"white"}}>Home</b></div></Link></center>
    </div>
    </div>
  )
}
