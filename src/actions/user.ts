import * as constants from "../constants/user";
import * as UserActionTypes from "../types/actions/user";
import { StoryIdType, CollectionIdType } from "../types/data/items";
import { ThemeType } from "../types/data/ui";

export function saveStory(
  id: StoryIdType
): UserActionTypes.SaveStoryActionType {
  return { type: constants.SAVE_STORY, payload: { id } };
}

export function deleteStory(
  id: StoryIdType
): UserActionTypes.DeleteStoryActionType {
  return { type: constants.DELETE_STORY, payload: { id } };
}

export function addCollection(
  id: CollectionIdType
): UserActionTypes.AddCollectionActionType {
  return { type: constants.ADD_COLLECTION, payload: { id } };
}

export function removeCollection(
  id: CollectionIdType
): UserActionTypes.RemoveCollectionActionType {
  return { type: constants.REMOVE_COLLECTION, payload: { id } };
}

export function updateTheme(
  theme: ThemeType
): UserActionTypes.UpdateThemeActionType {
  return { type: constants.UPDATE_THEME, payload: { theme } };
}
