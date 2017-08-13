import React from 'react';
import ReactDOM from 'react-dom';
import { expect } from 'chai';

import App from './../Components/App';

describe('App Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
  });
});


