import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchUsers = createAsyncThunk("users/fetchUsers", async () =>{
  console.log("hello")
  const response = await fetch("/me");
  return await response.json();
})

const usersSlice = createSlice({
  name: "users",
  initialState: {
    entities: [],
    status: "idle",
  },
  reducers: {

  },
  extraReducers: {
    [fetchUsers.pending](state){
      state.status = "loading";
    },
    [fetchUsers.fulfilled](state, action) {
      console.log("hello")
      state.entities = action.payload;
      state.status = "idle";
    }
  }
});

export const { } = usersSlice.actions;

export default usersSlice.reducer;
