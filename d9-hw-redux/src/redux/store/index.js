import { configureStore } from '@reduxjs/toolkit'
import favouritesReducer from '../reducers/favourites'

const store = configureStore({
  reducer: {
    favourites: favouritesReducer,
  }
})

export default store
