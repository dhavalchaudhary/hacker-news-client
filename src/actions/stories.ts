import { StoryIdType } from "../types/data/items";
import * as constants from "../constants/stories";
import * as StoryActionTypes from "../types/actions/story";

export function fetchMoreStories(): StoryActionTypes.FetchMoreStoriesActionType {
  return {
    type: constants.FETCH_MORE_STORIES
  };
}

export function fetchMultipleStories(
  storyIds: StoryIdType[]
): StoryActionTypes.FetchMultipleStoriesActionType {
  return {
    type: constants.FETCH_MULTIPLE_STORIES,
    payload: {
      storyIds
    }
  };
}

export function fetchStory(
  storyId: StoryIdType
): StoryActionTypes.FetchStoryActionType {
  return {
    type: constants.FETCH_STORY,
    payload: {
      storyId
    }
  };
}

export function fetchStoryInit(
  storyId: StoryIdType
): StoryActionTypes.FetchStoryInitActionType {
  return {
    type: constants.FETCH_STORY_INIT,
    payload: {
      storyId
    }
  };
}

export function fetchStorySuccess(
  storyId: StoryIdType,
  data: any
): StoryActionTypes.FetchStorySuccessActionType {
  return {
    type: constants.FETCH_STORY_SUCCESS,
    payload: {
      storyId,
      data
    }
  };
}

export function fetchStoryError(
  storyId: StoryIdType
): StoryActionTypes.FetchStoryErrorActionType {
  return {
    type: constants.FETCH_STORY_ERROR,
    payload: {
      storyId
    }
  };
}
