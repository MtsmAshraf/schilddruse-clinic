import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  // showPopupModal: window.localStorage.getItem("abdalfttah-academy-theme") ? window.localStorage.getItem("abdalfttah-academy-theme") : "dark",
  showPopupModal: false,
};

const showPopupModalSlice = createSlice({
  name: "showPopupModal",
  initialState,
  reducers: {
    toggleShowPopupModal: (state) => {
      state.showPopupModal = state.showPopupModal === true ? false : true;
    },
    setShowPopupModal: (state, action) => {
      state.showPopupModal = action.payload;
    },
  },
});

export const { toggleShowPopupModal, setShowPopupModal } = showPopupModalSlice.actions;
export default showPopupModalSlice.reducer;
