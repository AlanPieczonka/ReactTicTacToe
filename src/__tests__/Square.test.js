import React from "react";
import ReactDOM from "react-dom";
import { expect } from "chai";
import {mount, render, shallow} from 'enzyme'

import Square from './../Components/Square';

describe('Square Component', () => {

    it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Square />, div);
    });

  it('renders children when passed in', () => {
    const wrapper = shallow((
      <Square>
        <div className="unique" />
      </Square>
    ));
    expect(wrapper.contains(<div className="unique" />)).to.equal(true);
  });

});

