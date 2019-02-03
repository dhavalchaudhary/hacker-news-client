import * as constants from "../../constants/stories";
import { StoryIdType } from "../data/items";

export type FETCH_MULTIPLE_STORIES = typeof constants.FETCH_MULTIPLE_STORIES;
export type FETCH_STORY_INIT = typeof constants.FETCH_STORY_INIT;
export type FETCH_STORY_SUCCESS = typeof constants.FETCH_STORY_SUCCESS;
export type FETCH_STORY_ERROR = typeof constants.FETCH_STORY_ERROR;
export type FETCH_STORY = typeof constants.FETCH_STORY;

export interface FetchMultipleStoriesActionType {
  type: FETCH_MULTIPLE_STORIES;
  payload: {
    storyIds: StoryIdType[];
  };
}

export interface FetchStoryActionType {
  type: FETCH_STORY;
  payload: {
    storyId: StoryIdType;
  };
}

export interface FetchStoryInitActionType {
  type: FETCH_STORY_INIT;
  payload: {
    storyId: StoryIdType;
  };
}

export interface FetchStorySuccessActionType {
  type: FETCH_STORY_SUCCESS;
  payload: {
    storyId: StoryIdType;
    data: any;
  };
}

export interface FetchStoryErrorActionType {
  type: FETCH_STORY_ERROR;
  payload: { storyId: StoryIdType };
}

export type StoryActionTypes =
  | FetchMultipleStoriesActionType
  | FetchStoryActionType
  | FetchStoryInitActionType
  | FetchStorySuccessActionType
  | FetchStoryErrorActionType;
