import { connect } from "react-redux";
import { AppState } from "../../types/store";
import { Dispatch } from "redux";
import { updateTheme } from "../../actions/user";
import { ThemeType } from "../../types/data/ui";
import Header from "../../components/Header";
import { UpdateThemeActionType } from "../../types/actions/user";
const mapStateToProps = (state: AppState) => ({
  theme: state.user.ui.theme
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  updateTheme: (theme: ThemeType) => dispatch(updateTheme(theme))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
