import React from 'react'
import propTypes from 'prop-types';/* jaha par component banaye hai vahi par proptypes ko import karenge, taki ham types(string, number) specify kar sake 
sare props ka . other than specified type agar koi diffrent value assign hoa hai props me to error ayega */

export default function Navbar(props) {
  return (
      

   // <Navbar title='cvxb'/> ,aise ham kahi dusre component se data Navbar component m  bhej sakte hai props ki help se.
    <nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">{props.About}</a>
        </li>
        
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
/*ctrl+f click karke ham kisi v text ko searxh karke usko edit kar sakte hai . for example jsx me 'class=' ko ham replace karenge by using 
ctrl+f, then replace.  */
  )

  
}

Navbar.propTypes ={
     title: propTypes.string,/* title: propTypes.string.isRequired, agar ham code aise likhenge aur defaultProps nahi likhenge to error ayega
     kyuki aisa karke ham compiler ko bata rahe hai ki ye vala prop khali nahi chhod sakte , isko fill karna hi hoga, otherwise error a jayega.
     agar defaultProps likha hoga to error nahi ayega*/
     About: propTypes.string
    
}
/*agar ham import kiye hue component k andar props k value nahi likhenge to default props chal jayega vaha  */
Navbar.defaultProps ={
    title:"fill your component's tilte here",
    About: " "
}