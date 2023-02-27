import React, { useState } from "react";
import "./calculator.css";
import { buttons, buttonClasses } from "../../files/buttons";

function Calculator() {
  const [result, setResult] = useState(0);

  const handleResult = (result) =>
    result > 999999999999999 ? "error" : result;

  const handleClick = (value) => {
    switch (value) {
      case "C":
        setResult(0);
        break;
      case "=":
        try {
          setResult(eval(result) || 0);
        } catch (e) {
          setResult("Errore");
        }
        break;
      default:
        setResult((prevResult) => {
          if (prevResult === 0) {
            return value;
          } else {
            return prevResult + value;
          }
        });
        break;
    }
  };

  return (
    <div className="calculator">
      <div className="result">{handleResult(result)}</div>
      <div className="button-row">
        {buttons.map((button) => (
          <button
            key={button.value}
            value={button.value}
            className={`button ${buttonClasses[button.value] || ""}`}
            onClick={() => handleClick(button.value)}
          >
            {button.label}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Calculator;
