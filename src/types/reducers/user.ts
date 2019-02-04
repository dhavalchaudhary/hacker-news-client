import { StoryIdType, CollectionIdType } from "../data/items";
import { ThemeType } from "../data/ui";

export interface UserStateUIType {
  theme: ThemeType;
  collections: Array<CollectionIdType>;
  pages: Array<Array<StoryIdType>>;
}

export interface UserStateType {
  ui: UserStateUIType;
}
