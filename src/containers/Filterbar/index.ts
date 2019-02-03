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
import { fetchCollection } from "../../actions/collections";
import { FetchCollectionActionType } from "../../types/actions/collection";

const mapStateToProps = (state: AppStateType) => ({
  collections: state.user.ui.collections
});

const mapDispatchToProps = (
  dispatch: Dispatch<
    | AddCollectionActionType
    | RemoveCollectionActionType
    | FetchCollectionActionType
  >
) => ({
  onAddCollection: (collectionId: CollectionIdType) =>
    dispatch(addCollection(collectionId)),
  fetchCollection: (collectionId: CollectionIdType) =>
    dispatch(fetchCollection(collectionId)),
  onRemoveCollection: (collectionId: CollectionIdType) =>
    dispatch(removeCollection(collectionId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Filterbar);
