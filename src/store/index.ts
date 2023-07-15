import { applyMiddleware, combineReducers, createStore } from "redux";
import resultReducer, { IResultState } from "./result/reduce";
import thunk from "redux-thunk";

export interface IRootState {
  result: IResultState;
}
const rootReduce = combineReducers({
  result: resultReducer,
});
export const store = createStore(rootReduce, applyMiddleware(thunk));
