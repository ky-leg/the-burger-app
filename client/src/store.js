import { configureStore } from "@reduxjs/toolkit";

import restaurantsReducer from "./features/restaurants/restaurantsSlice.js";
// import reviewsReducer from "./features/reviews/reviewsSlice";

const store = configureStore({
  reducer: {
    restaurants: restaurantsReducer,
    // reviews: reviewsReducer,
  },
});

export default store;
