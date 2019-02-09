import { AppStateType } from "../types/store/index";
import { Middleware } from "redux";
import {
  fetchCollectionInit,
  fetchCollectionSuccess,
  fetchCollectionError
} from "../actions/collections";
import { fetchCollectionData } from "../api/collection";
import { AppActions } from "../types/actions";
import { FETCH_COLLECTION } from "../constants/collection";
import { updatePage } from "../actions/user";
import { fetchMoreStories } from "../actions/stories";

const fetchCollectionMiddleware: Middleware = store => next => async (
  action: AppActions
) => {
  if (action.type === FETCH_COLLECTION) {
    const collectionId = action.payload.collection;
    const state: AppStateType = store.getState();
    if (!state.collections.hasOwnProperty(collectionId)) {
      store.dispatch(fetchCollectionInit(collectionId));
      try {
        const res = await fetchCollectionData(collectionId);
        store.dispatch(fetchCollectionSuccess(collectionId, res));
        store.dispatch(updatePage([]));
        store.dispatch(fetchMoreStories());
      } catch (err) {
        store.dispatch(fetchCollectionError(collectionId));
      }
    } else {
      store.dispatch(updatePage([]));
      store.dispatch(fetchMoreStories());
    }
  }
  return next(action);
};
export default fetchCollectionMiddleware;
