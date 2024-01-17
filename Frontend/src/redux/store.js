import { configureStore } from "@reduxjs/toolkit";
import mealReducer from "./slices/mealSlice";
export const store = configureStore({
  reducer: {
    meal: mealReducer,
  },
});
