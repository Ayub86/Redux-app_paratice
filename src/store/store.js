import { configureStore } from "@reduxjs/toolkit";
import postSlice from "./reducers/lorem/PostSlice";

const store = configureStore({
  reducer: {
    post: postSlice.reducer,
  },
});

export default store;
