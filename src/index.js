import React from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import { Provider, createStore } from 'react-redux';
import { applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { configureStore } from '@reduxjs/toolkit';
import App from './App';
import reducers from './reducers';
import './index.css';

// ReactDOM.render(<App />, document.getElementById('root'));

// const store = configureStore(reducers, compose(applyMiddleware(thunk)))
const store = configureStore({reducer: reducers})


const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(
    <Provider store={store}>
        <App tab="home" />
    </Provider>
);