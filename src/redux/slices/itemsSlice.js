import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showStartMenu: false,
  showMessages: false,
  showTerminal: false,
  showMySkills: false,
  showMyProjects: false,
  showContactMe: false,
  showAboutMe: false,
  showUpArrowElements: false,
  shownNumberOfTerminals: 0,
};

export const itemsSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    toggleVisibility: (state, { payload }) => {
      console.log(payload);
      state[payload] = !state[payload];
      console.log(state[payload]);
    },
    changeVisibility: (state, { payload }) => {
      state[payload.name] = payload.value;
      console.log(state[payload.name]);
    },
    decreaseNumberOfTerminals: (state, { payload }) => {
      state.shownNumberOfTerminals = state.shownNumberOfTerminals - 1;
    },
    increaseNumberOfTerminals: (state, { payload }) => {
      state.shownNumberOfTerminals = state.shownNumberOfTerminals + 1;
      state.showTerminal = true;
      console.log(state.shownNumberOfTerminals);
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  toggleVisibility,
  changeVisibility,
  decreaseNumberOfTerminals,
  increaseNumberOfTerminals,
} = itemsSlice.actions;

export default itemsSlice.reducer;
