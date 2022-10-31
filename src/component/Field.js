import React,{useState} from "react";
import propTypes from 'prop-types';



export default function Field() {

    function updateOnChange(event){
        console.log(event.target.value);
         setText(event.target.value);
    }
   function updateOnClick (){
   
setText(text.toLowerCase());

    }
    const [text, setText]=useState('');
  return (


    
  

<>
<div className="mb-3">
  <label for="exampleFormControlTextarea1" className="form-label">Example textarea</label>
  <textarea className="form-control" id="exampleFormControlTextarea1" value={text} onChange={updateOnChange} rows="8"></textarea> 
  {/*in above line react will pass the event object to the function, it has all the information regarding input event */}
</div>
   <button onClick={updateOnClick}>lowercase</button>
</>

  )
}

