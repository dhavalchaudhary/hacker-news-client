import { createStore, applyMiddleware, compose } from "redux";
import appReducer from "../reducers/index";
import fetchCollectionMiddleware from "../middlewares/fetchCollection";
import fetchStories from "../middlewares/fetchStories";
import fetchStory from "../middlewares/fetchStory";

// const store = middleware(devtools(createStore))(appReducer);

export const store = createStore(
  appReducer,
  compose(
    applyMiddleware(fetchCollectionMiddleware, fetchStories, fetchStory),
    (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
      (window as any).__REDUX_DEVTOOLS_EXTENSION__()
  )
);
export default store;
