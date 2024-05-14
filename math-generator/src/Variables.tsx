import React from "react";

interface VariableProps {
  a: string | number;
  k: string | number;
  d: number;
  c: number;
}

const Variables = ({ a, k, d, c }: VariableProps) => {
  return (
    <div>
      <button className={"btn btn-primary"}>
        g(x) = {a === 1 ? "" : a === -1 ? "-" : a}f(
        {k === 1 ? "" : k === -1 ? "-" : k}(x
        {d !== 0 ? (d > 0 ? " + " : " - ") + Math.abs(d) : ""})){" "}
        {c !== 0 ? (c > 0 ? " + " : " - ") + Math.abs(c) : ""}
      </button>
    </div>
  );
};

export default Variables;
