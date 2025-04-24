import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [], //array of {id, title,price, quantity, image}
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const itemInCart = state.items.find(item => item.id === action.payload.id);
      if (itemInCart) {
        itemInCart.quantity++;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
    increaseQuantity: (state, action) => {
      const item = state.items.find(item => item.id === action.payload);
      if (item) item.quantity++;
    },
    decreaseQuantity: (state, action) => {
      const item = state.items.find(item => item.id === action.payload);
      if (item && item.quantity > 1) {
        item.quantity--;
      } else {
        state.items = state.items.filter(item => item.id !== action.payload);
      }
    },
    clearCart: (state, action) => {
      state.items = [];
    }
  },
})

// Action creators are generated for each case reducer function
export const {
  addToCart,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
  clearCart
} = cartSlice.actions;
export default cartSlice.reducer;