import {createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosURL from "../../components/url/AxiosURL";

export const addCause = createAsyncThunk('causes/addCause', async(causeData, { rejectWithValue }) => {
   console.log(causeData, "I am from cause Slice.js");
   try{
      const formData = new FormData();
      formData.append('causeName', causeData.causeName);
      formData.append('placeName', causeData.placeName);
      formData.append('causeDescription', causeData.causeDescription);
      formData.append('collaborationApplicationDeadline', causeData.collaborationApplicationDeadline);
      formData.append('time', causeData.time)
      formData.append("startDate", causeData.startDate);
      formData.append("endDate", causeData.endDate);
      formData.append("userId", causeData.userId);

      
      const response = await axiosURL.post('cause/addCause', formData
      );
      return response?.data;
      
   }catch(error) {
      console.error("Error in addCause:", error);
      return rejectWithValue(error.response?.data?.message || error.message);
   }
});

export const getCauses = createAsyncThunk('causes/getCauses', async() => {
   try{
      const response = await axiosURL.get('cause/getCauses');
      return response?.data;
      
   }catch(error) {
      console.error("Error in getCauses:", error);
      return rejectWithValue(error.response?.data?.message || error.message);
   }
  });

  const initialState = {
     loading: false,
     myerror: null,
     success: false,
     data: null
  };

  const causeSlice = createSlice({
     name: "cause",
     initialState,
     reducers: {

     },
     extraReducers: (builder) => {
        builder
           .addCase(getCauses.pending, (state) => {
              state.loading = true;
              state.myerror = null;
              state.success = false;
           })
           .addCase(getCauses.fulfilled, (state, action) => {
              state.loading = false;
              state.myerror = null;
              state.success = true;
              state.data = action.payload;
           })
           .addCase(getCauses.rejected, (state, action) => {
              state.loading = false;
              state.myerror = action.payload;
              state.success = false;
           })

           .addCase(addCause.pending, (state) => {
              state.loading = true;
              state.myerror = null;
              state.success = false;
           })
           .addCase(addCause.fulfilled, (state, action) => {
              state.loading = false;
              state.myerror = null;
              state.success = true;
           })
           .addCase(addCause.rejected, (state, action) => {
              state.loading = false;
              state.myerror = action.payload;
              state.success = false;
           })
         }

      });

      export default causeSlice.reducer;