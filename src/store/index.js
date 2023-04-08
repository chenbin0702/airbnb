import {configureStore} from '@reduxjs/toolkit'
import entireReducer from './modules/entire'
import homeReducer from './modules/home'
const store=configureStore({
  reducer:{
    home:homeReducer,
    entire:entireReducer
  }
})
export default store