import { configureStore } from "@reduxjs/toolkit";
import userRegisterReducer from "../features/user/userRegisterSlice";

const store = configureStore({
  reducer: {
    userRegister: userRegisterReducer,
  },
});

export default store;
