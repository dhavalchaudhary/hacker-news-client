import * as constants from "../constants";
import * as ActionTypes from "../types/actions/counter";

export function increaseCounter(): ActionTypes.INCREASE_COUNTER_ACTION {
  return {
    type: constants.INCREASE_COUNTER
  };
}

export function decreaseCounter(): ActionTypes.DECREASE_COUNTER_ACTION {
  return {
    type: constants.DECREASE_COUNTER
  };
}
