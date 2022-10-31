import { configureStore } from "@reduxjs/toolkit";

import usersReducer from "./login/usersSlice";
import restaurantsReducer from "./features/restaurants/restaurantsSlice";
import dishesReducer from "./features/dishes/dishesSlice"

const store = configureStore({
  reducer: {
    // users: usersReducer,
    restaurants: restaurantsReducer,
    dishes: dishesReducer,
  },
});

export default store;
