import { connect } from "react-redux";
import App from "../../components/App";
import { AppStateType } from "../../types/store/index";
import { Dispatch } from "redux";
import * as userActions from "../../actions/user";
import * as DataTypes from "../../types/data/items";
import * as UserTypes from "../../types/actions/user";
const mapStateToProps = (state: AppStateType) => ({ state });

const mapDispatchToProps = (dispatch: Dispatch<UserTypes.UserActionTypes>) => ({
  onSaveStory: (id: DataTypes.StoryIdType): UserTypes.SaveStoryActionType =>
    dispatch(userActions.saveStory(id)),
  onDeleteStory: (id: DataTypes.StoryIdType): UserTypes.DeleteStoryActionType =>
    dispatch(userActions.deleteStory(id)),
  onAddCollection: (
    id: DataTypes.CollectionIdType
  ): UserTypes.AddCollectionActionType =>
    dispatch(userActions.addCollection(id)),
  onRemoveCollection: (
    id: DataTypes.CollectionIdType
  ): UserTypes.RemoveCollectionActionType =>
    dispatch(userActions.removeCollection(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
