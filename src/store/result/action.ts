import * as TypeAction from "./type";
export interface IPayload {
  a: number;
  b: number;
}
export type resultAction = {
  type: string;
  payload: IPayload;
};
export function congAction(a: number, b: number) {
  const action: resultAction = {
    type: TypeAction.CONG,
    payload: {
      a: a,
      b: b,
    },
  };
  return (dispatch: TypeAction.DispatchType) => {
    dispatch(action);
  };
}
export function truAction(a: number, b: number) {
  const action: resultAction = {
    type: TypeAction.GIAM,
    payload: {
      a: a,
      b: b,
    },
  };
  return (dispatch: TypeAction.DispatchType) => {
    dispatch(action);
  };
}
export function nhanAction(a: number, b: number) {
  const action: resultAction = {
    type: TypeAction.NHAN,
    payload: {
      a: a,
      b: b,
    },
  };
  return (dispatch: TypeAction.DispatchType) => {
    dispatch(action);
  };
}
export function chiaAction(a: number, b: number) {
  const action: resultAction = {
    type: TypeAction.CHIA,
    payload: {
      a: a,
      b: b,
    },
  };
  return (dispatch: TypeAction.DispatchType) => {
    dispatch(action);
  };
}
