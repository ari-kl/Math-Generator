import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Variables from "./Variables";

function App() {
  function getRandomDecimal() {
    const decimals = [0.25, 0.5, 0.75, 0.33, 0.66];
    const fractions = ["1/4", "1/2", "3/4", "1/3", "2/3"];
    const randomIndex = Math.floor(Math.random() * decimals.length);
    return Math.random() < 0.1
      ? Math.random() < 0.3
        ? decimals[randomIndex]
        : fractions[randomIndex]
      : null;
  }
  const [a, setA] = useState(getRandomDecimal() || 1);
  const [k, setK] = useState(getRandomDecimal() || 1);
  const [d, setD] = useState(
    Math.floor(
      Math.random() * (Math.floor(10) - Math.ceil(-5) + 1) + Math.ceil(-5)
    )
  );
  const [c, setC] = useState(
    Math.floor(
      Math.random() * (Math.floor(15) - Math.ceil(-5) + 1) + Math.ceil(-5)
    )
  );

  return (
    <>
      <div>
        <Variables a={a} k={k} d={d} c={c} />
      </div>
    </>
  );
}

export default App;
