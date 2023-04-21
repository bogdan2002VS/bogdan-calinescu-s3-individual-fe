import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loggedUser: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setLoggedUser: (state, action) => {
      state.loggedUser = action.payload;
    },
  },
});

export const { setLoggedUser } = userSlice.actions;
export default userSlice.reducer;
