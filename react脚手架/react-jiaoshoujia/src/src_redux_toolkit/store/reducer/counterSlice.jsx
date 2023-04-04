import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'counterSlice',
  initialState: {
    count: 0
  },
  reducers: {
    //在这里面可以对state进行直接的操作，因为使用了Immer库
    addCounter: (state, action) => {
      state.count += action.payload;
    },
    subCounter: (state, action) => {
      if (state.count === 0) {
        alert('无法再减');
        return;
      }
      console.log('showme');
      state.count -= action.payload;
    }
  }
})

//默认导出这个reducer
export default counterSlice.reducer
//每一个case reducer函数都会生成对应的Action
export const { addCounter, subCounter } = counterSlice.actions;