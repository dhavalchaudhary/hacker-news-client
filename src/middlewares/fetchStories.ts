import { Middleware } from "redux";
import { FETCH_MULTIPLE_STORIES } from "../constants/stories";
import { fetchStory } from "../actions/stories";
import { StoryIdType } from "../types/data/items";
import { AppActions } from "../types/actions";

const fetchStories: Middleware = store => next => (action: AppActions) => {
  if (action.type === FETCH_MULTIPLE_STORIES) {
    const { storyIds } = action.payload;
    storyIds.map((i: StoryIdType) => store.dispatch(fetchStory(i)));
  }
  return next(action);
};

export default fetchStories;
