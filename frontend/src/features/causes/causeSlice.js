import {createAsyncThunk } from "@reduxjs/toolkit";
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

      
      const response = await axiosURL.post('cause/addCause', formData
      );
      return response?.data;
      
   }catch(error) {
      console.error("Error in addCause:", error);
      return rejectWithValue(error.response?.data?.message || error.message);
   }
});

