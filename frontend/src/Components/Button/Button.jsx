import React from "react";
import "./button.css";

function Button(props) {
  const { bColor, tColor, text } = props;
  return (
    <button style={{ backgroundColor: bColor, color: tColor }}>{text}</button>
  );
}

export default Button;
