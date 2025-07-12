import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosURL from "../../components/url/AxiosURL";

const initialState = {
  loading: false,
  myerror: null,
  success: false,
  msg: null,
};


export const userRegister = createAsyncThunk(
  "user/register",
  async (userData, { rejectWithValue }) => {
    try {
      console.log(userData, "userData in register slice");
      const response = await axiosURL.post("/user/register", userData);
      return response?.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || error.message);
    }
  }
);


const userRegisterSlice = createSlice({
  name: "userRegister",
  initialState,

  reducers: {
    clearError: (state) => {
      state.myerror = null;
    },

    updateSuccess: (state) => {
      state.success = false;
    },
  },

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
        state.msg = action.payload.message;
      })
      
      .addCase(userRegister.rejected, (state, action) => {
        state.loading = false;
        state.myerror = action.payload;
        state.success = false;
      });
  },
});

export const { clearError, updateSuccess } = userRegisterSlice.actions;
export default userRegisterSlice.reducer;
