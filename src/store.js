import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./modules";

const rootStore = () => {
  const store = configureStore({
    reducer: rootReducer,
  });
  return store;
};

export default rootStore;
