import { AppStateType } from "../types/store/index";
import { ADD_COLLECTION } from "../constants/user";
import { Middleware } from "redux";
import {
  fetchCollectionInit,
  fetchCollectionSuccess,
  fetchCollectionError
} from "../actions/collections";
import { fetchCollectionData } from "../api/collection";
import { AppActions } from "../types/actions";

const fetchCollectionMiddleware: Middleware = store => next => async (
  action: AppActions
) => {
  if (action.type === ADD_COLLECTION) {
    const collectionId = action.payload.id;
    const state: AppStateType = store.getState();
    if (
      !state.collections.hasOwnProperty(collectionId) &&
      collectionId !== "saved"
    ) {
      store.dispatch(fetchCollectionInit(collectionId));
      try {
        const res = await fetchCollectionData(collectionId);
        store.dispatch(fetchCollectionSuccess(collectionId, res));
      } catch (err) {
        store.dispatch(fetchCollectionError(collectionId));
      }
    }
  }
  return next(action);
};
export default fetchCollectionMiddleware;
