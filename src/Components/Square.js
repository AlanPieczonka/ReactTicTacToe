import React, { Component } from "react";

class Square extends Component {
  
  render () {
    return (
      <button className="item item1" onClick={() => this.props.onClick()}>
        <span className={`span span--${this.props.value}`}>{this.props.value}</span>
      </button>
    )
  }
}

export default Square;
