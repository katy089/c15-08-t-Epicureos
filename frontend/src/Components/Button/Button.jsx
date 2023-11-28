import React, { useState } from "react";
import "./button.css";

function Button(props) {
  const { bColor, tColor, text, iColor, click } = props;
  const [isHover, setIsHover] = useState(false);
  const buttonStyle = {
    backgroundColor: isHover ? iColor : bColor,
    color: tColor,
  };

  const handleMouseEnter = () => {
    setIsHover(true);
  };
  const handleMouseLeave = () => {
    setIsHover(false);
  };
  return (
    <button
      style={buttonStyle}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={click}
    >
      {text}
    </button>
  );
}

export default Button;
