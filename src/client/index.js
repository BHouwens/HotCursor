import React from 'react';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger'
import { render as renderToDom } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

/*- Internal imports -*/

import { App } from './components';
import { rootReducer } from './reducers';
import { fetchProjects } from './actions/projectSelection';

const loggerMiddleware = createLogger();

const store = createStore(
    rootReducer,
    window.devToolsExtension ? window.devToolsExtension() : undefined,
    applyMiddleware(thunkMiddleware)
);

store.dispatch(fetchProjects());

renderToDom(
    <Provider store={store}>
        <App />
    </Provider>,
    document.querySelector('#app')
);