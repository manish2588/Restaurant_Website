import { createSlice } from "@reduxjs/toolkit";

export const CartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
    orderQuantity:1
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

    },
    inc_quantity:(state)=>{
      state.orderQuantity+=1;
    },
    dec_quantity:(state)=>{
      state.orderQuantity=Math.max(1,state.orderQuantity-1);
    },
    quantity_zero:(state)=>{
      state.orderQuantity=1;
    }
  },
});

// Export the action
export const { add_to_cart ,delete_item,inc_quantity,dec_quantity,quantity_zero} = CartSlice.actions;

// Export the reducer
export default CartSlice.reducer;
