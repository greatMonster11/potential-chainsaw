import React from "react";

export default function Rating(props) {
  return (
    <div className="rating">
      <span className={props.value >= 1 ? "active" : ""}>&#9734;</span>
      <span className={props.value >= 2 ? "active" : ""}>&#9734;</span>
      <span className={props.value >= 3 ? "active" : ""}>&#9734;</span>
      <span className={props.value >= 4 ? "active" : ""}>&#9734;</span>
      <span className={props.value >= 5 ? "active" : ""}>&#9734;</span>
    </div>
  );
}
