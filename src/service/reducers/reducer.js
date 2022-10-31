import { ADD_TO_CART } from '../constants'
const initialState = {
    cardData: []//action k andar vala addToCart function jab call hoga to vaha se jo data ayega vo iske andar save ho jayega.
}
export default function cardItems(state = [], action) {//function ka name kuch v ho sakta hai
    switch (action.type) {
        case ADD_TO_CART:
             console.warn("reducer",action)
            return [
                ...state,//state ke andar jo pahle data tha vo, then
                {cardData: action.data}//cardData ke andar action ka data ko fix kar diye 
            ]
        default:
            return state
    }


}
//action tells what to do, whereas reducer tells how to do.