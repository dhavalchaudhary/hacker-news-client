import { connect } from "react-redux";
import { StoryIdType, CollectionIdType } from "../../types/data/items";
import StoryList from "../../components/StoryList";
import { AppStateType } from "../../types/store";
import { StoryItemType } from "../../types/reducers/user";

const mapStateToProps = (
  state: AppStateType,
  { storyIds }: { storyIds: Array<StoryItemType> }
) => {
  const isLoading =
    storyIds.filter(
      i =>
        state.stories.hasOwnProperty(i.storyId) &&
        state.stories[i.storyId]!.fetchStatus === "loading"
    ).length > 0;
  const isError =
    storyIds.filter(
      i =>
        state.stories.hasOwnProperty(i.storyId) &&
        state.stories[i.storyId]!.fetchStatus === "error"
    ).length === storyIds.length;
  let data = [];
  if (!isLoading) {
    data = storyIds.reduce(
      (arr: Array<any>, i) =>
        state.stories.hasOwnProperty(i.storyId) &&
        state.stories[i.storyId]!.fetchStatus === "loaded"
          ? arr.concat({
              ...state.stories[i.storyId]!.data,
              collection: i.collection
            })
          : arr,
      []
    );
  }
  return {
    isLoading,
    isError,
    data,
    storyIds
  };
};

export default connect(
  mapStateToProps,
  {}
)(StoryList);
