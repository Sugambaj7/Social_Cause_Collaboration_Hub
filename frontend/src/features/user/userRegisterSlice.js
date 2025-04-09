import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: false,
  myerror: null,
  success: false,
};

export const userRegister = createAsyncThunk(
  "user/register",
  async (userData, { rejectWithValue }) => {
    console.log(userData, "userData in register slice");
  }
);

const userRegisterSlice = createSlice({
  name: "userRegister",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(userRegister.pending, (state) => {
        state.loading = true;
        state.myerror = null;
        state.success = false;
      })
      .addCase(userRegister.fulfilled, (state, action) => {
        state.loading = false;
        state.myerror = null;
        state.success = true;
      })
      .addCase(userRegister.rejected, (state, action) => {
        state.loading = false;
        state.myerror = action.payload;
        state.success = false;
      });
  },
});

export default userRegisterSlice.reducer;
