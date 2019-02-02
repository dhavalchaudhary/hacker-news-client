import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import { AppState } from "./types/store/index";
import * as constants from "./constants";
import * as ActionTypes from "./types/actions/counter";
import * as actions from "./actions/counter";

interface IProps {
  count: number;
  onIncreaseCounter: () => void;
  onDecreaseCounter: () => void;
}

class App extends Component<IProps> {
  render() {
    return (
      <div className="App">
        <div>{JSON.stringify(this.props)}</div>
        <button onClick={this.props.onIncreaseCounter}>Increase</button>
        <button onClick={this.props.onDecreaseCounter}>Decrease</button>
      </div>
    );
  }
}
const mapStateToProps = (state: AppState) => ({
  count: state.test.count
});

export function mapDispatchToProps(
  dispatch: Dispatch<ActionTypes.COUNTER_ACTIONS>
) {
  return {
    onIncreaseCounter: () => dispatch(actions.increaseCounter()),
    onDecreaseCounter: () => dispatch(actions.decreaseCounter())
  };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
