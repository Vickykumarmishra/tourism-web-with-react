import {combineReducers} from 'redux'
import cardItems from './reducer'

export default combineReducers({
    cardItems,// aur v reducers hote to coma de dekar yaha likhte jate.
})

//in complex application , may be there will be so many reducers, so we will combine all reducers into root reducer.
//this file index.js is a root reducer file.