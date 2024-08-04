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
  reducers: {
    deleteItem: (state, action) => {
      state.data = state.data.filter((_, index) => index !== action.payload);
    },
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
    builder.addCase(fetchData.rejected, (state, action) => {
      console.log("error -> ", action.payload);
      state.error = true;
    });
  },
});

// Action creators are generated for each case reducer function
export { fetchData };
export const { deleteItem } = cardData.actions;

export default cardData.reducer;
