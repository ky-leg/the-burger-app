import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchDishes = createAsyncThunk("dishes/fetchDishes", async () =>{
  const response = await fetch("/dishes");
  return await response.json();
})

const dishesSlice = createSlice({
  name: "dishes",
  initialState: {
    entities: [],
    status: "idle",
  },
  reducers: {
 
  },
  extraReducers: {
    [fetchDishes.pending](state){
      console.log('loading')
      state.status = "loading";
    },
    [fetchDishes.fulfilled](state, action) {
      console.log("fulfilled")
      state.entities = action.payload;
      state.status = "idle";
    },
  },
})

export const { } = dishesSlice.actions;

export default dishesSlice.reducer;
