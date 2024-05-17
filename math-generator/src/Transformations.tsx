import { useState } from "react";
import Fraction from "fraction.js";

interface VariableProps {
  a: number;
  k: number;
  d: number;
  c: number;
  f: string;
  b?: number;
}

const Transformations = ({ a, k, d, c }: VariableProps) => {
  const a_fraction = new Fraction(Math.abs(a)).toFraction().toString();
  const k_fraction = new Fraction(Math.abs(k));

  const transformations = [
    `${a < 0 ? "Reflected on the x-axis" : ""}`,
    `${Math.abs(Number(a)) > 1
      ? "Vertically stretched by a factor of " + a_fraction
      : Math.abs(Number(a)) < 1
        ? "Vertically compressed by a factor of " + a_fraction
        : ""
    }`,
    `${Number(k) < 0 ? "Reflected on the y-axis" : ""}`,
    `${Math.abs(Number(k)) > 1
      ? `Horizontally compressed by a factor of ${k_fraction
        .inverse()
        .toFraction()
        .toString()}`
      : Math.abs(Number(k)) < 1
        ? `Horizontally stretched by a factor of ${k_fraction
          .inverse()
          .toFraction()
          .toString()}`
        : ""
    }`,
    `${d !== 0 ? `Horizontally translated ${Math.abs(d)} units to the ${d > 0 ? "right" : "left"}` : ""}`,
    `${c !== 0 ? `Vertically translated ${Math.abs(c)} units ${c > 0 ? "up" : "down"}` : ""}`,
  ];

  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div>
        <button className="see-button" onClick={() => setIsOpen(!isOpen)}>Click to {isOpen ? "Hide" : "See"} The Transformations</button>
        {isOpen && (
          <div>
            <p className="transformations-text">
              {transformations.map((transformation, index) => (
                <div key={index}>{transformation ? "-" + transformation : ""}</div>
              ))}
            </p>
          </div>
        )}
      </div>
    </>
  );
};

export default Transformations;
