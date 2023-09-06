
import React from "react";
import { useState } from "react";
import {  Link, NavLink } from "react-router-dom";
import { motion } from "framer-motion"
import Swal from "sweetalert2";
import { useNavigate } from 'react-router-dom';
import useSound from "use-sound";
import {VscFeedback} from 'react-icons/vsc'
export default function Form(){
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [comment, setAdd] = useState("");

  const [play]=useSound("error.mp3");
  const navigate = useNavigate();
  
  function handleName() {

    let named = document.getElementById("name").value;
    let emailed = document.getElementById("email").value;
    let commented = document.getElementById("comment").value;
    setName(named);
    setEmail(emailed);
    setAdd(commented);

  }

  function handleSubmit(event) {
    event.preventDefault(); // Prevent the default form submission behavior

  const url="https://panicky-fawn-trunks.cyclic.app/posst"
    if(name==''||email==''||comment==''){

      play();
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'some details are missing!',
        footer: '<a href="">Why do I have this issue?</a>'
      })
    }
    else if(name!=''||email!=''||comment!=''){
      fetch(url, {
        method: "POST",
        //mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
          
        },
        body: JSON.stringify({ name, email, comment }),
        
      })
        .then(() => {
          console.log("Data updated successfully");
        })
        .catch((error) => {
          console.error("Error updating data:", error);
        });
       
        Swal.fire(
          'saved',
          'Your information saved to database!',
          'success'
        )

        // navigate('/BiharTourismHome'); 
    }
  
  
    
       
}
   return (
    
   <center><motion.div className="container shadow p-3 mb-5 bg-body-tertiary rounded" >
    
        
    <motion.div
      className="container"
      style={{
        border: "0.1rem solid white",
        width: "20rem",
        marginTop: "2rem",
        borderRadius:"0.5rem",boxShadow:'1px 1px 2px white, 0 0 25px white, 0 0 5px white'
      }}   whileHover={{scale:1.1}}
    >
      <h1 style={{ marginBottom: "2rem",marginTop:'1rem' ,color:'white',textShadow: '1px 1px 2px black, 0 0 25px white 0 0 5px white'}}>
      <VscFeedback/> <b>Feedback</b>
      </h1>
      <form onSubmit={handleSubmit} style={{color:'white'}}>
        Name :
        <motion.input
          name="name"
          id="name"
          onChange={handleName}
          style={{ width: "12rem" ,borderRadius:'0.5rem'}}  whileHover={{scale:1.1}}
        />
        <br /> <br />
        Email :
        <motion.input
          name="email"
          id="email"
          onChange={handleName}
          style={{ width: "12rem",borderRadius:'0.5rem' }} whileHover={{scale:1.1}}
        />
        <br />
        <br />
      <p style={{marginLeft:"1.5rem"}}>write down your Comment below:</p> 
        <motion.textarea
         
          name="comment"
          id="comment"
          onChange={handleName}
          style={{ width: "14rem" ,borderRadius:'0.5rem',marginLeft:"2.4rem"}} whileHover={{scale:1.1}}
        />
        <br />
        <br />
    <motion.button whileHover={{scale:1.1}} type="submit" className="btn btn-danger" style={{ backgroundColor: "white",color:'black', marginBottom: "1rem", marginLeft: "2rem"}} ><b>Submit{" "}</b></motion.button>
      </form>
    </motion.div>
       
       
       </motion.div></center>  
   )
        }


/*useEffect :https://www.w3schools.com/react/react_useeffect.asp */
/*react */