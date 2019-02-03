import { CollectionActionTypes } from "./collection";
import { UserActionTypes } from "./user";
import { StoryActionTypes } from "./story";

export type AppActions =
  | CollectionActionTypes
  | UserActionTypes
  | StoryActionTypes;
