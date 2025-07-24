import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosURL from "../../components/url/AxiosURL";

export const addCause = createAsyncThunk(
  "causes/addCause",
  async (causeData, { rejectWithValue }) => {
    console.log(causeData, "I am from cause Slice.js");
    try {
      const formData = new FormData();
      formData.append("causeName", causeData.causeName);
      formData.append("placeName", causeData.placeName);
      formData.append("causeDescription", causeData.causeDescription);
      formData.append(
        "collaborationApplicationDeadline",
        causeData.collaborationApplicationDeadline
      );
      formData.append("time", causeData.time);
      formData.append("startDate", causeData.startDate);
      formData.append("endDate", causeData.endDate);
      formData.append("userId", causeData.userId);

      const response = await axiosURL.post("causes/addCause", formData);
      return response?.data;
    } catch (error) {
      console.error("Error in addCause:", error);
      return rejectWithValue(error.response?.data?.message || error.message);
    }
  }
);

export const getCausesByUserId = createAsyncThunk(
  "causes/getCausesByUserId",
  async (userId) => {
    // console.log(userId, "I am from cause Slice.js");
    try {
      const response = await axiosURL.get(`causes/getCausesByUserId/${userId}`);
      return response?.data;
    } catch (error) {
      console.error("Error in getCauses:", error);
      return rejectWithValue(error.response?.data?.message || error.message);
    }
  }
);

export const getAllCauses = createAsyncThunk("causes/getCauses", async () => {
  // console.log(userId, "I am from cause Slice.js");
  try {
    const response = await axiosURL.get("causes/getCauses");
    return response?.data;
  } catch (error) {
    console.error("Error in getCauses:", error);
    return rejectWithValue(error.response?.data?.message || error.message);
  }
});

export const updateCauseById = createAsyncThunk(
  "causes/updateCauseById",
  async ({ causeId, causeData }, { rejectWithValue }) => {
    try {
      const response = await axiosURL.put(
        `causes/updateCauseById/${causeId}`,
        causeData
      );
      console.log(causeId, causeData, "I am from updateCauseById in causeSlice.js");
      return response?.data;
    } catch (error) {
      console.error("Error in updateCauseById:", error);
      return rejectWithValue(error.response?.data?.message || error.message);
    }
  }
);

const initialState = {
  loading: false,
  myerror: null,
  success: false,
  myCauses: null,
  allCauses: null,
};

const causeSlice = createSlice({
  name: "cause",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCausesByUserId.pending, (state) => {
        state.loading = true;
        state.myerror = null;
        state.success = false;
      })
      .addCase(getCausesByUserId.fulfilled, (state, action) => {
        state.loading = false;
        state.myerror = null;
        state.success = true;
        state.myCauses = action.payload;
      })
      .addCase(getCausesByUserId.rejected, (state, action) => {
        state.loading = false;
        state.myerror = action.payload;
        state.success = false;
      })

      .addCase(getAllCauses.pending, (state) => {
        state.loading = true;
        state.myerror = null;
        state.success = false;
      })
      .addCase(getAllCauses.fulfilled, (state, action) => {
        state.loading = false;
        state.myerror = null;
        state.success = true;
        state.allCauses = action.payload;
      })
      .addCase(getAllCauses.rejected, (state, action) => {
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
        state.success = true;
        state.myerror = null;
        state.myCauses.data.push(action.payload.data);
        state.allCauses.data.push(action.payload.data);
      })
      .addCase(addCause.rejected, (state, action) => {
        state.loading = false;
        state.myerror = action.payload;
        state.success = false;
      })

      .addCase(updateCauseById.pending, (state) => {
        state.loading = true;
        state.myerror = null;
        state.success = false;
      })
      .addCase(updateCauseById.fulfilled, (state, action) => {
        state.loading = false;
        const updatedCause = action.payload.data;
        state.myCauses.data = state.myCauses.data.map((cause) =>
          cause._id === updatedCause._id ? updatedCause : cause
        );
        state.success = false;
      })
      .addCase(updateCauseById.rejected, (state, action) => {
         state.loading = false;
         state.myerror = action.payload;
         state.success = false;
      });
  },
});

export default causeSlice.reducer;
