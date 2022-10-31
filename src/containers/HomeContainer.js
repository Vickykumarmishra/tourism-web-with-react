import ladddu from '../component/ladddu'
import {connect} from 'react-redux'/**react and redux ko connect karega ye container file*/
import {addToCart} from '../service/actions/actions' // addToCart action ko import kiye
// it is not compulsory that ki ham ek hi action ya ek hi component import kare , ek se jyada v import kar sakte hai
const mapStateToProps=state=>({//store k andar jo data components se gaya hai , us data ko agar kahi aur use karna hai to mapStateToProps ka use karenge.
     data:state.cardItems
})
const mapDispatchToProps=dispatch=>({
    addToCartHandler:data=>dispatch(addToCart(data))//jab ham apne component m se data bhejenge redux store me,tab ham  mapDispatchToProps ka use karenge
          //addToCartHandler will be called on click event and a data will recieved and then passed to addTocart
          //here addToCart is the function of action, it will pass the data of the component to reducers, then reducer will pass it to the store.
          // ab jo data store m chala gaya uska use v to kar sakte h kahi dusre component  m ? iske liye ham use karte hai mapStateToProps ka.
          //mapStateToProps and mapDispatchToProps ka jagah ham kuch v rakh sakte hai , like x or y.
})
export default connect(mapStateToProps,mapDispatchToProps)(ladddu)
//Note: HomeConatiner  ladddu component k liye hai

