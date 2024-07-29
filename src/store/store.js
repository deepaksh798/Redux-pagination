import { configureStore } from "@reduxjs/toolkit";
import cardData from "../features/dataSlice";

export default configureStore({
  reducer: {
    cardData: cardData,
  },
});
