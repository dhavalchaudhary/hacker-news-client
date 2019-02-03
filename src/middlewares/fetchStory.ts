import { Middleware } from "redux";
import { FETCH_STORY_INIT, FETCH_STORY } from "../constants/stories";
import { AppActions } from "../types/actions";
import { fetchStoryData } from "../api/story";
import {
  fetchStorySuccess,
  fetchStoryInit,
  fetchStoryError
} from "../actions/stories";

const fetchStory: Middleware = store => next => async (action: AppActions) => {
  if (action.type === FETCH_STORY) {
    const { storyId } = action.payload;
    store.dispatch(fetchStoryInit(storyId));
    try {
      const res = await fetchStoryData(storyId);
      store.dispatch(fetchStorySuccess(storyId, res));
    } catch (err) {
      store.dispatch(fetchStoryError(storyId));
    }
  }
  return next(action);
};

export default fetchStory;
