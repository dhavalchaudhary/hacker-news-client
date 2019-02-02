import { StoryIdType, CollectionType } from "../data/items";
import { ThemeType } from "../data/ui";

export interface UserStateUIType {
  theme: ThemeType;
  collections: Array<CollectionType>;
}

export type UserStateSavedItemsType = Array<StoryIdType>;

export interface UserState {
  savedItems: UserStateSavedItemsType;
  ui: UserStateUIType;
}
