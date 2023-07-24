
import React from "react";
import { useState } from "react";
import {  Link, NavLink } from "react-router-dom";
import { motion } from "framer-motion"

import { useNavigate } from 'react-router-dom';


export default function Form(){
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [passw, setPass] = useState("");
  const navigate = useNavigate();
  
  function handleName() {

    let named = document.getElementById("name").value;
    let emailed = document.getElementById("email").value;
    let password = document.getElementById("passwords").value;
    setName(named);
    setEmail(emailed);
    setPass(password);

  }

  function handleSubmit(event) {
    event.preventDefault(); // Prevent the default form submission behavior

    const url="https://lazy-pink-goshawk-ring.cyclic.app/posst"

    if(name==''||email==''||passw==''){
      alert('Please fill all the details before submission!')
    }
    else if(name!=''||email!=''||passw!=''){
      fetch(url, {
        method: "POST",
        //mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
          
        },
        body: JSON.stringify({ name, email, passw }),
        
      })
        .then(() => {
          console.log("Data updated successfully");
        })
        .catch((error) => {
          console.error("Error updating data:", error);
        });
        alert('data saved to database successfully')   
        navigate('/BiharTourismHome'); 
    }
  
  
    
       
}
   return (
    
   <center><div className="container shadow p-3 mb-5 bg-body-tertiary rounded" >
    
        
    <div
      className="container"
      style={{
        border: "0.1rem solid #149914",
        width: "20rem",
        marginTop: "2rem",
        borderRadius:"0.5rem"
      }}
    >
      <h1 style={{ marginBottom: "2rem" ,color:'#149914'}}>
        <b>Login Page</b>
      </h1>
      <form onSubmit={handleSubmit} style={{color:'#149914'}}>
        Name :
        <input
          name="name"
          id="name"
          onChange={handleName}
          style={{ width: "12rem" }}
        />
        <br /> <br />
        Email :
        <input
          name="email"
          id="email"
          onChange={handleName}
          style={{ width: "12rem" }}
        />
        <br />
        <br />
        Password:
        <input
          type="password"
          name="password"
          id="passwords"
          onChange={handleName}
          style={{ width: "11rem" }}
        />
        <br />
        <br />
    <button type="submit" className="btn btn-danger" style={{ backgroundColor: "#149914", marginBottom: "1rem", marginLeft: "2rem"}} >Submit{" "}</button>
      </form>
    </div>
       
       
       </div></center>  
   )
        }


/*useEffect :https://www.w3schools.com/react/react_useeffect.asp */
/*react */