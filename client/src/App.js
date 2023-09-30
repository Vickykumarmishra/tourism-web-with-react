import "./App.css";
import Form from "./component/Form";
import BiharTourismHome from "./component/BiharTourismHome";
import SignUp from "./component/SignUp";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBihar from "./component/NavBihar";
import Footer from "./component/Footer";
import Nalanda from "./component/Nalanda";
import Mahaveer from "./component/Mahaveer";
import Harmandir from "./component/Harmandir";
import MoreDetails from "./component/MoreDetails";
import Landing from "./component/Landing";
import Chatthpuja from "./component/Chatthpuja";
import Rajgir from "./component/Rajgir";
import Gurpa from "./component/Gurpa";
import { motion } from "framer-motion";
function App() {
  return (
    <>
      {/*values should be assigned either in double quotes or curly braces ,ex=> About="About company, title={3n}" */}
      {/* <Navbar   About="About company"/> */}{" "}
      {/*navbar component ko import kiye hai yha par, fir <Navbar/> likhne se yaha navbar component show ho jayega.
     , navbar component ko ha yaha use kar rahe hai ham jo pahle kisi page m already use ho chuka hai, fir component k andar sare information
  or properties same thodi na hoga , yahi par ek concept ka janam hota hai jise ham props k nam se jante hai. maine navbar component k andar
props.title likha hai jisse ye hoga ki ham navbar component k title ko change kar payenge alag alag pages me , sab jagah sam title thodi na hoga'
isi tarah props ka use karke ham component ko asani se kahi v use kar sakte hai aur unme apne jarurat k hisab se koi change v kar sakte hai. */}
      <NavBihar />
      {/*<TextForm/>*/}
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        {/*<NavLink to='/TextForm' className='nvlnk'>feedback_Form / </NavLink>
<Link to='/BiharTourismHome'>Home</Link>*/}

        {/*<Link to='/'><button className="btn btn-outline-success">Go to login page</button></Link>*/}
        {/*we can also make a component for these  links and can use where we want */}

        <Routes>
          <Route path="/" element={<Landing/>}></Route>
          <Route path="/Form" element={<Form/>}></Route>
          {/*by default form page khulega-this is  root route, it means ki hame koi extra url dene ka jarurat nahi padega (http://localhost:3000/TextForm),/TextForm is extra url*/}
          {/*<Route path='/TextForm' element={<TextForm/>}> </Route> */}{" "}
          {/*react ke URL  me '/TextForm 'likhne par textform component vala page khul jayega*/}
          {/**it is mandatory to write route path of every component, otherwise link will not work properly */}
          {/**React Router will render our root route first, which in turn is responsible for rendering its children. */}
          <Route path="/ladddu"></Route>
          <Route path="BiharTourismHome/" element={<BiharTourismHome />}>
            {" "}
          </Route>
          <Route path="Harmandir" element={<Harmandir />}></Route>
          <Route path="/Nalanda" element={<Nalanda />}></Route>
          <Route path="/SignUp" element={<SignUp />}></Route>
          <Route path="Chatthpuja" element={<Chatthpuja />}></Route>
          <Route path="Rajgir" element={<Rajgir />}></Route>
          <Route path="Gurpa" element={<Gurpa />}></Route>
          <Route path="Landing" element={<Landing/>}></Route>
          
          {/* In computer network communications, the HTTP 404, 404 not found, 404, 404 error, 
 page not found or file not found error message is a hypertext transfer protocol standard response code, 
 to indicate that the browser was able to communicate with a given server, but the server could not find what was requested.*/}
          {/**nested routing */}
          <Route path="/Mahaveer/" element={<Mahaveer />}>
            {/* <Route path="MoreDetails" element={<MoreDetails />} /> */}
          </Route>
          <Route
            path="/*"
            element={
              <center>
                <h1 className="namematch">404 error!</h1>
              </center>
            }
          ></Route>
          {/** we may redirect to any page in case of unavailable url request , syntax:->  <Route path='/*' element={<Navigate to='/' />} */}
          {/*  '/*' means ki agar upar ka koi v url agar nahi chalega to ye vala chalega, means agar ham aise url ka request bhejenge jo hamare app m hai hi nahi tab ye vala chalega.
 apart from that ham koi link bana de aur us link ke corresponding koi v page na ho, then us case m v 404 error ayega*/}
        </Routes>
      </BrowserRouter>
      <br></br>
      <Footer />
    </>
  );
}
//curly braces k andar ham javascript use kar sakte hai , jaisa  ki maine upar k code m kiya hai.means ki javascript aur html miljhul k kam kar rahe hai jsx me.
export default App;
//https://www.w3schools.com/react/react_jsx.asp
//unterminated tags nahi hone chahiye jsx me
