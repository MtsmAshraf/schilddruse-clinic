import { createSlice } from "@reduxjs/toolkit";

const initialState = {
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
