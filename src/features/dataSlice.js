import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";

const fetchData = createAsyncThunk("fetchData", async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  console.log("we are here");
  return response.json();
});

export const cardData = createSlice({
  name: "cardData",
  initialState: {
    isLoading: false,
    data: null,
    error: false,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchData.fulfilled, (state, action) => {
      console.log("dataSlice", action.payload);
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchData.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchData.rejected, () => {
      console.log("error -> ", action.payload);
      state.error = true;
    });
  },
});

// Action creators are generated for each case reducer function
export { fetchData };

export default cardData.reducer;
