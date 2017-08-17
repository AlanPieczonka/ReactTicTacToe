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


});

