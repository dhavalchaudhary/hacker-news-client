import { FetchStatusType } from "../api/state";

export type StoryType = {
  fetchStatus: FetchStatusType;
  data?: any;
};

export type StoryStateType = { [key in string]?: StoryType };
