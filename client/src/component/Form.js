
import React from "react";
import { useState } from "react";
import {  Link, NavLink } from "react-router-dom";
import { motion } from "framer-motion"
import Swal from "sweetalert2";
import { useNavigate } from 'react-router-dom';
import useSound from "use-sound";
import {VscFeedback} from 'react-icons/vsc'

import { useFormik } from 'formik'
import * as yup from "yup";
import { signUpSchema } from '../schema/Index'

import { Player, Controls } from '@lottiefiles/react-lottie-player';

const initialValues={

  name:"",
  email:"",
  comment:"",
  }

export default function Form(){

  function handleClick(e){

    e.preventDefault(); // Prevent the default form submission behavior
     
    // let named = document.getElementById("name").value;
    // let emailed = document.getElementById("email").value;
    // let commented = document.getElementById("comment").value;
    const { name, email, comment } = values;
    setName(name);
    setEmail(email);
    setAdd(comment);
    const url="https://tourism-web-with-react-zf8g.vercel.app/posst"
      if(name==''||email==''||comment==''){
  
        play();
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'All fields must be filled!',
          
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
  
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [comment, setAdd] = useState("");

  const [play]=useSound("error.mp3");
  const navigate = useNavigate();
  
  const {values,errors,touched,handleBlur,handleChange,handleSubmit}=useFormik({
    initialValues:initialValues,
    validationSchema:signUpSchema,
    onSubmit:(values,action)=>{
     
    action.resetForm();
    }
    
    })
  

    
       
//}
   return (
    
    <>
   <center><motion.div className="container shadow p-3 mb-5 bg-body-tertiary rounded" >
    
   <h1 style={{marginTop:'0.5rem' ,color:'white',textShadow: '1px 1px 2px black, 0 0 25px white 0 0 5px white'}}>
      <VscFeedback/> <b>Feedback</b>
      </h1>
    <motion.div
      className="container"
      style={{
        border: "0.1rem solid white",
        width: "15rem",
        marginTop: "2rem",
        borderRadius:"0.5rem",boxShadow:'1px 1px 2px white, 0 0 25px white, 0 0 5px white'
      }}  
    >
      

      
      <Player
  autoplay
  loop
  src="https://lottie.host/0c8df0c1-439f-4bbf-a6d0-3c0fd9889323/UkUFs0ozXX.json"
  style={{ height: '8rem', width: '10rem' ,marginTop:"0rem",padding:'0rem'}}
>
  {/* <Controls visible={true} buttons={['play', 'repeat', 'frame', 'debug']} /> */}
</Player>


      <form onSubmit={handleSubmit} style={{color:'white'}}>
        {/* <p>Write your name</p> */}
        <motion.input
          name="name"
          id="name"
          placeholder="Enter your full name"
          value={values.name} onChange={handleChange} onBlur={handleBlur} 
          style={{ width: "12rem" ,borderRadius:'0.5rem'}}  whileHover={{scale:1.1}}
        />
        <br /> <br />
        {errors.name && touched.name?(<p  style={{color:'red'}}className='form-error'>{errors.name}</p>):null}
        {/* <p>Write your email</p> */}
        <motion.input
          name="email"
          id="email"
          placeholder="Enter your EmailId"
          value={values.email} onChange={handleChange} onBlur={handleBlur} 
          style={{ width: "12rem",borderRadius:'0.5rem' }} whileHover={{scale:1.1}}
        />
        <br />
        <br />
        {errors.email && touched.email?(<p  style={{color:'red'}}className='form-error'>{errors.email}</p>):null}
      {/* <p style={{marginLeft:"0.5rem"}}>write down your Comment below:</p>  */}
        <motion.textarea
         
          name="comment"
          id="comment"
          placeholder="comment here"
          value={values.comment} onChange={handleChange} onBlur={handleBlur} 
          style={{ width: "13rem" ,borderRadius:'0.5rem'}} whileHover={{scale:1.1}}
        />
        <br />
        <br />
        {errors.comment && touched.comment?(<p  style={{color:'red'}}className='form-error'>{errors.comment}</p>):null}
   <center><motion.button whileHover={{scale:1.1}} type="submit" className="btn btn-danger" style={{ backgroundColor: "blue",color:'white', marginBottom: "1rem"}} onClick={handleClick} ><b>Submit{" "}</b> </motion.button></center> 
      </form>
    </motion.div>
       
<div>

</div>

<NavLink to="/BiharTourismHome"><center><div className="container" style={{backgroundColor:'lightgreen',width:'15rem',marginTop:'1rem'}}><center><b>Go Home</b></center></div></center></NavLink>
       </motion.div></center> 

       
       </>

   )
        }


/*useEffect :https://www.w3schools.com/react/react_useeffect.asp */
/*react */