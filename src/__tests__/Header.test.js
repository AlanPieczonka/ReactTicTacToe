import React from 'react';
import ReactDOM from 'react-dom';
import { expect, context } from 'chai';
import {mount, render, shallow} from 'enzyme';

import Header from './../Components/Header';

describe('Header Component', () => {
  
    it('renders without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(<Header />, div);
    })

    it('renders React logo', () => {
      const wrapper = shallow(<Header />);
      expect(wrapper.find('.img--reactlogo')).to.have.length(1);
    });
  
    it('renders h1 ', () => {
      const wrapper = shallow(<Header />);
      expect(wrapper.find('.h1')).to.have.length(1);
    });

    it('renders h2 ', () => {
      const wrapper = shallow(<Header />);
      expect(wrapper.find('.h2')).to.have.length(1);
    });

    it('renders span', () => {
      const wrapper = shallow(<Header />);
      expect(wrapper.find('.span--react')).to.have.length(1);
    }); 

    it('renders proper text', () => {
      const wrapper = render(<Header />);
      expect(wrapper.text()).to.contain('Tic Tac Toe Made with React');
    });

});
