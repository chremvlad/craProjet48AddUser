import React from "react";
import mobclasse from "./Button.module.css";

const Button = (props) => {
  return(
  <button
    className={mobclasse.button}
    type={props.type || "button"}
    onClick={props.onClick}
  >
    {props.children}
  </button>
  );
};

export default Button;
