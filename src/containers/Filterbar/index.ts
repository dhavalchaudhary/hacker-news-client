import { AppState } from "../../types/store";
import { Dispatch } from "redux";
import { CollectionType } from "../../types/data/items";
import { addCollection, removeCollection } from "../../actions/user";
import Filterbar from "../../components/Filterbar";
import { connect } from "react-redux";

const mapStateToProps = (state: AppState) => ({
  collections: state.user.ui.collections
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  onAddCollection: (collectionId: CollectionType) =>
    dispatch(addCollection(collectionId)),
  onRemoveCollection: (collectionId: CollectionType) =>
    dispatch(removeCollection(collectionId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Filterbar);
