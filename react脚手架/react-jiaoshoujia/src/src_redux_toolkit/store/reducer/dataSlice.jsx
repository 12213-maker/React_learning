import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const dataSlice = createSlice({
  name: 'dataSlice',
  initialState: {
    dataValue: []
  },
  reducers: {
    setData: (state, action) => {
      state.dataValue = action.payload;
    }
  }
})

//使用createAsyncThunk创建异步更新action
export const fetchData = createAsyncThunk('fetchData', async () => {
  const res = await axios({ url: "http://123.207.32.32:8000/home/multidata" });
  console.log(res, 'fetchData');
  return res;
})

export default dataSlice.reducer;
//这里导出的是actions而不是reducer
export const { setData } = dataSlice.actions;