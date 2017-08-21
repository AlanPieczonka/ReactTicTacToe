import React, { Component } from "react";

//Functional Component
function Square(props){
  return(
      <button className={`item item${props.number + 1}`} onClick={() => props.onClick()}>
        <span className={`span span--${props.value}`}>{props.value}</span>
      </button>
  )
}

export default Square;
