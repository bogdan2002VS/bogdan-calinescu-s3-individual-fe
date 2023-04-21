import { configureStore } from "@reduxjs/toolkit";
import cardInfosSlice from "./cardInfosSlice";
import userReducer from './userSlice';

export default configureStore({
  reducer: {
    user: userReducer,
    cardInfos: cardInfosSlice,
  },
});

