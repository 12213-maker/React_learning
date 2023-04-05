import { configureStore } from '@reduxjs/toolkit'
import counterSlice from './reducer/counterSlice'
import dataSlice from './reducer/dataSlice'

export const store = configureStore({
  reducer: {
    //定义一个字段，用counterSlice中的reducer处理这个字段状态中的所有更新
    count: counterSlice,
    dataState: dataSlice
  }
})