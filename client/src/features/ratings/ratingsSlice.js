import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchRatings = createAsyncThunk("ratings/fetchRatings", async () =>{
  const response = await fetch("/ratings");
  return await response.json();
})

const ratingsSlice = createSlice({
  name: "ratings",
  initialState: {
    entities: [],
    status: "idle",
  },
  reducers: {

  },
  extraReducers: {
    [fetchRatings.pending](state){
      console.log('loading')
      state.status = "loading";
    },
    [fetchRatings.fulfilled](state, action) {
      console.log("fulfilled")
      state.entities = action.payload;
      state.status = "idle";
    },
  },
})

// export const {  } = ratingsSlice.actions;

export default ratingsSlice.reducer;
