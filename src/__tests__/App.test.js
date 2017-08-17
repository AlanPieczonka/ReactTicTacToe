import React from 'react';
import ReactDOM from 'react-dom';
import { expect, context } from 'chai';
import {mount, render, shallow} from 'enzyme';

import App from './../Components/App';
import Header from './../Components/Header';
import Main from './../Components/Header';
import Footer from './../Components/Header';

describe('App Component', () => {

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
  });

  it('renders Header component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Header)).to.have.length(1);
  });

  it('renders Main component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Main)).to.have.length(1);
  });

  it('renders Footer component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Footer)).to.have.length(1);
  });

});


