import { configureStore } from "@reduxjs/toolkit";
import userRegisterReducer from "../features/user/userRegisterSlice";
import userLoginReducer from "../features/user/userLoginSlice";

const store = configureStore({
  reducer: {
    userRegister: userRegisterReducer,
    userLogin: userLoginReducer,
  },
});

export default store;
