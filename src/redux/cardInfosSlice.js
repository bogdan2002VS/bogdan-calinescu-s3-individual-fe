
import { createSlice } from "@reduxjs/toolkit";

const cardInfosSlice = createSlice({
  name: "cardInfos",
  initialState: {
    value: [],
  },
  reducers: {
    setCardInfos: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setCardInfos } = cardInfosSlice.actions;
export default cardInfosSlice.reducer;
