import { resultAction } from "./action";
import * as actions from "./type";
export interface IResultState {
  result: number;
}
const initResultState: IResultState = {
  result: 0,
};
const resultReducer = (
  state: IResultState = initResultState,
  action: resultAction
): IResultState => {
  switch (action.type) {
    case actions.CONG:
      state = {
        ...state,
        result: action.payload.a + action.payload.b,
      };
      break;
    case actions.GIAM:
      state = {
        ...state,
        result: action.payload.a - action.payload.b,
      };
      break;
    case actions.NHAN:
      state = {
        ...state,
        result: action.payload.a * action.payload.b,
      };
      break;
    case actions.CHIA:
      state = {
        ...state,
        result: action.payload.a / action.payload.b,
      };
      break;
  }
  return state;
};
export default resultReducer;
