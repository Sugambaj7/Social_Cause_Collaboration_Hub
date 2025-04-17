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

const userLoginSlice = createSlice({
  name: "userLogin",
  initialState: {
    loading: false,
    myerror: null,
    success: false,
    msg: null,
    userInfo: null,
  },
  reducers: {
    updateError: (state) => {
      state.myerror = null;
    },
  },
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
        state.userInfo = action.payload.user;
        localStorage.setItem("userInfo", JSON.stringify(action.payload.user));
      })
      .addCase(userLogin.rejected, (state, action) => {
        state.loading = false;
        state.myerror = action.payload;
        state.success = false;
      });
  },
});

export const { updateError } = userLoginSlice.actions;
export default userLoginSlice.reducer;
