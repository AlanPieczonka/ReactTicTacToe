import React from 'react';
import ReactDOM from 'react-dom';
import { expect, context } from 'chai';
import {mount, render, shallow} from 'enzyme';

import Main from './../Components/Main';

describe('Main Component', () => {

    it('renders without crashing', () =>{ 
        const div = document.createElement('div');
        ReactDOM.render(<Main />, div);
    });

    it('renders h3', () => {
        const wrapper = shallow(<Main />);
        expect(wrapper.find('.h3')).to.have.length(2);
    }); 

    it('renders h4', () => {
        const wrapper = shallow(<Main />);
        expect(wrapper.find('.h4')).to.have.length(1);
    });

    it('renders h5', () => {
        const wrapper = shallow(<Main />);
        expect(wrapper.find('.h5')).to.have.length(1);
    });

    it('renders board div', () => {
        const wrapper = shallow(<Main />);
        expect(wrapper.find('.board')).to.have.length(1);
    });

    it('renders 2 row divs', () => {
        const wrapper = shallow(<Main />);
        expect(wrapper.find('.row')).to.have.length(2);
        expect(wrapper.find('.row--center')).to.have.length(2);
    });

    it('renders restart button', () => {
        const wrapper = shallow(<Main />);
        expect(wrapper.find('.button')).to.have.length(1);
        expect(wrapper.find('.button--restart')).to.have.length(1);
    });
    

});