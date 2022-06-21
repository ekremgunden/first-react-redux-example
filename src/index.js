import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './stores'
import { Provider } from 'react-redux'
import Header from './components/Header';

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <Header/>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);
