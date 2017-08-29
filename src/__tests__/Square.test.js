import React from "react";
import ReactDOM from "react-dom";
import { expect } from "chai";
import { mount, render, shallow} from 'enzyme';

import {Square} from './../Components/Square';

describe('Square Component', () => {

    it('renders button', () => {
        const wrapper = shallow(<Square />);
        expect(wrapper.find('button')).to.have.length(1);
    });

    it('renders span', () => {
        const wrapper = shallow(<Square />);
        expect(wrapper.find('span')).to.have.length(1);
    });

    it('accepts props', () => {
        const wrapper = shallow(<Square fieldNumber={2} value={'X'}/>);
        expect(wrapper.instance().props.fieldNumber).to.equal(2);
        expect(wrapper.instance().props.value).to.equal('X');
    });

});

