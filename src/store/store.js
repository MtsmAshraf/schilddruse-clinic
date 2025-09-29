import { configureStore } from "@reduxjs/toolkit";
import showPopupModalReducer from "./showPopupModalSlice"

export const store = configureStore({
  reducer: {
    showPopupModal: showPopupModalReducer,
  },
});
