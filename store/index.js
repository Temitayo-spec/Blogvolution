/* eslint-disable linebreak-style */
/* eslint-disable quotes */
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";

export default configureStore({
  reducer: {
    user: userReducer,
  },
});
