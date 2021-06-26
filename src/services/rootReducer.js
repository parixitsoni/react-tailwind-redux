import { combineReducers } from "redux";
import counterReducer from "./Reducer/CounterReducer";

const rootReducer = combineReducers({
  counter: counterReducer,
});

export default rootReducer;
