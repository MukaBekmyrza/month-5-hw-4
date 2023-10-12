import { combineReducers, configureStore } from "@reduxjs/toolkit";
import postReducer from "./reducers/postSlice";
import usersReducer from "./reducers/usersSlice";

const rootReducer = combineReducers({
    postReducer,
    usersReducer,
});

const store = configureStore({ reducer: rootReducer });

export default store