import { connect } from "react-redux";
import { AppStateType } from "../../types/store";
import { Dispatch } from "redux";
import { updateTheme } from "../../actions/user";
import { ThemeType } from "../../types/data/ui";
import Header from "../../components/Header";
import { UpdateThemeActionType } from "../../types/actions/user";

const mapStateToProps = (state: AppStateType) => ({
  theme: state.user.ui.theme
});

const mapDispatchToProps = (dispatch: Dispatch<UpdateThemeActionType>) => ({
  updateTheme: (theme: ThemeType) => dispatch(updateTheme(theme))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
