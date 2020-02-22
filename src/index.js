import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css'
import App from './App';
import {Provider} from "react-redux";
import {store} from "./store";


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

/*setTimeout(() => {
 store.dispatch({
 type: 'ADD BOOKS',
 name: '1984',
 author: 'Georg Orwel',
 price: 200
 });
 }, 10000);*/