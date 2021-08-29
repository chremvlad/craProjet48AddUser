import React from "react";
import mostyles from "./Card.module.css";

//container apply `2 css classes`

const Card = (props) => {
  return (
    <div className={`${mostyles.card} ${props.className}`}>
      {props.children}
    </div>
  );
};

export default Card;
