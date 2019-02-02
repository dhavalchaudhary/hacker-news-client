import * as constants from "../constants/user";
import * as UserTypes from "../types/actions/user";
import { StoryIdType, CollectionType } from "../types/data/items";
import { ThemeType } from "../types/data/ui";

export function saveStory(id: StoryIdType): UserTypes.SaveStoryActionType {
  return { type: constants.SAVE_STORY, payload: { id } };
}

export function deleteStory(id: StoryIdType): UserTypes.DeleteStoryActionType {
  return { type: constants.DELETE_STORY, payload: { id } };
}

export function addCollection(
  id: CollectionType
): UserTypes.AddCollectionActionType {
  return { type: constants.ADD_COLLECTION, payload: { id } };
}

export function removeCollection(
  id: CollectionType
): UserTypes.RemoveCollectionActionType {
  return { type: constants.REMOVE_COLLECTION, payload: { id } };
}

export function updateTheme(theme: ThemeType) {
  return { type: constants.UPDATE_THEME, payload: { theme } };
}
