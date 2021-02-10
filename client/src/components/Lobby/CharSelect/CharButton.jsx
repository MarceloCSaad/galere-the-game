import React from "react";
import "./CharButton.css";

export default function CharButton(props) {
  
  let i = "char-button-container"
  if (props.payload.id === props.selected )
  i = "char-button-container-selected"

  return (
    <div className={i}>
      <h3>{props.payload.name}</h3>
      <p>{props.payload.bio}</p>
    </div>
  )
}