import { configureStore } from "@reduxjs/toolkit";

// import usersReducer from "./login/usersSlice";
import restaurantsReducer from "./features/restaurants/restaurantsSlice";
import dishesReducer from "./features/dishes/dishesSlice"
import ratingsReducer from "./features/ratings/ratingsSlice"
import usersReducer from "./features/users/usersSlice"

const store = configureStore({
  reducer: {
    restaurants: restaurantsReducer,
    dishes: dishesReducer,
    ratings: ratingsReducer,
    users: usersReducer,
  },
});

export default store;
