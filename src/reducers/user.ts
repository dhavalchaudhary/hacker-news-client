import * as UserTypes from "../types/actions/user";
import * as constants from "../constants/user";
import { UserStateType } from "../types/reducers/user";

let initialState: UserStateType = {
  savedItems: [],
  ui: {
    theme: "light",
    collections: []
  }
};

function userReducer(
  state = initialState,
  action: UserTypes.UserActionTypes
): UserStateType {
  switch (action.type) {
    case constants.SAVE_STORY:
      return { ...state, savedItems: [action.payload.id, ...state.savedItems] };
    case constants.DELETE_STORY:
      return {
        ...state,
        savedItems: state.savedItems.filter(i => i !== action.payload.id)
      };
    case constants.ADD_COLLECTION:
      return {
        ...state,
        ui: {
          ...state.ui,
          collections: [...state.ui.collections, action.payload.id]
        }
      };
    case constants.REMOVE_COLLECTION:
      return {
        ...state,
        ui: {
          ...state.ui,
          collections: state.ui.collections.filter(i => i !== action.payload.id)
        }
      };
    case constants.UPDATE_THEME:
      return {
        ...state,
        ui: {
          ...state.ui,
          theme: action.payload.theme
        }
      };
    default:
      return state;
  }
}

export default userReducer;
