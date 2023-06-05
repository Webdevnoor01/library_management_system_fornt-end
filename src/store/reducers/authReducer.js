import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../api";

export const login = createAsyncThunk(
  "auth/login",
  async (payload, { rejectWithValue, fulfillWithValue }) => {
    try {
      const { data } = await api.post("/libAdmin/login", payload, {
        withCredentials: true,
      });
      console.log("data: ", data)
      if(data.errors){
        return rejectWithValue(data)
      }
     return fulfillWithValue(data)
      
    } catch (error) {
      // console.log("error:",error.response.data.errors);
      return rejectWithValue(error.response.data.errors.login.msg)
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState: {
    errorMessage: "",
    successMessage: "",
    loading: false,
    userInfo: {},
  },
  reducers: {
    resetMessages:(state) =>{
      state.errorMessage = "";
      state.successMessage = "";
    }
  },
  extraReducers: {
    [login.pending]: (state) => {
      state.loading = true;
    },
    [login.rejected]: (state, action) => {
      state.loading = false;
      state.errorMessage = action.payload;
    },
    [login.fulfilled]: (state, action) => {
      state.loading = false;
      state.successMessage = action.payload.message;
    },
  },
});

export const { resetMessages } = authSlice.actions

export default authSlice.reducer;
