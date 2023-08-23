import { createSlice } from "@reduxjs/toolkit";

const initialStateValue={
    cart:0,
}

export const cartSlice=createSlice({
    name:'cartbox',
    initialState:initialStateValue,
    reducers:{

        increment:(state)=>{
            state.cart+=1
        },

        decrement:(state)=>{
            if(state.cart!=0){
            state.cart-=1}
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload
          },
    },
})

export const {increment,decrement,incrementByAmount }=cartSlice.actions
export default cartSlice.reducer