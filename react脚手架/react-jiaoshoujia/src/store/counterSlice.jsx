import { createSlice } from '@reduxjs/toolkit'
export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 10
  },
  reducers: {
    increment: state => {
      console.log('increment');
      state.value += 1;
    },
    decrement: state => {
      console.log('decrement');
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    }
  }
})

//导出每一个reducer
export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;