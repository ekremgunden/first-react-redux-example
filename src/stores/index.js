import { configureStore } from '@reduxjs/toolkit'

import basketReducer from './basket/basketSlice'

export default configureStore({
  reducer: {
      basket: basketReducer
  }
})