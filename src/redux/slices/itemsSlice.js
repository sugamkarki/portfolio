import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showStartMenu: false,
  showMessages: false,
  showTerminal: false,
  showMySkills: false,
  showMyProjects: false,
  showContactMe: false,
  showAbout: false,
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
    clearAll: (state) => {
      state.showStartMenu = false;
      state.showMessages = false;
      state.showTerminal = false;
      state.showMySkills = false;
      state.showMyProjects = false;
      state.showContactMe = false;
      state.showAbout = false;
      state.showUpArrowElements = false;
      state.shownNumberOfTerminals = 0;
    },
    // decreaseNumberOfTerminals: (state, { payload }) => {
    //   state.shownNumberOfTerminals = state.shownNumberOfTerminals - 1;
    //   state.showTerminal = false;
    // },
    // increaseNumberOfTerminals: (state, { payload }) => {
    //   state.shownNumberOfTerminals = state.shownNumberOfTerminals + 1;
    //   state.showTerminal = true;
    //   console.log(state.shownNumberOfTerminals);
    // },
  },
});

// Action creators are generated for each case reducer function
export const { toggleVisibility, changeVisibility, clearAll } =
  itemsSlice.actions;

export default itemsSlice.reducer;
