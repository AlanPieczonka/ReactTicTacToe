import React from 'react';
import ReactDOM from 'react-dom';
import { expect, context } from 'chai';
import { mount, render, shallow } from 'enzyme';

import { Header } from './../Components/Header';

describe('Header Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Header />, div);
  });

  it('renders React logo', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find('.img--reactlogo')).to.have.length(1);
  });

  it('s h1 text is Tic Tac Toe ', () => {
    const wrapper = shallow(<Header/>);
    expect(wrapper.find('h1').text()).to.equal('Tic Tac Toe ');
  });

  it('s h2 text is Made with React ', () => {
    const wrapper = shallow(<Header/>);
    expect(wrapper.find('h2').text()).to.equal('Made with React');
  });

  it('s span text is React', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find('span').text()).to.equal('React');
  });

});
