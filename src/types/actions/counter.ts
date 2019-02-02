import * as constants from "../../constants";

export type INCREASE_COUNTER = typeof constants.INCREASE_COUNTER;
export type DECREASE_COUNTER = typeof constants.DECREASE_COUNTER;

export type COUNTER_ACTIONS_TYPE = INCREASE_COUNTER | DECREASE_COUNTER;

export interface INCREASE_COUNTER_ACTION {
  type: INCREASE_COUNTER;
}

export interface DECREASE_COUNTER_ACTION {
  type: DECREASE_COUNTER;
}

export type COUNTER_ACTIONS = INCREASE_COUNTER_ACTION | DECREASE_COUNTER_ACTION;
