import { StoryIdType, CollectionIdType } from "../data/items";
import { FetchStatusType } from "../api/state";

export type CollectionsType = {
  [collection in CollectionIdType]?: {
    fetchStatus: FetchStatusType;
    lastUpdated: Date;
    stories?: Array<StoryIdType>;
  }
};

export type CollectionStateType = CollectionsType;
