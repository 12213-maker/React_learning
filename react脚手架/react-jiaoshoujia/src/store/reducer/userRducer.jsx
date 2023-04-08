import { createSlice } from "@reduxjs/toolkit";


//这里是创建slice
const uesrSlice = createSlice({
  name: 'uesrSlice',
  initialState: {
    username: '',
    password: ''
  },
  reducers: {
    setUsername: (state, action) => {
      console.log('action接收到了',state.username,action.payload);
      state.username = action.payload;
    }
  }
})

export default uesrSlice.reducer;
export const { setUsername } = uesrSlice.actions;