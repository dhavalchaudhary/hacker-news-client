import { AppStateType } from "../types/store/index";
import { Middleware } from "redux";
import { AppActions } from "../types/actions";
import { updatePage } from "../actions/user";
import { StoryIdType } from "../types/data/items";
import shuffle from "shuffle-array";
import { FETCH_MORE_STORIES } from "../constants/stories";
import { fetchMultipleStories } from "../actions/stories";
import { STORIES_PER_PAGE } from "../constants/ui";

const fetchMoreStories: Middleware = store => next => (action: AppActions) => {
  if (action.type === FETCH_MORE_STORIES) {
    const state: AppStateType = store.getState();
    const totalVisibleCollections: number = state.user.ui.collections.length;
    const currentPage: number = state.user.ui.pages.length;
    const totalItemsPerPage: number = STORIES_PER_PAGE;
    const totalItemsPerCollectionPerPage = Math.round(
      totalItemsPerPage / totalVisibleCollections
    );
    let allItems: Array<StoryIdType> = state.user.ui.collections.reduce(
      (arr: Array<StoryIdType>, i) => {
        const items = state.collections[i]!.stories;
        if (items instanceof Array) {
          return arr.concat(
            items
              .slice(
                currentPage * totalItemsPerCollectionPerPage,
                (currentPage + 1) * totalItemsPerCollectionPerPage
              )
              .filter((storyId: StoryIdType) => !arr.includes(storyId))
          );
        } else {
          return arr;
        }
      },
      []
    );
    shuffle(allItems);
    store.dispatch(updatePage([allItems]));
    store.dispatch(
      fetchMultipleStories(
        allItems.filter(i => !state.stories.hasOwnProperty(i))
      )
    );
  }
  return next(action);
};

export default fetchMoreStories;
