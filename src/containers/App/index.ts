import { connect } from "react-redux";
import App from "../../components/App";
import { AppStateType } from "../../types/store/index";
import { Dispatch } from "redux";
import * as userActions from "../../actions/user";
import * as DataTypes from "../../types/data/items";
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
  return { loadMoreValid: totalStories - totalStoriesDisplayed > 0 };
};

const mapDispatchToProps = (
  dispatch: Dispatch<UserTypes.UserActionTypes | FetchMoreStoriesActionType>
) => ({
  onAddCollection: (
    id: DataTypes.CollectionIdType
  ): UserTypes.AddCollectionActionType =>
    dispatch(userActions.addCollection(id)),
  onRemoveCollection: (
    id: DataTypes.CollectionIdType
  ): UserTypes.RemoveCollectionActionType =>
    dispatch(userActions.removeCollection(id)),
  fetchMoreStories: (): FetchMoreStoriesActionType =>
    dispatch(fetchMoreStories())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
