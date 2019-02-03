import { UserStateType } from "../reducers/user";
import { CollectionStateType } from "../reducers/collection";
import { StoryStateType } from "../reducers/story";

export interface AppStateType {
  user: UserStateType;
  collections: CollectionStateType;
  stories: StoryStateType;
}
