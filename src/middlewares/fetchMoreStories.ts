import { AppStateType } from "../types/store/index";
import { Middleware } from "redux";
import { AppActions } from "../types/actions";
import { updatePage } from "../actions/user";
import { StoryIdType } from "../types/data/items";
import shuffle from "shuffle-array";
import { FETCH_MORE_STORIES } from "../constants/stories";
import { fetchMultipleStories } from "../actions/stories";
import { STORIES_PER_PAGE } from "../constants/ui";
import { StoryItemType } from "../types/reducers/user";

const fetchMoreStories: Middleware = store => next => (action: AppActions) => {
  if (action.type === FETCH_MORE_STORIES) {
    const state: AppStateType = store.getState();
    const totalVisibleCollections = state.user.ui.collections.length;
    const currentPage = state.user.ui.pages.length;
    const totalItemsPerPage = STORIES_PER_PAGE;
    const totalItemsPerCollectionPerPage = Math.round(
      totalItemsPerPage / totalVisibleCollections
    );

    let allItems: StoryItemType[] = state.user.ui.collections.reduce(
      (arr: StoryItemType[], i) => {
        const items = state.collections[i]!.stories;
        if (items instanceof Array) {
          const idsAlreadyAdded: StoryIdType[] = arr.map(
            storyItemObj => storyItemObj.storyId
          );
          return arr.concat(
            items
              .slice(
                currentPage * totalItemsPerCollectionPerPage,
                (currentPage + 1) * totalItemsPerCollectionPerPage
              )
              .map((storyId: StoryIdType) => ({
                storyId,
                collection: i
              }))
              .filter(story => !idsAlreadyAdded.includes(story.storyId))
          );
        } else {
          return arr;
        }
      },
      []
    );
    shuffle(allItems);
    store.dispatch(updatePage(allItems.length > 0 ? [allItems] : []));
    if (allItems.length > 0) {
      store.dispatch(
        fetchMultipleStories(
          allItems
            .filter(i => !state.stories.hasOwnProperty(i.storyId))
            .map(j => j.storyId)
        )
      );
    }
  }
  return next(action);
};

export default fetchMoreStories;
