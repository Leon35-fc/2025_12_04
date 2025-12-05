import { configureStore } from '@reduxjs/toolkit'
import favReducer from '../reducers/favReducer'

const store = configureStore({
  reducer: {
    favourite: favReducer,
  }
})

export default store
