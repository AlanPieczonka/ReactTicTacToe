import React from 'react';
import ReactDOM from 'react-dom';
import { expect, context } from 'chai';
import {mount, render, shallow} from 'enzyme';
import { Footer } from './../Components/Footer';

describe('Footer Component', () => {

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Footer />, div);
    });

    it('renders github logo', () => {
      const wrapper = shallow(<Footer />);
      expect(wrapper.find('.img--githublogo')).to.have.length(1);
    });

    it('s h4 text is Created by Alan Pieczonka, 2017', () => {
      const wrapper = shallow(<Footer />);
      expect(wrapper.find('h4').text()).to.equal('Created by Alan Pieczonka, 2017');
    }); 

});
