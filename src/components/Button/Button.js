import React from "react";
import "./button.scss";

function Button(props) {
  return (
    <button className="c-signup-btn" onClick={props.onClick}>
      {props.text}
    </button>
  );
}

export default Button;
