import { CollectionStateType } from "../types/reducers/collection";
import * as CollectionActionTypes from "../types/actions/collection";
import * as constants from "../constants/collection";

const initialState: CollectionStateType = {};

function collectionReducer(
  state: CollectionStateType = initialState,
  action: CollectionActionTypes.CollectionActionTypes
) {
  switch (action.type) {
    case constants.FETCH_COLLECTION_INIT:
      return {
        ...state,
        [action.payload.collection]: state.hasOwnProperty(
          action.payload.collection
        )
          ? {
              ...state[action.payload.collection],
              fetchStatus: "loading"
            }
          : {
              fetchStatus: "loading"
            }
      };
    case constants.FETCH_COLLECTION_SUCCESS:
      return {
        ...state,
        [action.payload.collection]: {
          lastUpdated: new Date().getTime(),
          stories: action.payload.stories,
          fetchStatus: "loaded"
        }
      };
    case constants.FETCH_COLLECTION_ERROR:
      return {
        ...state,
        [action.payload.collection]: {
          ...state[action.payload.collection],
          lastUpdated: new Date().getTime(),
          fetchStatus: "error"
        }
      };
    case constants.INVALIDATE_COLLECTION:
      return {
        ...state,
        [action.payload.collection]: {
          ...state[action.payload.collection],
          stories: []
        }
      };
    default:
      return state;
  }
}

export default collectionReducer;
