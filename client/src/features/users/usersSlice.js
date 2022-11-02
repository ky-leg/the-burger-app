import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchUsers = createAsyncThunk("users/fetchUsers", async () =>{
  const response = await fetch("/users");
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
      console.log('loading')
      state.status = "loading";
    },
    [fetchUsers.fulfilled](state, action) {
      console.log("fulfilled")
      state.entities = action.payload;
      state.status = "idle";
    },
  },
})

// export const {  } = usersSlice.actions;

export default usersSlice.reducer;
