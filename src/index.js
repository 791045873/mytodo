import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './container/App';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducer from './reducer/todo';


const store = createStore(reducer.reducer);
ReactDOM.render(
    <Provider store = {store}>
        <App />
    </Provider>,
    document.getElementById('root'));
