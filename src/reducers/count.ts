import { CountState } from "../types/reducers/count";
import * as constants from "../constants";
import * as ActionTypes from "../types/actions/counter";

const initialState: CountState = {
  count: 0
};

const countReducer = (
  state = initialState,
  action: ActionTypes.COUNTER_ACTIONS
): CountState => {
  switch (action.type) {
    case constants.INCREASE_COUNTER:
      return { ...state, count: state.count + 1 };
    case constants.DECREASE_COUNTER:
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
};

export default countReducer;
