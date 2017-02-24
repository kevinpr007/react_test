import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { createStore } from 'redux'
import rootReducer from './rootReducer'

const store = createStore(
  rootReducer
)

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
