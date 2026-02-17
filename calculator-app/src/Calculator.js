import React, { useState } from "react";
import "./Calculator.css";

function Calculator() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState("");

  return (
    <div className="calculator">
      <h2>React Calculator</h2>

      <input
        type="number"
        placeholder="Enter first number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
      />

      <input
        type="number"
        placeholder="Enter second number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
      />

      <div className="buttons">
        <button onClick={() => setResult(Number(num1) + Number(num2))}>
          Add
        </button>

        <button onClick={() => setResult(Number(num1) - Number(num2))}>
          Subtract
        </button>

        <button onClick={() => setResult(Number(num1) * Number(num2))}>
          Multiply
        </button>

        <button onClick={() => setResult(Number(num1) / Number(num2))}>
          Divide
        </button>
      </div>

      <div className="result">
        <strong>Result:</strong> {result}
      </div>
    </div>
  );
}

export default Calculator;
