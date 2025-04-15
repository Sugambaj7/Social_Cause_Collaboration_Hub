import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosURL from "../../components/url/AxiosURL";

export const userLogin = createAsyncThunk(
  "user/login",
  async (userData, { rejectWithValue }) => {
    try {
      const response = await axiosURL.post("/user/login", userData);
      return response?.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || error.message);
    }
  }
);

const userLogin = createSlice({
  name: "userLogin",
  initialState: {
    loading: false,
    myerror: null,
    success: false,
    msg: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(userLogin.pending, (state) => {
        state.loading = true;
        state.myerror = null;
        state.success = false;
      })
      .addCase(userLogin.fulfilled, (state, action) => {
        state.loading = false;
        state.myerror = null;
        state.success = true;
        state.msg = action.payload.message;
      })
      .addCase(userLogin.rejected, (state, action) => {
        state.loading = false;
        state.myerror = action.payload;
        state.success = false;
      });
  },
});
