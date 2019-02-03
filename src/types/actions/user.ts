import * as constants from "../../constants/user";
import { StoryIdType, CollectionIdType } from "../../types/data/items";
import { ThemeType } from "../../types/data/ui";

export type SAVE_STORY = typeof constants.SAVE_STORY;
export type DELETE_STORY = typeof constants.DELETE_STORY;
export type ADD_COLLECTION = typeof constants.ADD_COLLECTION;
export type REMOVE_COLLECTION = typeof constants.REMOVE_COLLECTION;
export type UPDATE_THEME = typeof constants.UPDATE_THEME;

// export type UserActionTypes =
//   | SAVE_STORY
//   | DELETE_STORY
//   | ADD_COLLECTION
//   | REMOVE_COLLECTION
//   | UPDATE_THEME;

export interface SaveStoryActionType {
  type: SAVE_STORY;
  payload: {
    id: StoryIdType;
  };
}
export interface DeleteStoryActionType {
  type: DELETE_STORY;
  payload: {
    id: StoryIdType;
  };
}
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

export type UserActionTypes =
  | SaveStoryActionType
  | DeleteStoryActionType
  | AddCollectionActionType
  | RemoveCollectionActionType
  | UpdateThemeActionType;
