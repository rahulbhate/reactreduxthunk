// index.js

import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { createLogger } from 'redux-logger';
import App from './App';
import rootReducer from './reducers';
import { fetchCarShows } from './actions/index';

const store = createStore(rootReducer, applyMiddleware(thunk, createLogger()));

store.dispatch(fetchCarShows());

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root'));

