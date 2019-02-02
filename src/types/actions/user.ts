import * as constants from "../../constants/user";
import { StoryIdType, CollectionType } from "../../types/data/items";

export type SAVE_STORY = typeof constants.SAVE_STORY;
export type DELETE_STORY = typeof constants.DELETE_STORY;
export type ADD_COLLECTION = typeof constants.ADD_COLLECTION;
export type REMOVE_COLLECTION = typeof constants.REMOVE_COLLECTION;

export type UserActionTypes =
  | SAVE_STORY
  | DELETE_STORY
  | ADD_COLLECTION
  | REMOVE_COLLECTION;

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
    id: CollectionType;
  };
}
export interface RemoveCollectionActionType {
  type: REMOVE_COLLECTION;
  payload: {
    id: CollectionType;
  };
}

export type UserActions =
  | SaveStoryActionType
  | DeleteStoryActionType
  | AddCollectionActionType
  | RemoveCollectionActionType;
