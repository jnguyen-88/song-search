import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';


import App from './components/App';
import reducers from './reducers';

ReactDOM.render(
    // 'store' is a prop in the Provider component
    // it calls the 'createStore' method and u pass the reducers to it
    <Provider store={createStore(reducers)}>
        <App />
    </Provider>,
    document.querySelector('#root')
);
