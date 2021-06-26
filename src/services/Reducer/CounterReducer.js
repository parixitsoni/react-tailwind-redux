import * as actionTypes from "../Types";

const INITIAL_STATE = {
  count: 0,
};

const CounterReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.INCREMENT:
      return {
        ...state,
        count: state.count + 1,
      };

    case actionTypes.DECREMENT:
      return {
        ...state,
        count: state.count - 1,
      };

    default:
      return state;
  }
};

export default CounterReducer;
