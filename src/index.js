import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './container/App';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import todo from 'reducer/todo';

const store = createStore(todo);
ReactDOM.render(
    <Provider store = {store}>
        <App />
    </Provider>,
    document.getElementById('root'));
