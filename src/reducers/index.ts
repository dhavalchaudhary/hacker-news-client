import { combineReducers } from "redux";
import userReducer from "./user";
import collectionReducer from "./collections";
import { AppStateType } from "../types/store/index";
import { AppActions } from "../types/actions/index";
import { CollectionActionTypes } from "../types/actions/collection";
import { UserActionTypes } from "../types/actions/user";
import { UserStateType } from "../types/reducers/user";
import { CollectionStateType } from "../types/reducers/collection";

const appReducer = combineReducers({
  user: userReducer,
  collections: collectionReducer
});

export default appReducer;
