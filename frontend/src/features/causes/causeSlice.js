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
      formData.append("helpingHands", causeData.helpingHands);
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
      console.log(
        causeId,
        causeData,
        "I am from updateCauseById in causeSlice.js"
      );
      return response?.data;
    } catch (error) {
      console.error("Error in updateCauseById:", error);
      return rejectWithValue(error.response?.data?.message || error.message);
    }
  }
);

export const deleteCauseById = createAsyncThunk(
  "causes/deleteCauseById",
  async (causeId, { rejectWithValue }) => {
    try {
      const response = await axiosURL.delete(
        `causes/deleteCauseById/${causeId}`
      );
      console.log(response, "I am from deleteCauseById in causeSlice.js");
      return response?.data;
    } catch (error) {
      console.error("Error in deleting cause by ID:", error);
      return rejectWithValue(error.response?.data?.message || error.message);
    }
  }
);

const initialState = {
  loading: false,
  myerror: null,
  success: false,
  myCauses: [],
  allCauses: [],
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
        state.myCauses = action.payload.data;
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
        state.allCauses = action.payload.data;
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
        state.myCauses.push(action.payload.data);
        state.allCauses.push(action.payload.data);
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
        state.myCauses = state.myCauses.map((cause) =>
          cause._id === updatedCause._id ? updatedCause : cause
        );
        state.success = false;
      })
      .addCase(updateCauseById.rejected, (state, action) => {
        state.loading = false;
        state.myerror = action.payload;
        state.success = false;
      })

      .addCase(deleteCauseById.pending, (state) => {
        state.loading = true;
        state.myerror = null;
        state.success = false;
      })
      .addCase(deleteCauseById.fulfilled, (state, action) => {
        state.loading = false;
        const deletedCause = action.payload.data;
        state.myCauses = state.myCauses.filter(
          (cause) => cause._id !== deletedCause._id
        );
        state.success = true;
      })
      .addCase(deleteCauseById.rejected, (state, action) => {
        state.loading = false;
        state.myerror = action.payload;
        state.success = false;
      });
  },
});

export default causeSlice.reducer;
