import { combineReducers } from "redux";
import countReducer from "./count";

const appReducer = combineReducers({ test: countReducer });

export default appReducer;
