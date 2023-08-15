import React from 'react';
import ReactDOM from 'react-dom';

import Application from './Application';
import { Provider } from 'react-redux';

import './index.scss';
import { store } from './store';

ReactDOM.render(
  // The Provider helps to give access of store in the hierarchy.
  <Provider store={store}>
    <React.StrictMode>
      <Application />
      </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);
