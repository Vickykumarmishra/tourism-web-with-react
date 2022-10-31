
import React from "react";
import {  Link } from "react-router-dom";
import {useFormik} from 'formik'; //install formik before starting
import * as Yup from 'yup'
window.a=0//global declaration,isko kahi v likhenge to ye global hi kahlayega
const Form = () => {
  
  //console.log(window.a+'is value of a before onsubmit')
  const formik= useFormik({
    initialValues: {
    firstName:'',
    lastName:'',
    password:'',
    email:'',
    },

    validationSchema:Yup.object({
firstName:Yup.string().max(10,'firstName must be less than equal to 10 characters')
.required('this is required field'),

password:Yup.string().min(6,'password must be of atleast 6 digit ')
.required('password is required'),

email:Yup.string()
.email('please fill valid email')
.required("this field is required"),


    }),
   
    onSubmit:(values)=>{//onsubmit has access to form's values
      //console.log('value of a inside onsubmit='+ window.a);
      console.log("form submitted",values);
       window.a=1
      //console.log('value of a inside onsubmit='+window.a);
      window.b=1
      //console.log(window.b);
      
    },
    
    
  });
  //console.log('value of a outside ='+ window.a); 

  console.log(formik.errors)
   return (
    


     
     <div className="container">
        
       <form  className="btn btn-outline-success" style={{backgroundColor:"black"}} onSubmit={formik.handleSubmit}>

       <div class="input-group">
  <span class="input-group-text">First and last name</span>
  <input type="text" aria-label="First name" class="form-control" name='firstName' onChange={formik.handleChange} value={formik.values.firstName}/> {/**jaise jaise input dalenge vo update hota jayega */}
  <br/>
  <input type="text" aria-label="Last name" class="form-control" name='lastName' onChange={formik.handleChange} value={formik.values.lastName}/>  {/**jaise jaise input dalenge vaise vaise value update hota jayega */}
  
</div>
{formik.errors.firstName && <p style={{color:'red'}}> {formik.errors.firstName}</p>}     
        <br/>

        <div class="mb-3">
  <label for="exampleFormControlInput1" className="form-label">Email address</label>
  <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" name='email' onChange={formik.handleChange} value={formik.values.email}/>
</div>
{formik.errors.email && <p style={{color:'red'}}> {formik.errors.email}</p>}     
        <div class="mb-3 row">
    <label for="inputPassword" class="col-sm-2 col-form-label">Password</label>
    <div class="col-sm-10">
      <input type="password" class="form-control" id="inputPassword" name='password' onChange={formik.handleChange}  value={formik.values.password}/>
    </div>
  </div>
  {formik.errors.password && <p style={{color:'red'}}> {formik.errors.password}</p>}     
        
      <br></br>
      {
     window.a==0?<button type='submit' className="btn btn-outline-success"  >SaveData</button>:<h1></h1>
      }
 
      {
    
        window.b==1?<Link to='/BiharTourismHome' > <button type='button' className="btn btn-outline-success" >Login</button></Link>:<h1></h1>
        //back karke dobara is login page par ayenge to a ka value
        
      }
  
  
   
      {/*we cannot use className with Link, to use className we will write 'Navlink' in place of Link */}
       </form>
       {/*we should not import browse,Link,Route etc , unless and until we have to use. */}
      
       
       
       </div>
   )
 }
 export default Form;

/*useEffect :https://www.w3schools.com/react/react_useeffect.asp */