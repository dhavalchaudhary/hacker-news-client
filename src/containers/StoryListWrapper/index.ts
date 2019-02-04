import { connect } from "react-redux";
import StoryListWrapper from "../../components/StoryListWrapper";
import { AppStateType } from "../../types/store";

const mapStateToProps = (state: AppStateType) => ({
  pages: state.user.ui.pages
});

export default connect(
  mapStateToProps,
  {}
)(StoryListWrapper);
