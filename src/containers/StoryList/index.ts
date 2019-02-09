import { connect } from "react-redux";
import { StoryIdType } from "../../types/data/items";
import StoryList from "../../components/StoryList";
import { AppStateType } from "../../types/store";

const mapStateToProps = (
  state: AppStateType,
  { storyIds }: { storyIds: Array<StoryIdType> }
) => {
  const isLoading =
    storyIds.filter(
      i =>
        state.stories.hasOwnProperty(i) &&
        state.stories[i]!.fetchStatus === "loading"
    ).length > 0;
  const isError =
    storyIds.filter(
      i =>
        state.stories.hasOwnProperty(i) &&
        state.stories[i]!.fetchStatus === "error"
    ).length === storyIds.length;
  let data = [];
  if (!isLoading) {
    data = storyIds.reduce(
      (arr: Array<any>, i) =>
        state.stories.hasOwnProperty(i) &&
        state.stories[i]!.fetchStatus === "loaded"
          ? arr.concat(state.stories[i]!.data)
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
