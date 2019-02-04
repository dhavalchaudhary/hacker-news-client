import * as UserTypes from "../types/actions/user";
import * as constants from "../constants/user";
import { UserStateType } from "../types/reducers/user";

let initialState: UserStateType = {
  ui: {
    theme: "light",
    collections: [],
    pages: []
  }
};

function userReducer(
  state = initialState,
  action: UserTypes.UserActionTypes
): UserStateType {
  switch (action.type) {
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
    case constants.UPDATE_PAGE:
      return {
        ...state,
        ui: {
          ...state.ui,
          pages:
            action.payload.page.length === 0
              ? []
              : state.ui.pages.concat(action.payload.page)
        }
      };
    default:
      return state;
  }
}

export default userReducer;
