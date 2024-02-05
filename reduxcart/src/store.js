import { configureStore } from "@reduxjs/toolkit";
import productReducer from './CartSlice'
const store=configureStore({
    reducer:{
        cart:productReducer
    }
})
export default store