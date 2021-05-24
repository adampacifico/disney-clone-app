import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import userReducer from "./features/userSlice"
import movieReducer from "./features/Movie/movieSlice"

export default configureStore({
  reducer: {
      user: userReducer,
      movie: movieReducer,
  },
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});