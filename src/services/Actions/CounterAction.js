import * as actionTypes from "../Types";

export const increaseCounter = () => {
  return {
    type: actionTypes.INCREMENT,
  };
};

export const decreaseCounter = () => {
  return {
    type: actionTypes.DECREMENT,
  };
};
