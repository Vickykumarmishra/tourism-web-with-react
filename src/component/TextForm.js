import React, {useState} from 'react'


export default function TextForm(props) {
    const handleUpClick = ()=>{
  
        setText(text.toUpperCase())
    }

    const handleOnChange = (event)=>{
    
        console.log(event.target.value)
        setText(event.target.value)//setText will update the changes in text(state variable) 

 /*event.target gives you the element that triggered the event.So, event.target.value retrieves the value of that element (an input field, in your example). */

/*In the example above, the handleChange() function will be called every time the onchange event occurs for the <input> element.

The event object passed into the handleChange() function contains all the detail about the input event.
Every time the onChange event is triggered, React will pass the event argument into the function */
    }
/*to update the data in react we cannot simply do it by using variables , react have completely different approach, that approach is called 'state'.*/

/*The state is a built-in React object that is used to contain data or information about the component. A component’s state can change over time; whenever it changes,
the component re-renders(fir se component ko execute karega aur value update kar dega vaha ). 
The change in state can happen as a response to user action or system-generated events and these changes determine the behavior of the component and how it will render.*/

    const [text, setText] = useState('Enter text here:'); 
    const [textarea, setTextarea] = useState(true); 
    // text = "new text"; // Wrong way to change the state
    // setText("new text"); // Correct way to change the state
    function hideonclick(){
        setTextarea(false);
    }

    function showonclick(){
        setTextarea(true);
    }
    return (
        <div> 
            <h1>{props.heading}</h1>
            <div className="mb-3"> 
            {
           textarea ?<textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>:null

             }

             {
                
             }
            </div>
            <button className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary" onClick={hideonclick} >hide this input-box</button>
            <button className="btn btn-primary"onClick={showonclick}>show again</button>
        </div>
    )
} 