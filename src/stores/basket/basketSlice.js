import { createSlice } from '@reduxjs/toolkit'

export const basketSlice = createSlice({
  name: 'basket',
  initialState: {
    cart: []
  },
  reducers: {
    addBasket: (state, action) => {
      state.cart = [...state.cart,action.payload]
    }
  }
})

// Action creators are generated for each case reducer function
export const { addBasket } = basketSlice.actions

export default basketSlice.reducer