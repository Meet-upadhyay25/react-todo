import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../reducers/todoSlice";

const appStore = configureStore({
  reducer: {
    todo: todoReducer,
  },
});

export default appStore;
