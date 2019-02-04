import { connect } from "react-redux";
import { StoryIdType } from "../../types/data/items";
import StoryList from "../../components/StoryList";
import { StoryStateType } from "../../types/reducers/story";
import { AppStateType } from "../../types/store";

const mapStateToProps = (
  state: AppStateType,
  { storyIds }: { storyIds: Array<StoryIdType> }
) => ({
  isLoading:
    storyIds.filter(
      i =>
        state.stories.hasOwnProperty(i) &&
        state.stories[i]!.fetchStatus !== "loading"
    ).length === 0,
  isError:
    storyIds.filter(
      i =>
        state.stories.hasOwnProperty(i) &&
        state.stories[i]!.fetchStatus === "error"
    ).length === storyIds.length,
  data: storyIds.reduce(
    (arr: Array<any>, i) =>
      state.stories.hasOwnProperty(i) &&
      state.stories[i]!.fetchStatus === "loaded"
        ? arr.concat(state.stories[i]!.data)
        : arr,
    []
  ),
  storyIds: storyIds
});

export default connect(
  mapStateToProps,
  {}
)(StoryList);
