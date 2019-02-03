import { StoryType, StoryStateType } from "../types/reducers/story";
import { StoryActionTypes } from "../types/actions/story";
import * as constants from "../constants/stories";

const initialState: StoryStateType = {};

function storyReducer(
  state: StoryStateType = initialState,
  action: StoryActionTypes
): StoryStateType {
  switch (action.type) {
    case constants.FETCH_STORY_INIT:
      return { ...state, [action.payload.storyId]: { fetchStatus: "loading" } };
    case constants.FETCH_STORY_SUCCESS:
      return {
        ...state,
        [action.payload.storyId]: {
          fetchStatus: "loaded",
          data: action.payload.data
        }
      };
    case constants.FETCH_STORY_ERROR:
      return {
        ...state,
        [action.payload.storyId]: {
          fetchStatus: "error"
        }
      };
    default:
      return state;
  }
}

export default storyReducer;
