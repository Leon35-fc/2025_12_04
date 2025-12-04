import { configureStore } from '@reduxjs/toolkit'
import mainReducer from '../reducers/favourites'

const store = configureStore({
  reducer: {
    favourites: mainReducer,}
})

export default store
