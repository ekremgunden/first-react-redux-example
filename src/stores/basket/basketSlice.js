import { createSlice } from '@reduxjs/toolkit'

export const basketSlice = createSlice({
  name: 'basket',
  initialState: {
    cart: []
  },
  reducers: {
    addBasket: (state, action) => {
      state.cart = [...state.cart,action.payload]
    },
    removeBasket: (state, action) => {
      const nextCartItems = state.cart.filter(
        cart => cart.id !== action.payload.id
      )

      state.cart = nextCartItems;
    }
  }
})

// Action creators are generated for each case reducer function
export const { addBasket, removeBasket } = basketSlice.actions

export default basketSlice.reducer