import { StoryIdType, CollectionIdType } from "../data/items";
import { ThemeType } from "../data/ui";

export interface StoryItemType {
  storyId: StoryIdType;
  collection: any;
}

export interface UserStateUIType {
  theme: ThemeType;
  collections: Array<CollectionIdType>;
  pages: Array<Array<StoryItemType>>;
}

export interface UserStateType {
  ui: UserStateUIType;
}
