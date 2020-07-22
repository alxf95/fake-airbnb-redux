import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';

import './application.css';
import App from './components/App';
import flatsReducer from './reducers/flatsReducer.js';
import selectedFlatReducer from './reducers/selectedFlatReducer.js';

const reducers = combineReducers({
  flats: flatsReducer,
  selectedFlat: selectedFlatReducer,
});

const root = document.getElementById('root');
ReactDOM.render(
  <Provider store={createStore(reducers)}>
    <App />
  </Provider>,
  root
);
