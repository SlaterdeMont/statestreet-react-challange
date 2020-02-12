import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers/rootReducer';

const store = createStore(rootReducer);
const data = require('./data/data.json');

//sets the data for the app
store.dispatch({type: 'ADD_DATA', transactions: data.transactions});

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
