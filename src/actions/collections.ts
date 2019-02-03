import * as constants from "../constants/collection";
import * as CollectionActionTypes from "../types/actions/collection";
import { CollectionIdType, StoryIdType } from "../types/data/items";

export function fetchCollection(
  collection: CollectionIdType
): CollectionActionTypes.FetchCollectionActionType {
  return {
    type: constants.FETCH_COLLECTION,
    payload: { collection }
  };
}

export function fetchCollectionInit(
  collection: CollectionIdType
): CollectionActionTypes.FetchCollectionInitActionType {
  return {
    type: constants.FETCH_COLLECTION_INIT,
    payload: { collection }
  };
}
export function fetchCollectionSuccess(
  collection: CollectionIdType,
  stories: Array<StoryIdType>
): CollectionActionTypes.FetchCollectionSuccessActionType {
  return {
    type: constants.FETCH_COLLECTION_SUCCESS,
    payload: { collection, stories }
  };
}
export function fetchCollectionError(
  collection: CollectionIdType
): CollectionActionTypes.FetchCollectionErrorActionType {
  return {
    type: constants.FETCH_COLLECTION_ERROR,
    payload: { collection }
  };
}
export function invalidateCollection(
  collection: CollectionIdType
): CollectionActionTypes.InvalidateCollectionActionType {
  return {
    type: constants.INVALIDATE_COLLECTION,
    payload: { collection }
  };
}
