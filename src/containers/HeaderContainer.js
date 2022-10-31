import NavBihar from '../component/NavBihar'
import {connect} from 'react-redux'
const mapStateToProps=state=>({
    data:state.cardItems  //we are using the data stored inside store in another component by the help of 'mapStateToProps'.
    //state.cardItems karne se cardItems ke andar store hua sara data data ke andar set ho jayega and vo header component me pass ho jayega,props.data ke madhyam se
    
})
const mapDispatchToProps=dispatch=>({
})

export default connect(mapStateToProps,mapDispatchToProps)(NavBihar)
// Note: HeadContainer  NavBihar component k lie bana  hai
//redux:redux use karte time ham direct component ko app.js me import nahi karenge. pahle ham usko container ke andar import karvaenge. fir container sse app.js me import karenge.

//container - ye components ko redux ke sath connect karne ka kam karta hai.