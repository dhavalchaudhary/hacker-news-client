import { StoryIdType, CollectionIdType } from "../data/items";

export type FetchStatusType = "loading" | "loaded" | "error";

export type CollectionsType = {
  [collection in CollectionIdType]?: {
    fetchStatus: FetchStatusType;
    lastUpdated: Date;
    stories?: Array<StoryIdType>;
  }
};

export type CollectionStateType = CollectionsType;
