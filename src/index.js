import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Counter from './Counter';
import store from './app/store'
import { Provider } from 'react-redux'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Counter />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
