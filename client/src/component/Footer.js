import React from 'react'

export default function Footer() {
  return (
   
      
<center><div className='container-fluid' style={{width:"100%"}}>
  
  <footer
          className="text-center text-lg-start text-white  " 
          style={{backgroundColor:"dark",boxShadow:'1px 1px 2px white, 0 0 25px white, 0 0 5px white'}}
          >
   

    <div className="container p-4 pb-0"  id='myfoot' style={{width:'100%'}}>
      
      <section>
       
        <div className="row" style={{width:'100%'}}>
          
          <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
            <h6  className="text-uppercase mb-4 font-weight-bold">
              <i>Bihar Tourism</i>
            </h6>
            <p id="para4">
              From its bustling cities to tranquil wilderness, Bihar has something for everyone. Visit this culturally rich and diverse state of India.
            </p>
          </div>
          

          <hr className="w-100 clearfix d-md-none" />

          <hr className="w-100 clearfix d-md-none" />

         
          <hr className="w-100 clearfix d-md-none" />

         
          <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
            <h6 className="text-uppercase mb-4 font-weight-bold">Contact</h6>
            <p id="para5"><i className="fas fa-home mr-3"></i> Patna, Bihar, India</p>
            <p id="para6"><i className="fas fa-envelope mr-3"></i> info@gmail.com</p>
            <p id="para7"><i className="fas fa-phone mr-3"></i> + 01 234 567 88</p>
            <p id="para8"><i className="fas fa-print mr-3"></i> + 01 234 567 89</p>
          </div>
         
         
          <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
            <h6 className="text-uppercase mb-4 font-weight-bold">Follow us</h6>

           
            <a
               className="btn btn-primary btn-floating m-1"
               style={{backgroundColor: "#3b5998"}}
               href="https://www.facebook.com/r.php?nis=8"
               role="button"
               ><i className='fa fa-facebook-f'></i
              ></a>

              
            <a
               className="btn btn-primary btn-floating m-1"
               style={{backgroundColor: "#55acee"}}
               href="https://twitter.com/i/flow/login"
               role="button"
               ><i className='fa fa-twitter'></i
              ></a>

            
            <a
               className="btn btn-primary btn-floating m-1"
               style={{backgroundColor: "#dd4b39"}}
               href="https://www.google.com/"
               role="button"
               ><i className="fa fa-google"></i
              ></a>

           
            <a
               className="btn btn-primary btn-floating m-1"
               style={{backgroundColor: "#ac2bac"}}
               href="https://www.instagram.com/accounts/login/"
               role="button"
               ><i className="fa fa-instagram"></i>
              </a>

           
            <a
               className="btn btn-primary btn-floating m-1"
               style={{backgroundColor: "#0082ca"}}
               href="https://www.linkedin.com/login"
               role="button"
               ><i className="fa fa-linkedin"></i
              ></a>
           
            <a
               className="btn btn-primary btn-floating m-1"
               style={{backgroundColor: "#333333"}}
               href="https://github.com/login"
               role="button"
               ><i className="fa fa-github"></i
              ></a>
          </div>
        </div>
       
      </section>
      
    </div>
    
   
   
  </footer>
  
</div>
</center>
   
  )
}
