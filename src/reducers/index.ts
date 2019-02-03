import { combineReducers } from "redux";
import userReducer from "./user";
import collectionReducer from "./collections";
import storyReducer from "./story";

const appReducer = combineReducers({
  user: userReducer,
  collections: collectionReducer,
  stories: storyReducer
});

export default appReducer;
