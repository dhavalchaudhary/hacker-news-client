import * as constants from "../../constants/user";
import { StoryIdType, CollectionIdType } from "../../types/data/items";
import { ThemeType } from "../../types/data/ui";

export type SAVE_STORY = typeof constants.SAVE_STORY;
export type DELETE_STORY = typeof constants.DELETE_STORY;
export type ADD_COLLECTION = typeof constants.ADD_COLLECTION;
export type REMOVE_COLLECTION = typeof constants.REMOVE_COLLECTION;
export type UPDATE_THEME = typeof constants.UPDATE_THEME;
export type UPDATE_PAGE = typeof constants.UPDATE_PAGE;

export interface AddCollectionActionType {
  type: ADD_COLLECTION;
  payload: {
    id: CollectionIdType;
  };
}
export interface RemoveCollectionActionType {
  type: REMOVE_COLLECTION;
  payload: {
    id: CollectionIdType;
  };
}

export interface UpdateThemeActionType {
  type: UPDATE_THEME;
  payload: {
    theme: ThemeType;
  };
}

export interface UpdatePageActionType {
  type: UPDATE_PAGE;
  payload: {
    page: Array<Array<StoryIdType>>;
  };
}

export type UserActionTypes =
  | AddCollectionActionType
  | RemoveCollectionActionType
  | UpdateThemeActionType
  | UpdatePageActionType;
