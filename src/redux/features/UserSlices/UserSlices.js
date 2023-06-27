import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userinfo: {},
};

const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    setUserData: (state, action) => {
      state.userinfo = action.payload;
    },
    removeUserData: (state) => {
      state.userinfo = {} ;
    },
  },
});

export const { setUserData,removeUserData } = userSlice.actions;
export default userSlice.reducer;