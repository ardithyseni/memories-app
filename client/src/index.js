import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';

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