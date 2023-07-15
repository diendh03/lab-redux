import { resultAction } from "./action";

export const CONG = "CONG";
export const GIAM = "GIAM";
export const NHAN = "NHAN";
export const CHIA = "CHIA";

export type DispatchType = (args: resultAction) => resultAction;
