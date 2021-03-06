import { connect } from "react-redux";
import App from "../../components/App";
import { AppStateType } from "../../types/store/index";
import { Dispatch } from "redux";
import * as UserTypes from "../../types/actions/user";
import { fetchMoreStories } from "../../actions/stories";
import { FetchMoreStoriesActionType } from "../../types/actions/story";
import { STORIES_PER_PAGE } from "../../constants/ui";

const mapStateToProps = (state: AppStateType) => {
  const totalStories = state.user.ui.collections.reduce((sum, i) => {
    let storiesInCollection = state.collections[i]!.stories;
    if (storiesInCollection instanceof Array) {
      return sum + storiesInCollection.length;
    }
    return sum;
  }, 0);
  const totalStoriesDisplayed = state.user.ui.pages.length * STORIES_PER_PAGE;
  const allPages = state.user.ui.pages;
  let isLoading = false;
  if (allPages.length > 0) {
    const lastPageIds = state.user.ui.pages[state.user.ui.pages.length - 1];
    isLoading =
      lastPageIds.filter(
        i =>
          state.stories.hasOwnProperty(i.storyId) &&
          state.stories[i.storyId]!.fetchStatus === "loading"
      ).length > 0;
  }
  return {
    loadMoreValid: totalStories - totalStoriesDisplayed > 0 && !isLoading,
    theme: state.user.ui.theme
  };
};

const mapDispatchToProps = (
  dispatch: Dispatch<UserTypes.UserActionTypes | FetchMoreStoriesActionType>
) => ({
  fetchMoreStories: (): FetchMoreStoriesActionType =>
    dispatch(fetchMoreStories())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
