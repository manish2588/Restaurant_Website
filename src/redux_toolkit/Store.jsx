
import { configureStore } from "@reduxjs/toolkit";

import cartReducer from "../redux_toolkit/CardSlice"; 

export const store= configureStore({
  reducer: {
    cart: cartReducer, 
  },
});

export default store; 
