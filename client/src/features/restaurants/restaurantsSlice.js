import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchRestaurants = createAsyncThunk("restaurants/fetchRestaurants", async () =>{
  const response = await fetch("/restaurants");
  return await response.json();
})

const restaurantsSlice = createSlice({
  name: "restaurants",
  initialState: {
    entities: [],
    status: "idle",
  },
  reducers: {
 
  },
  extraReducers: {
    [fetchRestaurants.pending](state){
      console.log('loading')
      state.status = "loading";
    },
    [fetchRestaurants.fulfilled](state, action) {
      console.log("fulfilled")
      state.entities = action.payload;
      state.status = "idle";
    },
  },
})

// export const { } = restaurantsSlice.actions;

export default restaurantsSlice.reducer;
