import React, { Component } from "react";
import { expect } from "chai";
import {mount, render, shallow} from 'enzyme'
class Square extends Component {
  render () {
    return (
      <div className='unique'>
      </div>
    )
  }
}

export default Square;
