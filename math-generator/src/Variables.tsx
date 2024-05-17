import React from "react";
import Fraction from "fraction.js";

interface VariableProps {
  a: number;
  k: number;
  d: number;
  c: number;
  f: string;
  b?: number;
}

let Variables = ({ a, k, d, c, f, b }: VariableProps) => {
  let a_fraction = new Fraction(a).toFraction()
  let k_fraction = new Fraction(k).toFraction()
  return (
    <div>
      <h1>
        g(x) = {a === 1 ? "" : a === -1 ? "-" : a_fraction}f[
        {k === 1 ? "x" : k === -1 ? "-x" : k_fraction + "(x"}
        {d !== 0 ? ((Math.abs(Number(k)) === 1 ? (d * Number(k)) > 0 ? " - " : " + " : d > 0 ? " - " : " + ")) + Math.abs(d) : ""}{(Math.abs(Number(k)) === 1 ? "" : ")")}]{" "}
        {c !== 0 ? (c > 0 ? " + " : " - ") + Math.abs(c) : ""}
      </h1>
      <h2>Parent Function: {f === "" ? "Not Selected" : b ? f + " - B: " + b : f}</h2>
    </div>
  );
};

export default Variables;
