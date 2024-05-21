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
  let a_fraction = new Fraction(a).toFraction();
  let k_fraction = new Fraction(k).toFraction();
  let error_equation = Math.random() < 0.5;

  if (error_equation) {
    let c_at_a = Math.random() < 0.3;
    let k_unfactored = Math.random() < 1;

    if (c_at_a) {
      return (
        <div>
          <h1>
            g(x) ={" "}
            {c !== 0
              ? c > 0
                ? Math.abs(c) + (Number(a) > 0 ? " + " : " ")
                : " -" + Math.abs(c) + (Number(a) > 0 ? " + " : " ")
              : ""}
            {Math.abs(a) === 1 ? (Number(a) > 0 ? "" : " - ") : a_fraction}f
            {Math.abs(Number(k)) === 1 ? "" : "["}
            {k === 1 ? "(x" : k === -1 ? "(-x" : k_fraction + "(x"}
            {d !== 0
            ? d * Number(k) > 0
                  ? " - " + Math.abs(d) + ")"
                  : " + " + Math.abs(d) + ")"
            : ")"}
            {Math.abs(Number(k)) === 1 ? "" : "]"}
          </h1>
          <h2>
            Parent Function:{" "}
            {f === "" ? "Not Selected" : b ? f + " - B: " + b : f}
          </h2>
        </div>
      );
    }

    if (k_unfactored) {
      return (
        <div>
          <h1>
            g(x) = {a === 1 ? "" : a === -1 ? "-" : a_fraction}f
            {k === 1 ? "(x" : k === -1 ? "(-x" : "(" + k_fraction + "x"}
            {d !== 0
              ? (d * Number(k) > 0 ? " - " : " + ") +
                new Fraction(Math.abs(d) * Math.abs(k)).toFraction()
              : ")"}
            {Math.abs(Number(k)) === 1 ? ")" : ")"}
            {c !== 0 ? (c > 0 ? " + " : " - ") + Math.abs(c) : ""}
          </h1>
          <h2>
            Parent Function:{" "}
            {f === "" ? "Not Selected" : b ? f + " - B: " + b : f}
          </h2>
        </div>
      );
    }
  } else {
    return (
      <div>
        <h1>
          g(x) = {a === 1 ? "" : a === -1 ? "-" : a_fraction}f
          {Math.abs(Number(k)) === 1 ? "" : "["}
          {k === 1 ? "(x" : k === -1 ? "(-x" : k_fraction + "(x"}
          {d !== 0
            ? d * Number(k) > 0
                  ? " - " + Math.abs(d) + ")"
                  : " + " + Math.abs(d) + ")"
            : ")"}
          {Math.abs(Number(k)) === 1 ? "" : "]"}
          {c !== 0 ? (c > 0 ? " + " : " - ") + Math.abs(c) : ""}
        </h1>
        <h2>
          Parent Function:{" "}
          {f === "" ? "Not Selected" : b ? f + " - B: " + b : f}
        </h2>
      </div>
    );
  }
};

export default Variables;
