import React from 'react';
import ReactDOM from 'react-dom';

import './css/normalize.css';
import './css/BasicStyles.css';

import App from './Components/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
