import { AppStateType } from "../../types/store";
import { Dispatch } from "redux";
import { CollectionIdType } from "../../types/data/items";
import { addCollection, removeCollection } from "../../actions/user";
import Filterbar from "../../components/Filterbar";
import { connect } from "react-redux";
import {
  AddCollectionActionType,
  RemoveCollectionActionType
} from "../../types/actions/user";

const mapStateToProps = (state: AppStateType) => ({
  collections: state.user.ui.collections
});

const mapDispatchToProps = (
  dispatch: Dispatch<AddCollectionActionType | RemoveCollectionActionType>
) => ({
  onAddCollection: (collectionId: CollectionIdType) =>
    dispatch(addCollection(collectionId)),
  onRemoveCollection: (collectionId: CollectionIdType) =>
    dispatch(removeCollection(collectionId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Filterbar);
