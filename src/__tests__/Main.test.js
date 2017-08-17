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

});