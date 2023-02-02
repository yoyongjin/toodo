import { combineReducers } from "@reduxjs/toolkit";
import todoSlice from "./todoSlice";

const rootReducer = combineReducers({
  todo: todoSlice.reducer,
});

export default rootReducer;
