import { UserStateType } from "../reducers/user";
import { CollectionStateType } from "../reducers/collection";

export interface AppStateType {
  user: UserStateType;
  collections: CollectionStateType;
}
