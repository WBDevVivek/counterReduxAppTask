import "./styles.css";

import React from "react";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "./counterSlice";

export default function Counter({}) {
  const dispatch = useDispatch();

  const count = useSelector((state) => state.counterme.count);

  return (
    <>
      <h2>Counter</h2>
      <div className="counterDiv">
        <h1>{count}</h1>
        <div className="button">
          <button
            onClick={() => {
              dispatch(increment());
            }}
          >
            <AddIcon />
          </button>
          <button onClick={() => dispatch(decrement())}>
            <RemoveIcon />
          </button>
        </div>
      </div>
    </>
  );
}
