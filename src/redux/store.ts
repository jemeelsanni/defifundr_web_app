import { configureStore } from "@reduxjs/toolkit";

import themeReducer from "./slice/themeSlice";
import modalReducer from "./slice/modalSlice";

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    modal: modalReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
