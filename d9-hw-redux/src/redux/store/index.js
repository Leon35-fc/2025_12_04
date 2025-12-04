import { configureStore } from '@reduxjs/toolkit'
import favouritesReducer from '../reducers/favourites'

const store = configureStore({
  reducer: {
    favourite: favouritesReducer,
  }
})

export default store
