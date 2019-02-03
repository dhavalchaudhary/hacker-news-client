import * as constants from "../../constants/collection";
import { CollectionIdType, StoryIdType } from "../data/items";

export type FETCH_COLLECTION = typeof constants.FETCH_COLLECTION;
export type FETCH_COLLECTION_INIT = typeof constants.FETCH_COLLECTION_INIT;
export type FETCH_COLLECTION_SUCCESS = typeof constants.FETCH_COLLECTION_SUCCESS;
export type FETCH_COLLECTION_ERROR = typeof constants.FETCH_COLLECTION_ERROR;

export type INVALIDATE_COLLECTION = typeof constants.INVALIDATE_COLLECTION;

// export type CollectionActionTypes =
//   | FETCH_COLLECTION_INIT
//   | FETCH_COLLECTION_SUCCESS
//   | FETCH_COLLECTION_ERROR
//   | INVALIDATE_COLLECTION;

export interface FetchCollectionActionType {
  type: FETCH_COLLECTION;
  payload: { collection: CollectionIdType };
}

export interface FetchCollectionInitActionType {
  type: FETCH_COLLECTION_INIT;
  payload: { collection: CollectionIdType };
}
export interface FetchCollectionSuccessActionType {
  type: FETCH_COLLECTION_SUCCESS;
  payload: { collection: CollectionIdType; stories: Array<StoryIdType> };
}
export interface FetchCollectionErrorActionType {
  type: FETCH_COLLECTION_ERROR;
  payload: { collection: CollectionIdType };
}
export interface InvalidateCollectionActionType {
  type: INVALIDATE_COLLECTION;
  payload: { collection: CollectionIdType };
}

export type CollectionActionTypes =
  | FetchCollectionActionType
  | FetchCollectionInitActionType
  | FetchCollectionSuccessActionType
  | FetchCollectionErrorActionType
  | InvalidateCollectionActionType;
