import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Dispatch } from "redux";
import {
  chiaAction,
  congAction,
  nhanAction,
  truAction,
} from "../store/result/action";

const Caculate = () => {
  const [a, setA] = useState<number>(0);
  const [b, setB] = useState<number>(0);
  const dispatch: Dispatch<any> = useDispatch();
  const cong = (a: number, b: number) => {
    dispatch(congAction(a, b));
  };
  const tru = (a: number, b: number) => {
    dispatch(truAction(a, b));
  };
  const nhan = (a: number, b: number) => {
    dispatch(nhanAction(a, b));
  };
  const chia = (a: number, b: number) => {
    dispatch(chiaAction(a, b));
  };
  return (
    <div>
      <input
        type="text"
        placeholder="Nhập số A"
        onChange={(event) => {
          setA(+event.target.value);
        }}
      />
      <input
        type="text"
        placeholder="Nhập số B"
        onChange={(event) => {
          setB(+event.target.value);
        }}
      />
      <div>
        <button
          onClick={() => {
            cong(a, b);
          }}
        >
          +
        </button>
        <button
          onClick={() => {
            tru(a, b);
          }}
        >
          -
        </button>
        <button
          onClick={() => {
            nhan(a, b);
          }}
        >
          x
        </button>
        <button
          onClick={() => {
            chia(a, b);
          }}
        >
          :
        </button>
      </div>
    </div>
  );
};

export default Caculate;
