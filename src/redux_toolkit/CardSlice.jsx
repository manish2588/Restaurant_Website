import { createSlice } from "@reduxjs/toolkit";

export const CartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
  },
  reducers: {
    add_to_cart: (state, action) => {
      const exists = state.cart.find((item) => item.name === action.payload.name);
      if (!exists) {
        state.cart.push(action.payload);
        
      }
    },
    delete_item:(state,action)=>{
        state.cart = state.cart.filter((item) => item.id !== action.payload);

    }
  },
});

// Export the action
export const { add_to_cart ,delete_item} = CartSlice.actions;

// Export the reducer
export default CartSlice.reducer;
