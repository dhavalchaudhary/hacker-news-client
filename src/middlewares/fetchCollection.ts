import { AppStateType } from "../types/store/index";
import { Middleware } from "redux";
import {
  fetchCollectionInit,
  fetchCollectionSuccess,
  fetchCollectionError
} from "../actions/collections";
import { fetchCollectionData } from "../api/collection";
import { AppActions } from "../types/actions";
import { fetchStories } from "../actions/stories";
import { FETCH_COLLECTION } from "../constants/collection";

const fetchCollectionMiddleware: Middleware = store => next => async (
  action: AppActions
) => {
  if (action.type === FETCH_COLLECTION) {
    const collectionId = action.payload.collection;
    const state: AppStateType = store.getState();
    if (
      !state.collections.hasOwnProperty(collectionId) &&
      collectionId !== "saved"
    ) {
      store.dispatch(fetchCollectionInit(collectionId));
      try {
        const res = await fetchCollectionData(collectionId);
        store.dispatch(fetchCollectionSuccess(collectionId, res));
        store.dispatch(fetchStories(res.slice(0, 5)));
      } catch (err) {
        store.dispatch(fetchCollectionError(collectionId));
      }
    }
  }
  return next(action);
};
export default fetchCollectionMiddleware;
