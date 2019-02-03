import { createStore, applyMiddleware, compose } from "redux";
import appReducer from "../reducers/index";
import fetchCollectionMiddleware from "../middlewares/fetchCollection";

// const store = middleware(devtools(createStore))(appReducer);

export const store = createStore(
  appReducer,
  compose(
    applyMiddleware(fetchCollectionMiddleware),
    (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
      (window as any).__REDUX_DEVTOOLS_EXTENSION__()
  )
);
export default store;
