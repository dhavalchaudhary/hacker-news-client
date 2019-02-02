import { StoryIdType, CollectionType } from "../data/items";

export interface UserStateUIType {
  theme: string;
  collections: Array<CollectionType>;
}

export type UserStateSavedItemsType = Array<StoryIdType>;

export interface UserState {
  savedItems: UserStateSavedItemsType;
  ui: UserStateUIType;
}
