import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import { combineReducers } from "redux";
import storage from "redux-persist/lib/storage";
import homeDisplaySlice from "../features/HomeSlices/homeDisplaySlice";
import bgColorSlice from "../features/ThemeSlices/bgColorSlice";
import bgImageSlice from "../features/ThemeSlices/bgImageSlice";
import { authApi } from "../features/api/authApiSlice";
import UserSlices from "../features/UserSlices/UserSlices";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const rootReducer = combineReducers({
  userData: UserSlices,
  homeDisplay: homeDisplaySlice,
  bgColor: bgColorSlice,
  bgImage: bgImageSlice,
  [authApi.reducerPath]: authApi.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware().concat(authApi.middleware),
});


export default store;
