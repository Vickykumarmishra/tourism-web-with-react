import React,{useState} from "react";



export default function HideShow() {
   const [head,setHead]=useState(true);//head is a state variable whose default value is true, means by default it will be visible.

   function hideonclick(){
    setHead(false)
   }
  return (
   <div>
       
      {/*
      {
      head?<h1>vicky kumar mishra</h1>:null
      
       } 
       
      


/*don't forget to put this conditional operator inside curly braces 
      <button onClick={hideonclick}>Hide</button>
    */}
    </div>
  )
}
