import { configureStore } from "@reduxjs/toolkit";
import uesrSlice from './reducer/userRducer.jsx'

export const store = configureStore({
  reducer: {
    user: uesrSlice
  }
})