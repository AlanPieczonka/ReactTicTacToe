import React from "react";
import PropTypes from "prop-types";

//Functional Component
export const Square = props => {
  return(
      <button className={`item item--${props.fieldNumber}`} onClick={() => props.onClick()}>
        <span className={`span span--${props.value}`}>{props.value}</span>
      </button>
  )
}

Square.propTypes = {
  fieldNumber: PropTypes.number,
  value: PropTypes.string,
  onClick: PropTypes.func,
}