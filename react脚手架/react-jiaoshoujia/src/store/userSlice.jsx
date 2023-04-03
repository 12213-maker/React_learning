import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: 'userSlice',
  initialState: {
    username: 'lnl',
    age: '21',
    sex: 'female'
  },
  reducers: {
    changeUserInfo: (state, action) => {
      console.log(action);
    }
  }
})

//这里导出的是actions
export const { changeUserInfo } = userSlice.actions;
//导出userinfo.reducer
export default userSlice.reducer;
