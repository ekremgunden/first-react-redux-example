import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './Home';
import { createStore } from "redux";
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import { Provider } from "react-redux";
import Reducer from "./stores/basket/basketSlice";
import Products from './components/Products';
import Layout from './components/Layout';
const store = createStore(Reducer);


ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route exact path="/*" element={<Layout/>}>
        <Route exact path="" element={<Home />} />
        <Route exact path="products" element={<Products />} />
      </Route>
    </Routes>
  </BrowserRouter>
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);
