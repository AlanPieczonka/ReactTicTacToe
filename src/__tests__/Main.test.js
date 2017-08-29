import React from 'react';
import ReactDOM from 'react-dom';
import sinon from 'sinon';

import { expect, context } from 'chai';
import {mount, render, shallow} from 'enzyme';

import Main from './../Components/Main';

describe('Main Component', () => {

    it('has state: squares which is an Array', () => {
        const wrapper = shallow(<Main />);
        expect(wrapper.state().squares).to.be.an('Array'); 
    })

    it('has state: squares which is an Array that includes null values', () => {
        const wrapper = shallow(<Main />);
        expect(wrapper.state().squares).to.be.an('Array').that.includes(null);
    })

    it('has state: xIsNext, which is true', () => {
        const wrapper = shallow(<Main />);
        expect(wrapper.state().xIsNext).to.equal(true);
      });

    it('has handleClick method', () => {
        const wrapper = shallow(<Main />);
        expect(wrapper.instance().handleClick()).to.be.undefined; //because handleClick just sets the state and returns the undefined
    });

    it('has restart button', () => {
        const wrapper = shallow(<Main />);
        wrapper.find('.button--restart').simulate('click', { preventDefault() {} });  
    });
      
});