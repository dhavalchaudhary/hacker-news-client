import { StoryIdType, CollectionIdType } from "../data/items";
import { ThemeType } from "../data/ui";

export interface UserStateUIType {
  theme: ThemeType;
  collections: Array<CollectionIdType>;
}

export type UserStateSavedItemsType = Array<StoryIdType>;

export interface UserStateType {
  savedItems: UserStateSavedItemsType;
  ui: UserStateUIType;
}
